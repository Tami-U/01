<script>
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import { initLang } from '$lib/i18n.svelte.js';

	let { children } = $props();
	const isAdmin = $derived(page.url.pathname.startsWith('/admin'));

	onMount(initLang);
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

{#if isAdmin}
	{@render children()}
{:else}
	<Navbar />
	<main class="max-w-screen-2xl mx-auto">
		{@render children()}
	</main>
	<Footer />
{/if}
