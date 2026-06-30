import { fail, redirect } from '@sveltejs/kit';
import { createPost } from '$lib/server/posts';

export const actions = {
	default: async ({ request }) => {
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

		await createPost(values);
		throw redirect(303, '/admin/posts');
	}
};
