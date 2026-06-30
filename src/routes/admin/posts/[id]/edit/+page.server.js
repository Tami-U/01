import { error, fail, redirect } from '@sveltejs/kit';
import { getById, updatePost, deletePost } from '$lib/server/posts';

export async function load({ params }) {
	const post = await getById(Number(params.id));
	if (!post) throw error(404, '글을 찾을 수 없습니다.');
	return { post };
}

export const actions = {
	update: async ({ request, params }) => {
		const data = await request.formData();
		const title = (data.get('title') || '').toString().trim();
		const slug = (data.get('slug') || '').toString().trim();
		const excerpt = (data.get('excerpt') || '').toString().trim();
		const content = (data.get('content') || '').toString();
		const published = data.get('published') === 'on';

		const values = { title, slug, excerpt, content, published };

		if (!title) {
			return fail(400, { error: '제목을 입력하세요.', values });
		}

		await updatePost(Number(params.id), values);
		throw redirect(303, '/admin/posts');
	},

	delete: async ({ params }) => {
		await deletePost(Number(params.id));
		throw redirect(303, '/admin/posts');
	}
};
