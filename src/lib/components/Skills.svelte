<script>
    import { Badge } from "$lib/components/ui/badge/index.js";
    import { i18n } from '$lib/i18n.svelte.js';
    import { siNotion, siFigma, siUnrealengine, siCplusplus, siC } from 'simple-icons';

    // 브랜드 로고가 있는 건 SVG, 없는 건(어도비/애플 계열) 레터 배지로 표시
    const designChips = [
        { icon: siNotion, color: '#111111', ko: 'Notion', en: 'Notion' },
        { icon: siFigma, ko: 'Figma', en: 'Figma' },
        { badge: 'Ps', bg: '#001E36', fg: '#31A8FF', ko: '포토샵', en: 'Photoshop' },
        { badge: 'Ai', bg: '#330000', fg: '#FF9A00', ko: '일러스트', en: 'Illustrator' },
        { badge: 'Fc', bg: '#0A2540', fg: '#8AB4F8', ko: '파이널컷', en: 'Final Cut Pro' },
        { badge: 'Pr', bg: '#00005B', fg: '#9999FF', ko: '프리미어 프로', en: 'Premiere Pro' }
    ];
    const devChips = [
        { icon: siUnrealengine, color: '#222633', ko: '언리얼 엔진', en: 'Unreal Engine' },
        { icon: siCplusplus, ko: 'C++', en: 'C++' },
        { icon: siC, color: '#647687', ko: 'C', en: 'C' }
    ];

    const t = $derived({
        ko: {
            heading: '스킬',
            advanced: '고급',
            intermediate: '중급',
            designTitle: '디자인',
            designNote: 'GTQ 1급 보유 · 협업/디자인/편집 툴',
            devTitle: '프로그래밍',
            devNote: '블루프린트 게임개발 · 로딩→오픈레벨→세이브/로드 · 데이터테이블 관리 · C/C++ 코드 읽기 가능',
            aiTitle: 'AI 크리에이티브',
            ai: 'AI 영상 제작, 클로드 MCP 연동 게임 제작, 바이브 코딩',
            aidaLink: 'Aida 질문카드 ↗',
            tileAd: 'AI 광고 영상 ↗',
            tileFilm: 'AI 영상 ↗',
            tileAida: 'Aida 질문카드 ↗',
            mktTitle: '마케팅',
            mkt: '브랜딩, 스토리텔링, 콘텐츠 기획·제작',
            ffall: 'Ffall 매거진 ↗'
        },
        en: {
            heading: 'Skills',
            advanced: 'Advanced',
            intermediate: 'Intermediate',
            designTitle: 'Design',
            designNote: 'GTQ Level 1 certified · collaboration/design/editing tools',
            devTitle: 'Programming',
            devNote: 'Blueprint game development · loading→open level→save/load · data table management · can read C/C++',
            aiTitle: 'Creative AI Works',
            ai: 'AI film production, Claude MCP-integrated game dev, vibe coding',
            aidaLink: 'Aida Cards ↗',
            tileAd: 'AI Ad Film ↗',
            tileFilm: 'AI Film ↗',
            tileAida: 'Aida Cards ↗',
            mktTitle: 'Marketing',
            mkt: 'Branding, storytelling, content planning & production',
            ffall: 'Ffall Magazine ↗'
        }
    }[i18n.lang]);
</script>

{#snippet chip(item)}
    <span class="inline-flex items-center gap-2 rounded-full bg-background border border-outline-variant/50 px-3 py-1.5 text-sm text-charcoal-brown">
        {#if item.icon}
            <svg viewBox="0 0 24 24" class="h-4 w-4 shrink-0" fill={item.color ?? `#${item.icon.hex}`} aria-hidden="true">
                <path d={item.icon.path} />
            </svg>
        {:else}
            <span class="grid h-4 w-4 shrink-0 place-items-center rounded-[3px] text-[9px] font-bold leading-none" style="background:{item.bg};color:{item.fg}">{item.badge}</span>
        {/if}
        {i18n.lang === 'ko' ? item.ko : item.en}
    </span>
{/snippet}

<section class="px-margin-mobile md:px-margin-desktop py-section-gap" id="skills">
    <h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-charcoal-brown mb-16 text-center">{t.heading}</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Design -->
        <div class="bg-warm-greige p-8 rounded-lg border border-outline-variant/30">
            <div class="flex justify-between items-center mb-6 border-b border-outline-variant pb-4">
                <h3 class="font-headline-md text-headline-md text-charcoal-brown">{t.designTitle}</h3>
                <Badge variant="default" class="font-label-caps text-label-caps rounded-full px-3 py-1 bg-primary-fixed text-deep-wine hover:bg-primary-fixed/80">{t.advanced}</Badge>
            </div>
            <div class="flex flex-wrap gap-2">
                {#each designChips as item (item.ko)}{@render chip(item)}{/each}
            </div>
            <p class="mt-4 font-body-md text-body-md text-dark-taupe">{t.designNote}</p>
        </div>
        <!-- Dev -->
        <div class="bg-warm-greige p-8 rounded-lg border border-outline-variant/30">
            <div class="flex justify-between items-center mb-6 border-b border-outline-variant pb-4">
                <h3 class="font-headline-md text-headline-md text-charcoal-brown">{t.devTitle}</h3>
                <Badge variant="secondary" class="font-label-caps text-label-caps rounded-full px-3 py-1 bg-surface-variant text-secondary hover:bg-surface-variant/80">{t.intermediate}</Badge>
            </div>
            <div class="flex flex-wrap gap-2">
                {#each devChips as item (item.ko)}{@render chip(item)}{/each}
            </div>
            <p class="mt-4 font-body-md text-body-md text-dark-taupe leading-relaxed">{t.devNote}</p>
        </div>
        <!-- AI -->
        <div class="bg-warm-greige p-8 rounded-lg border border-outline-variant/30 md:col-span-2">
            <div class="flex justify-between items-center mb-6 border-b border-outline-variant pb-4">
                <h3 class="font-headline-md text-headline-md text-charcoal-brown">{t.aiTitle}</h3>
                <Badge variant="default" class="font-label-caps text-label-caps rounded-full px-3 py-1 bg-primary-fixed text-deep-wine hover:bg-primary-fixed/80">{t.advanced}</Badge>
            </div>
            <p class="font-body-md text-body-md text-dark-taupe leading-relaxed mb-6">
                {t.ai}
                · <a href="https://my-question-cards.vercel.app/" target="_blank" rel="noopener" class="text-deep-wine font-semibold hover:underline">{t.aidaLink}</a>
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <a href="https://www.instagram.com/reel/DZ0Bs4wBK6r/" target="_blank" rel="noopener" class="group aspect-video bg-charcoal-brown rounded overflow-hidden relative block">
                    <img alt="AI 영상 - AI로 웹 서비스 만들고 AI로 광고하기" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/ai-restaurant.png"/>
                    <div class="absolute bottom-2 left-2 bg-background/80 px-2 py-1 rounded text-xs font-label-caps text-charcoal-brown">{t.tileAd}</div>
                </a>
                <a href="https://www.instagram.com/reel/DZ2qceONGye/" target="_blank" rel="noopener" class="group aspect-video bg-charcoal-brown rounded overflow-hidden relative block">
                    <img alt="AI 영상 - I have made fire" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/ai-fire.png"/>
                    <div class="absolute bottom-2 left-2 bg-background/80 px-2 py-1 rounded text-xs font-label-caps text-charcoal-brown">{t.tileFilm}</div>
                </a>
                <a href="https://my-question-cards.vercel.app/" target="_blank" rel="noopener" class="group aspect-video bg-soft-beige rounded overflow-hidden relative block">
                    <img alt="바이브 코딩 - Aida 질문카드 웹앱" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/aida-cards.svg"/>
                    <div class="absolute bottom-2 left-2 bg-background/80 px-2 py-1 rounded text-xs font-label-caps text-charcoal-brown">{t.tileAida}</div>
                </a>
            </div>
        </div>
        <!-- Marketing -->
        <div class="bg-warm-greige p-8 rounded-lg border border-outline-variant/30 md:col-span-2 flex flex-col md:flex-row items-center gap-8">
            <div class="md:w-1/3 text-center md:text-left border-b md:border-b-0 md:border-r border-outline-variant pb-4 md:pb-0 md:pr-8">
                <h3 class="font-headline-md text-headline-md text-charcoal-brown">{t.mktTitle}</h3>
            </div>
            <div class="md:w-2/3 flex flex-col items-center md:items-start gap-3">
                <p class="font-body-md text-body-md text-dark-taupe text-center md:text-left text-lg">
                    {t.mkt}
                </p>
                <a href="https://www.instagram.com/ffall_magazine/" target="_blank" rel="noopener" class="inline-flex items-center gap-1 font-label-caps text-label-caps text-deep-wine hover:underline">
                    {t.ffall}
                </a>
            </div>
        </div>
    </div>
</section>
