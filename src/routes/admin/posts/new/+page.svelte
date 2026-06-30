<script>
	import PostForm from '$lib/components/PostForm.svelte';
	let { form } = $props();
</script>

<svelte:head><title>새 글 작성 - 관리자</title></svelte:head>

<div class="mb-8">
	<a href="/admin/posts" class="text-sm text-dark-taupe hover:text-deep-wine">← 글 관리</a>
	<h1 class="mt-2 font-headline-lg text-headline-lg font-semibold text-on-surface">새 글 작성</h1>
</div>

<PostForm {form} submitLabel="발행" />
