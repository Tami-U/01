import { error } from '@sveltejs/kit';
import { getBySlug } from '$lib/server/posts';

export async function load({ params }) {
	const post = await getBySlug(params.slug);
	if (!post || !post.published) {
		throw error(404, '글을 찾을 수 없습니다.');
	}
	return { post };
}
