<script>
	import { enhance } from '$app/forms';
	let { form } = $props();
</script>

<svelte:head><title>관리자 로그인</title></svelte:head>

<div class="flex min-h-[70vh] items-center justify-center">
	<div class="w-full max-w-sm rounded-2xl border border-outline-variant bg-card p-8 shadow-sm">
		<h1 class="font-headline-md text-headline-md font-semibold text-deep-wine">관리자 로그인</h1>
		<p class="mt-1 text-sm text-dark-taupe">블로그 글을 관리하려면 로그인하세요.</p>

		<form method="POST" use:enhance class="mt-6 space-y-4">
			<div>
				<label for="id" class="mb-1 block text-sm font-medium text-charcoal-brown">아이디</label>
				<input
					id="id"
					name="id"
					type="text"
					autocomplete="username"
					value={form?.id ?? ''}
					required
					class="w-full rounded-lg border border-input bg-background px-3 py-2 text-on-surface outline-none focus:border-deep-wine focus:ring-1 focus:ring-deep-wine"
				/>
			</div>
			<div>
				<label for="pw" class="mb-1 block text-sm font-medium text-charcoal-brown">비밀번호</label>
				<input
					id="pw"
					name="pw"
					type="password"
					autocomplete="current-password"
					required
					class="w-full rounded-lg border border-input bg-background px-3 py-2 text-on-surface outline-none focus:border-deep-wine focus:ring-1 focus:ring-deep-wine"
				/>
			</div>

			{#if form?.error}
				<p class="text-sm text-error">{form.error}</p>
			{/if}

			<button
				type="submit"
				class="w-full rounded-lg bg-deep-wine py-2.5 font-semibold text-on-primary transition-opacity hover:opacity-90"
			>
				로그인
			</button>
		</form>
	</div>
</div>
