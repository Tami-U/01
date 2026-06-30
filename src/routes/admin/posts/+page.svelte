<script>
	import { enhance } from '$app/forms';
	let { data } = $props();

	function fmt(d) {
		return new Date(d).toLocaleDateString('ko-KR', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<svelte:head><title>글 관리 - 관리자</title></svelte:head>

<div class="flex items-center justify-between">
	<h1 class="font-headline-lg text-headline-lg font-semibold text-on-surface">글 관리</h1>
	<a
		href="/admin/posts/new"
		class="rounded-lg bg-deep-wine px-4 py-2 font-semibold text-on-primary transition-opacity hover:opacity-90"
	>
		+ 새 글
	</a>
</div>

{#if data.posts.length === 0}
	<div class="mt-10 rounded-xl border border-dashed border-outline-variant p-12 text-center text-dark-taupe">
		아직 작성된 글이 없습니다. <a href="/admin/posts/new" class="text-deep-wine underline">첫 글을 작성</a>해보세요.
	</div>
{:else}
	<ul class="mt-8 divide-y divide-outline-variant rounded-xl border border-outline-variant bg-card">
		{#each data.posts as post (post.id)}
			<li class="flex items-center justify-between gap-4 px-5 py-4">
				<div class="min-w-0">
					<div class="flex items-center gap-2">
						<a
							href="/admin/posts/{post.id}/edit"
							class="truncate font-medium text-charcoal-brown hover:text-deep-wine"
						>
							{post.title}
						</a>
						{#if !post.published}
							<span class="shrink-0 rounded bg-surface-variant px-2 py-0.5 text-xs text-dark-taupe">
								비공개
							</span>
						{/if}
					</div>
					<p class="mt-0.5 truncate text-sm text-dark-taupe">
						/blog/{post.slug} · {fmt(post.created_at)}
					</p>
				</div>
				<div class="flex shrink-0 items-center gap-3">
					<a href="/admin/posts/{post.id}/edit" class="text-sm text-dark-taupe hover:text-deep-wine">
						수정
					</a>
					<form
						method="POST"
						action="?/delete"
						use:enhance={() => {
							return async ({ update }) => update();
						}}
						onsubmit={(e) => {
							if (!confirm('이 글을 삭제할까요? 되돌릴 수 없습니다.')) e.preventDefault();
						}}
					>
						<input type="hidden" name="id" value={post.id} />
						<button type="submit" class="text-sm text-error hover:underline">삭제</button>
					</form>
				</div>
			</li>
		{/each}
	</ul>
{/if}
