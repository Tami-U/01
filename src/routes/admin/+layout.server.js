import { redirect } from '@sveltejs/kit';

export async function load({ locals, url }) {
	const onLogin = url.pathname === '/admin/login';
	if (!locals.admin && !onLogin) {
		throw redirect(303, '/admin/login');
	}
	if (locals.admin && onLogin) {
		throw redirect(303, '/admin/posts');
	}
	return { admin: locals.admin };
}
