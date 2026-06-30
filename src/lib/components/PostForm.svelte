<script>
	import { enhance } from '$app/forms';

	let { post = null, form = null, action = '', submitLabel = '저장' } = $props();

	// 우선순위: 검증 실패로 돌아온 값(form) > 기존 글(post) > 빈 값
	const v = (key, fallback = '') => form?.values?.[key] ?? post?.[key] ?? fallback;
	let published = $state(form?.values?.published ?? post?.published ?? true);
</script>

<form method="POST" {action} use:enhance class="space-y-5">
	<div>
		<label for="title" class="mb-1 block text-sm font-medium text-charcoal-brown">제목</label>
		<input
			id="title"
			name="title"
			type="text"
			value={v('title')}
			required
			class="w-full rounded-lg border border-input bg-background px-3 py-2 text-on-surface outline-none focus:border-deep-wine focus:ring-1 focus:ring-deep-wine"
		/>
	</div>

	<div>
		<label for="slug" class="mb-1 block text-sm font-medium text-charcoal-brown">
			슬러그 <span class="font-normal text-dark-taupe">(비워두면 제목에서 자동 생성)</span>
		</label>
		<input
			id="slug"
			name="slug"
			type="text"
			value={v('slug')}
			placeholder="my-first-post"
			class="w-full rounded-lg border border-input bg-background px-3 py-2 text-on-surface outline-none focus:border-deep-wine focus:ring-1 focus:ring-deep-wine"
		/>
	</div>

	<div>
		<label for="excerpt" class="mb-1 block text-sm font-medium text-charcoal-brown">
			요약 <span class="font-normal text-dark-taupe">(목록에 표시되는 짧은 설명)</span>
		</label>
		<input
			id="excerpt"
			name="excerpt"
			type="text"
			value={v('excerpt')}
			class="w-full rounded-lg border border-input bg-background px-3 py-2 text-on-surface outline-none focus:border-deep-wine focus:ring-1 focus:ring-deep-wine"
		/>
	</div>

	<div>
		<label for="content" class="mb-1 block text-sm font-medium text-charcoal-brown">본문</label>
		<textarea
			id="content"
			name="content"
			rows="16"
			class="w-full rounded-lg border border-input bg-background px-3 py-2 font-body-md text-on-surface outline-none focus:border-deep-wine focus:ring-1 focus:ring-deep-wine"
		>{v('content')}</textarea>
	</div>

	<label class="flex items-center gap-2 text-sm text-charcoal-brown">
		<input type="checkbox" name="published" bind:checked={published} class="h-4 w-4 accent-deep-wine" />
		공개 (체크 해제 시 블로그에 노출되지 않음)
	</label>

	{#if form?.error}
		<p class="text-sm text-error">{form.error}</p>
	{/if}

	<div class="flex items-center gap-3 pt-2">
		<button
			type="submit"
			class="rounded-lg bg-deep-wine px-5 py-2.5 font-semibold text-on-primary transition-opacity hover:opacity-90"
		>
			{submitLabel}
		</button>
		<a href="/admin/posts" class="text-sm text-dark-taupe hover:text-deep-wine">취소</a>
	</div>
</form>
