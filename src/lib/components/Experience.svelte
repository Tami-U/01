<script>
    import { i18n } from '$lib/i18n.svelte.js';

    const heading = $derived(i18n.lang === 'ko' ? '작업·경력' : 'Work & Experience');

    // year: 같은 연도 그룹의 첫 항목에만 표기 (빈 문자열은 위 연도에 이어짐)
    const items = [
        { year: '2026', ko: '경성대학교 AI미디어학과 특강 외래강사', en: 'Guest lecturer, AI Media Department, Kyungsung University' },
        { year: '2025', ko: '유튜브 <그루밍 맨> 영상 편집 (구독자 4.5만)', en: "YouTube 'Grooming Man' video editing (45,000 subscribers)" },
        { year: '2022', ko: '한국건강관리협회 홍보영상 PD (헬로우 티비)', en: 'PD, Korea Association of Health Promotion PR film (Hello TV)' },
        { year: '', ko: '유네스코 창의도시 부산 기자단 · 파트너즈 대상 수상', en: 'UNESCO Creative City Busan press corps · Partners Grand Prize' },
        { year: '', ko: '051영화제 <같이> 각본·편집 · 부산시장상 최우수상', en: "051 Film Festival 'Together' — screenplay & editing · Busan Mayor's Grand Award" },
        { year: '', ko: '울주세계산악영화제 <Void> 스크립터 · 개막작 선정', en: "Ulju Mountain Film Festival 'Void' — scripter · opening film" },
        { year: '', ko: '단편 애니메이션 <지구탕> 각본·연출 · 지구영상제 수상', en: "Short animation 'Earth Bathhouse' — writer/director · Earth Film Festival award" },
        { year: '2021', ko: '<수묵화> 각본·연출 · 051영화제 우수상', en: "'Ink Painting' — writer/director · 051 Film Festival Excellence Award" },
        { year: '', ko: '<안녕, 할아버지> 조연출 (김재식 감독)', en: "'Goodbye, Grandpa' — assistant director (directed by Kim Jae-sik)" },
        { year: '', ko: '<박문수 씨의 기일> 동시녹음 (이아진 감독)', en: "'Mr. Park’s Memorial Day' — location sound (directed by Lee A-jin)" },
        { year: '', ko: '<희비> 붐 오퍼레이터 (이나래 감독)', en: "'Joy and Sorrow' — boom operator (directed by Lee Na-rae)" },
        { year: '2019', ko: '단편영화 <SMS> 각본·연출', en: "Short film 'SMS' — writer/director" }
    ];
</script>

<section class="px-margin-mobile md:px-margin-desktop py-section-gap bg-soft-beige" id="work">
    <div class="max-w-4xl mx-auto">
        <h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-charcoal-brown mb-14">{heading}</h2>

        <ol class="relative ml-2 border-l-2 border-outline-variant/70">
            {#each items as item, i (item.ko)}
                <li class="relative pl-8 md:pl-10 {i < items.length - 1 ? 'pb-9' : ''}">
                    <!-- 타임라인 점: 연도 시작이면 크게, 이어지는 항목은 작게 -->
                    <span
                        class="absolute rounded-full ring-4 ring-soft-beige {item.year
                            ? '-left-[9px] top-1 h-4 w-4 bg-deep-wine'
                            : '-left-[5px] top-2 h-2 w-2 bg-outline-variant'}"
                    ></span>

                    {#if item.year}
                        <div class="mb-1.5 font-label-caps text-label-caps font-bold tracking-widest text-deep-wine">
                            {item.year}
                        </div>
                    {/if}
                    <p class="font-headline-md text-headline-md leading-snug text-charcoal-brown">
                        {i18n.lang === 'ko' ? item.ko : item.en}
                    </p>
                </li>
            {/each}
        </ol>
    </div>
</section>
