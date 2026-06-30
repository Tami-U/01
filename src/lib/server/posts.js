import { getSql, ensureSchema } from './db.js';

/** 제목에서 URL 슬러그를 생성합니다. (한글은 인코딩되어 URL에 사용 가능) */
export function slugify(input) {
	const base = String(input || '')
		.trim()
		.toLowerCase()
		.replace(/['"]/g, '')
		.replace(/[\s_]+/g, '-')
		.replace(/[^a-z0-9가-힣-]/g, '')
		.replace(/-+/g, '-')
		.replace(/^-|-$/g, '');
	return base || `post-${Date.now().toString(36)}`;
}

/** 공개된 글 목록 (최신순) */
export async function listPublished() {
	await ensureSchema();
	const sql = getSql();
	return sql`
		SELECT id, title, slug, excerpt, created_at
		FROM posts
		WHERE published = true
		ORDER BY created_at DESC
	`;
}

/** 모든 글 목록 (어드민용, 최신순) */
export async function listAll() {
	await ensureSchema();
	const sql = getSql();
	return sql`
		SELECT id, title, slug, excerpt, published, created_at, updated_at
		FROM posts
		ORDER BY created_at DESC
	`;
}

/** 슬러그로 단일 글 조회 */
export async function getBySlug(slug) {
	await ensureSchema();
	const sql = getSql();
	const rows = await sql`SELECT * FROM posts WHERE slug = ${slug} LIMIT 1`;
	return rows[0] ?? null;
}

/** id로 단일 글 조회 */
export async function getById(id) {
	await ensureSchema();
	const sql = getSql();
	const rows = await sql`SELECT * FROM posts WHERE id = ${id} LIMIT 1`;
	return rows[0] ?? null;
}

/** 슬러그 중복 시 -2, -3 ... 을 붙여 고유하게 만듭니다. (excludeId는 수정 시 자기 자신 제외) */
async function uniqueSlug(slug, excludeId = null) {
	const sql = getSql();
	let candidate = slug;
	let n = 1;
	// eslint-disable-next-line no-constant-condition
	while (true) {
		const rows = excludeId
			? await sql`SELECT id FROM posts WHERE slug = ${candidate} AND id <> ${excludeId} LIMIT 1`
			: await sql`SELECT id FROM posts WHERE slug = ${candidate} LIMIT 1`;
		if (rows.length === 0) return candidate;
		n += 1;
		candidate = `${slug}-${n}`;
	}
}

/** 새 글 생성 */
export async function createPost({ title, slug, excerpt, content, published }) {
	await ensureSchema();
	const sql = getSql();
	const finalSlug = await uniqueSlug(slugify(slug || title));
	const rows = await sql`
		INSERT INTO posts (title, slug, excerpt, content, published)
		VALUES (${title}, ${finalSlug}, ${excerpt}, ${content}, ${published})
		RETURNING *
	`;
	return rows[0];
}

/** 글 수정 */
export async function updatePost(id, { title, slug, excerpt, content, published }) {
	await ensureSchema();
	const sql = getSql();
	const finalSlug = await uniqueSlug(slugify(slug || title), id);
	const rows = await sql`
		UPDATE posts
		SET title = ${title},
		    slug = ${finalSlug},
		    excerpt = ${excerpt},
		    content = ${content},
		    published = ${published},
		    updated_at = now()
		WHERE id = ${id}
		RETURNING *
	`;
	return rows[0] ?? null;
}

/** 글 삭제 */
export async function deletePost(id) {
	await ensureSchema();
	const sql = getSql();
	await sql`DELETE FROM posts WHERE id = ${id}`;
}
