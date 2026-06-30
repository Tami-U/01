<script>
	let { data } = $props();

	function fmt(d) {
		return new Date(d).toLocaleDateString('ko-KR', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<svelte:head><title>블로그 - 박타미 TAMI PARK</title></svelte:head>

<section class="px-margin-mobile md:px-margin-desktop py-20">
	<header class="mb-14">
		<h1 class="font-display-lg-mobile md:font-display-lg text-headline-lg md:text-display-lg font-bold text-on-surface">
			블로그
		</h1>
		<p class="mt-3 font-body-lg text-body-lg text-dark-taupe">기록하고 생각한 것들.</p>
	</header>

	{#if data.posts.length === 0}
		<p class="text-dark-taupe">아직 작성된 글이 없습니다.</p>
	{:else}
		<ul class="divide-y divide-outline-variant border-t border-outline-variant">
			{#each data.posts as post (post.id)}
				<li>
					<a
						href="/blog/{post.slug}"
						class="group flex flex-col gap-2 py-8 transition-colors md:flex-row md:items-baseline md:gap-8"
					>
						<time class="shrink-0 font-label-caps text-label-caps uppercase text-dark-taupe md:w-40">
							{fmt(post.created_at)}
						</time>
						<div>
							<h2 class="font-headline-md text-headline-md font-semibold text-charcoal-brown transition-colors group-hover:text-deep-wine">
								{post.title}
							</h2>
							{#if post.excerpt}
								<p class="mt-1 font-body-md text-body-md text-dark-taupe">{post.excerpt}</p>
							{/if}
						</div>
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</section>
