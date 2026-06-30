<script>
	import { page } from '$app/state';
	let { data, children } = $props();
</script>

<div class="min-h-screen bg-background text-on-surface">
	{#if data.admin}
		<header class="border-b border-outline-variant bg-surface-container-lowest">
			<div class="mx-auto flex max-w-screen-lg items-center justify-between px-6 py-4">
				<a href="/admin/posts" class="font-headline-md text-headline-md font-semibold text-deep-wine">
					관리자
				</a>
				<nav class="flex items-center gap-6">
					<a
						href="/admin/posts"
						class="text-sm font-semibold transition-colors hover:text-deep-wine"
						class:text-deep-wine={page.url.pathname.startsWith('/admin/posts')}
					>
						글 관리
					</a>
					<a href="/blog" class="text-sm text-dark-taupe transition-colors hover:text-deep-wine">
						블로그 보기 ↗
					</a>
					<form method="POST" action="/admin/logout">
						<button
							type="submit"
							class="rounded-md border border-outline-variant px-3 py-1.5 text-sm text-dark-taupe transition-colors hover:bg-surface-variant"
						>
							로그아웃
						</button>
					</form>
				</nav>
			</div>
		</header>
	{/if}

	<div class="mx-auto max-w-screen-lg px-6 py-10">
		{@render children()}
	</div>
</div>
