import { listPublished } from '$lib/server/posts';

export async function load() {
	const posts = await listPublished();
	return { posts };
}
