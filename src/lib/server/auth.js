import { createHmac, timingSafeEqual } from 'node:crypto';
import { env } from '$env/dynamic/private';

export const SESSION_COOKIE = 'admin_session';

/**
 * 현재 자격증명(ADMIN_ID/ADMIN_PW)으로부터 결정적인 세션 토큰을 만듭니다.
 * SESSION_SECRET으로 서명하므로, 비밀번호나 시크릿이 바뀌면 기존 쿠키는 자동 무효화됩니다.
 */
function makeToken() {
	const secret = env.SESSION_SECRET || 'dev-insecure-secret';
	const id = env.ADMIN_ID || '';
	const pw = env.ADMIN_PW || '';
	return createHmac('sha256', secret).update(`${id}:${pw}`).digest('hex');
}

/**
 * 아이디/비밀번호가 환경변수와 일치하는지 검사합니다. (타이밍 공격 방지)
 */
export function verifyCredentials(id, pw) {
	const expectedId = env.ADMIN_ID || '';
	const expectedPw = env.ADMIN_PW || '';
	if (!expectedId || !expectedPw) return false;
	return safeEqual(id, expectedId) && safeEqual(pw, expectedPw);
}

/** 로그인 성공 시 쿠키에 넣을 토큰 값 */
export function createSessionToken() {
	return makeToken();
}

/** 요청 쿠키의 토큰이 유효한지 검사 */
export function isValidSession(token) {
	if (!token) return false;
	return safeEqual(token, makeToken());
}

function safeEqual(a, b) {
	const ab = Buffer.from(String(a));
	const bb = Buffer.from(String(b));
	if (ab.length !== bb.length) return false;
	return timingSafeEqual(ab, bb);
}
