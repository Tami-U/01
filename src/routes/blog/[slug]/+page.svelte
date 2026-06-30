<script>
	let { data } = $props();
	const post = $derived(data.post);

	function fmt(d) {
		return new Date(d).toLocaleDateString('ko-KR', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<svelte:head>
	<title>{post.title} - 박타미 TAMI PARK</title>
	{#if post.excerpt}<meta name="description" content={post.excerpt} />{/if}
</svelte:head>

<article class="mx-auto max-w-3xl px-margin-mobile py-20 md:px-0">
	<a href="/blog" class="font-label-caps text-label-caps uppercase text-dark-taupe hover:text-deep-wine">
		← 블로그 목록
	</a>

	<header class="mt-6 border-b border-outline-variant pb-8">
		<h1 class="font-headline-lg text-headline-lg font-bold text-on-surface md:text-display-lg-mobile">
			{post.title}
		</h1>
		<time class="mt-4 block font-label-caps text-label-caps uppercase text-dark-taupe">
			{fmt(post.created_at)}
		</time>
	</header>

	<div class="mt-10 whitespace-pre-wrap font-body-lg text-body-lg leading-relaxed text-on-surface">{post.content}</div>
</article>
