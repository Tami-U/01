<script>
    import { onMount } from 'svelte';
    import { page } from '$app/state';

    const links = [
        { id: 'intro', label: '소개' },
        { id: 'work', label: '작업' },
        { id: 'awards', label: '수상' },
        { id: 'skills', label: '스킬' },
        { id: 'contact', label: '연락처' }
    ];

    let active = $state('intro');
    const onHome = $derived(page.url.pathname === '/');

    onMount(() => {
        const sections = links
            .map((l) => document.getElementById(l.id))
            .filter(Boolean);
        if (sections.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) active = entry.target.id;
                }
            },
            // 화면 세로 중앙의 얇은 밴드에 들어온 섹션을 '현재'로 판단
            { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
        );

        sections.forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    });
</script>

<nav class="bg-background/90 backdrop-blur-md dark:bg-background/90 full-width top-0 sticky border-b border-outline-variant dark:border-outline z-50">
    <div class="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-6 max-w-screen-2xl mx-auto">
        <a href="/" class="font-headline-md text-headline-md font-semibold text-primary dark:text-inverse-primary tracking-tight">
            박타미 TAMI PARK
        </a>
        <div class="hidden md:flex gap-8">
            {#each links as link (link.id)}
                <a
                    class="font-label-caps text-label-caps pb-1 border-b-2 transition-colors {onHome && active === link.id
                        ? 'text-deep-wine dark:text-primary-fixed-dim font-bold border-deep-wine'
                        : 'text-dark-taupe dark:text-secondary-fixed-dim hover:text-deep-wine border-transparent'}"
                    href="/#{link.id}"
                >
                    {link.label}
                </a>
            {/each}
            <a class="font-label-caps text-label-caps text-dark-taupe dark:text-secondary-fixed-dim hover:text-deep-wine transition-colors pb-1 border-b-2 border-transparent" href="/blog">블로그</a>
        </div>
        <!-- Mobile Menu Icon Placeholder -->
        <button class="md:hidden text-charcoal-brown">
            <span class="material-symbols-outlined">menu</span>
        </button>
    </div>
</nav>
