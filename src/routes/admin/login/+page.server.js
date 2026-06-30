import { fail, redirect } from '@sveltejs/kit';
import { dev } from '$app/environment';
import { verifyCredentials, createSessionToken, SESSION_COOKIE } from '$lib/server/auth';

export const actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();
		const id = (data.get('id') || '').toString();
		const pw = (data.get('pw') || '').toString();

		if (!verifyCredentials(id, pw)) {
			return fail(401, { error: '아이디 또는 비밀번호가 올바르지 않습니다.', id });
		}

		cookies.set(SESSION_COOKIE, createSessionToken(), {
			path: '/',
			httpOnly: true,
			sameSite: 'lax',
			secure: !dev,
			maxAge: 60 * 60 * 24 * 7 // 7일
		});

		throw redirect(303, '/admin/posts');
	}
};
