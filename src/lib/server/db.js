import { neon } from '@neondatabase/serverless';
import { env } from '$env/dynamic/private';

let _sql = null;

/**
 * Neon SQL 클라이언트를 반환합니다. (지연 초기화)
 * DATABASE_URL이 없으면 명확한 에러를 던집니다.
 */
export function getSql() {
	if (!_sql) {
		const url = env.DATABASE_URL;
		if (!url) {
			throw new Error(
				'DATABASE_URL 환경변수가 설정되지 않았습니다. .env 파일(로컬) 또는 Vercel 프로젝트 환경변수에 Neon 연결 문자열을 넣어주세요.'
			);
		}
		_sql = neon(url);
	}
	return _sql;
}

let _schemaReady = false;

/**
 * posts 테이블이 없으면 생성합니다. (콜드 스타트당 1회만 실제 실행)
 */
export async function ensureSchema() {
	if (_schemaReady) return;
	const sql = getSql();
	await sql`
		CREATE TABLE IF NOT EXISTS posts (
			id SERIAL PRIMARY KEY,
			title TEXT NOT NULL,
			slug TEXT NOT NULL UNIQUE,
			excerpt TEXT NOT NULL DEFAULT '',
			content TEXT NOT NULL DEFAULT '',
			published BOOLEAN NOT NULL DEFAULT true,
			created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
			updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
		)
	`;
	_schemaReady = true;
}
