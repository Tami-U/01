<script>
    import { onMount } from 'svelte';
    import { page } from '$app/state';
    import { i18n, setLang } from '$lib/i18n.svelte.js';

    const links = [
        { id: 'intro', ko: '소개', en: 'About' },
        { id: 'work', ko: '작업', en: 'Work' },
        { id: 'awards', ko: '수상', en: 'Awards' },
        { id: 'skills', ko: '스킬', en: 'Skills' },
        { id: 'contact', ko: '연락처', en: 'Contact' }
    ];

    let active = $state('intro');
    const onHome = $derived(page.url.pathname === '/');
    const blogLabel = $derived(i18n.lang === 'ko' ? '블로그' : 'Blog');

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
        <div class="hidden md:flex items-center gap-8">
            {#each links as link (link.id)}
                <a
                    class="font-label-caps text-label-caps pb-1 border-b-2 transition-colors {onHome && active === link.id
                        ? 'text-deep-wine dark:text-primary-fixed-dim font-bold border-deep-wine'
                        : 'text-dark-taupe dark:text-secondary-fixed-dim hover:text-deep-wine border-transparent'}"
                    href="/#{link.id}"
                >
                    {i18n.lang === 'ko' ? link.ko : link.en}
                </a>
            {/each}
            <a class="font-label-caps text-label-caps text-dark-taupe dark:text-secondary-fixed-dim hover:text-deep-wine transition-colors pb-1 border-b-2 border-transparent" href="/blog">{blogLabel}</a>

            <!-- 언어 전환 -->
            <div class="flex items-center gap-1 font-label-caps text-label-caps">
                <button
                    onclick={() => setLang('ko')}
                    class="transition-colors {i18n.lang === 'ko' ? 'text-deep-wine font-bold' : 'text-dark-taupe hover:text-deep-wine'}"
                >KR</button>
                <span class="text-outline-variant">/</span>
                <button
                    onclick={() => setLang('en')}
                    class="transition-colors {i18n.lang === 'en' ? 'text-deep-wine font-bold' : 'text-dark-taupe hover:text-deep-wine'}"
                >EN</button>
            </div>
        </div>
        <!-- Mobile: 언어 전환 + 메뉴 -->
        <div class="md:hidden flex items-center gap-4">
            <div class="flex items-center gap-1 font-label-caps text-label-caps">
                <button onclick={() => setLang('ko')} class={i18n.lang === 'ko' ? 'text-deep-wine font-bold' : 'text-dark-taupe'}>KR</button>
                <span class="text-outline-variant">/</span>
                <button onclick={() => setLang('en')} class={i18n.lang === 'en' ? 'text-deep-wine font-bold' : 'text-dark-taupe'}>EN</button>
            </div>
            <button class="text-charcoal-brown">
                <span class="material-symbols-outlined">menu</span>
            </button>
        </div>
    </div>
</nav>
