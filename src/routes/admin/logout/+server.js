import { redirect } from '@sveltejs/kit';
import { SESSION_COOKIE } from '$lib/server/auth';

export function POST({ cookies }) {
	cookies.delete(SESSION_COOKIE, { path: '/' });
	throw redirect(303, '/admin/login');
}
