<script>
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
    import Navbar from '$lib/components/Navbar.svelte';
    import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<Navbar />
<main class="max-w-screen-2xl mx-auto">
    {@render children()}
</main>
<Footer />
