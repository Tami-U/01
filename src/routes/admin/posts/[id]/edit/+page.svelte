<script>
	import PostForm from '$lib/components/PostForm.svelte';
	let { data, form } = $props();
</script>

<svelte:head><title>글 수정 - 관리자</title></svelte:head>

<div class="mb-8 flex items-end justify-between">
	<div>
		<a href="/admin/posts" class="text-sm text-dark-taupe hover:text-deep-wine">← 글 관리</a>
		<h1 class="mt-2 font-headline-lg text-headline-lg font-semibold text-on-surface">글 수정</h1>
	</div>
	<a
		href="/blog/{data.post.slug}"
		target="_blank"
		rel="noopener"
		class="text-sm text-dark-taupe hover:text-deep-wine"
	>
		미리보기 ↗
	</a>
</div>

<PostForm post={data.post} {form} action="?/update" submitLabel="수정 저장" />

<div class="mt-12 border-t border-outline-variant pt-6">
	<form
		method="POST"
		action="?/delete"
		onsubmit={(e) => {
			if (!confirm('이 글을 삭제할까요? 되돌릴 수 없습니다.')) e.preventDefault();
		}}
	>
		<button type="submit" class="text-sm text-error hover:underline">이 글 삭제</button>
	</form>
</div>
