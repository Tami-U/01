<script>
    import { i18n } from '$lib/i18n.svelte.js';

    const t = $derived({
        ko: {
            singing: '제27회 부산국제영화제 노래자랑 무대',
            narration: '영화 예고편 내레이션',
            narrationSub: '(<이송도 브루스>)',
            desert: "자이살메르 사막 '외박'",
            blog: '13만 방문 블로거',
            blogSub: '(누적 136,795)'
        },
        en: {
            singing: 'Karaoke stage, 27th Busan International Film Festival',
            narration: 'Film trailer narration',
            narrationSub: "(‘Isongdo Blues’)",
            desert: 'A night under the stars, Jaisalmer desert',
            blog: '130K+ blog visitors',
            blogSub: '(136,795 total)'
        }
    }[i18n.lang]);
</script>

<section class="px-margin-mobile md:px-margin-desktop py-section-gap bg-soft-beige">
    <h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-charcoal-brown mb-16 text-center italic">Fun Facts</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-gutter max-w-5xl mx-auto">
        <!-- 노래자랑 무대 -->
        <div class="group bg-background rounded-xl overflow-hidden shadow-sm border border-outline-variant/40">
            <div class="w-full aspect-video overflow-hidden">
                <img src="/images/fun-singing.png" alt={t.singing} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
            </div>
            <div class="p-6 flex items-center gap-3">
                <span class="material-symbols-outlined text-3xl text-deep-wine">mic</span>
                <p class="font-headline-md text-headline-md text-charcoal-brown">{t.singing}</p>
            </div>
        </div>
        <!-- 영화 예고편 내레이션 (영상 링크) -->
        <a href="https://www.youtube.com/watch?v=LVwKSMiemIc" target="_blank" rel="noopener" class="group block bg-background rounded-xl overflow-hidden shadow-sm border border-outline-variant/40 transition-shadow hover:shadow-md">
            <div class="w-full aspect-video overflow-hidden relative">
                <img src="/images/fun-narration.jpg" alt={t.narration} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                <div class="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                    <span class="material-symbols-outlined text-white text-7xl drop-shadow-lg" style="font-variation-settings: 'FILL' 1;">play_circle</span>
                </div>
            </div>
            <div class="p-6 flex items-center gap-3">
                <span class="material-symbols-outlined text-3xl text-deep-wine">movie</span>
                <p class="font-headline-md text-headline-md text-charcoal-brown">{t.narration} <span class="text-lg text-dark-taupe">{t.narrationSub}</span></p>
            </div>
        </a>
        <!-- 사막 외박 -->
        <div class="group bg-background rounded-xl overflow-hidden shadow-sm border border-outline-variant/40">
            <div class="w-full aspect-video overflow-hidden">
                <img src="/images/fun-desert.png" alt={t.desert} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
            </div>
            <div class="p-6 flex items-center gap-3">
                <span class="material-symbols-outlined text-3xl text-deep-wine">landscape</span>
                <p class="font-headline-md text-headline-md text-charcoal-brown">{t.desert}</p>
            </div>
        </div>
        <!-- 13만 방문 블로거 -->
        <div class="group bg-background rounded-xl overflow-hidden shadow-sm border border-outline-variant/40">
            <div class="w-full aspect-video overflow-hidden bg-warm-greige flex items-center justify-center p-6">
                <img src="/images/fun-blog.svg" alt={t.blog} class="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"/>
            </div>
            <div class="p-6 flex items-center gap-3">
                <span class="material-symbols-outlined text-3xl text-deep-wine">group</span>
                <p class="font-headline-md text-headline-md text-charcoal-brown">{t.blog} <span class="text-lg text-dark-taupe">{t.blogSub}</span></p>
            </div>
        </div>
    </div>
</section>
