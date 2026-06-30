import { SESSION_COOKIE, isValidSession } from '$lib/server/auth';

export async function handle({ event, resolve }) {
	const token = event.cookies.get(SESSION_COOKIE);
	event.locals.admin = isValidSession(token);
	return resolve(event);
}
