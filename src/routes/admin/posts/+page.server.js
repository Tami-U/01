import { listAll, deletePost } from '$lib/server/posts';

export async function load() {
	const posts = await listAll();
	return { posts };
}

export const actions = {
	delete: async ({ request }) => {
		const data = await request.formData();
		const id = Number(data.get('id'));
		if (id) await deletePost(id);
		return { deleted: true };
	}
};
