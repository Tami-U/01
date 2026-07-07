<script>
    import { i18n } from '$lib/i18n.svelte.js';

    const heading = $derived(i18n.lang === 'ko' ? '작업·경력' : 'Work & Experience');

    // year: 같은 연도 그룹의 첫 항목에만 표기 (빈 문자열은 위 연도에 이어짐)
    const items = [
        { year: '2026', ko: '경성대학교 AI미디어학과 특강 외래강사', en: 'Guest lecturer, AI Media Dept., Kyungsung University' },
        { year: '2025', ko: '유튜브 <그루밍 맨> 영상 편집 (구독자 4.5만)', en: "YouTube 'Grooming Man' video editing (45K subscribers)" },
        { year: '2022', ko: '한국건강관리협회 홍보영상 PD (헬로우 티비)', en: 'PD, Korea Association of Health Promotion PR film (Hello TV)' },
        { year: '', ko: '유네스코 창의도시 부산 기자단 · 파트너즈 대상 수상', en: 'UNESCO Creative City Busan press corps · Partners Grand Prize' },
        { year: '', ko: '051영화제 <같이> 각본·편집 · 부산시장상 최우수상', en: "051 Film Festival 'Together' — screenplay & editing · Busan Mayor's Grand Award" },
        { year: '', ko: '울주세계산악영화제 <Void> 스크립터 · 개막작 선정', en: "Ulju Mountain Film Festival 'Void' — scripter · opening film" },
        { year: '', ko: '단편 애니메이션 <지구탕> 각본·연출 · 지구영상제 수상', en: "Short animation 'Earth Bathhouse' — writer/director · Earth Film Festival award" },
        { year: '2021', ko: '<수묵화> 각본·연출 · 051영화제 우수상', en: "'Ink Painting' — writer/director · 051 Film Festival Excellence Award" },
        { year: '', ko: '<안녕, 할아버지> 조연출 (김재식 감독)', en: "'Goodbye, Grandpa' — assistant director (dir. Kim Jae-sik)" },
        { year: '', ko: '<박문수 씨의 기일> 동시녹음 (이아진 감독)', en: "'Mr. Park’s Memorial Day' — location sound (dir. Lee A-jin)" },
        { year: '', ko: '<희비> 붐 오퍼레이터 (이나래 감독)', en: "'Joy and Sorrow' — boom operator (dir. Lee Na-rae)" },
        { year: '2019', ko: '단편영화 <SMS> 각본·연출', en: "Short film 'SMS' — writer/director" }
    ];
</script>

<section class="px-margin-mobile md:px-margin-desktop py-section-gap bg-soft-beige" id="work">
    <div class="max-w-4xl mx-auto">
        <h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-charcoal-brown mb-12 border-b border-outline-variant pb-6">{heading}</h2>
        <ul class="flex flex-col gap-8 font-body-lg text-body-lg text-dark-taupe">
            {#each items as item, i (item.ko)}
                <li class="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 pb-6 {i < items.length - 1 ? 'border-b border-outline-variant/50' : ''}">
                    <span class="font-label-caps text-label-caps text-deep-wine shrink-0 w-24">{item.year}</span>
                    <span class="font-headline-md text-headline-md text-charcoal-brown">{i18n.lang === 'ko' ? item.ko : item.en}</span>
                </li>
            {/each}
        </ul>
    </div>
</section>
