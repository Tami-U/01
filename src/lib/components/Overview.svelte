<script>
    import { i18n } from '$lib/i18n.svelte.js';

    const t = $derived({
        ko: {
            heading: '한눈에 보기',
            nowTitle: '현재 2026~',
            now: [
                { icon: 'co_present', text: '경성대학교 AI미디어학과 외래특강 강사' },
                { icon: 'music_note', text: '다큐멘터리 음악감독(탁기영 감독 作)' },
                { icon: 'sports_esports', text: '게임 UI·영상·기능구현' }
            ],
            aboutTitle: '저는 이런 사람이에요',
            about: [
                { icon: 'edit_document', text: '꾸준한 블로그 기록' },
                { icon: 'translate', text: 'J-POP·일본어 공부' },
                { icon: 'interests', text: '게임·음악·애니' },
                { icon: 'diversity_3', text: '작가·아트·편집·사운드 올라운더' },
                { icon: 'flight_takeoff', text: '인도 한 달 체류' }
            ]
        },
        en: {
            heading: 'At a Glance',
            nowTitle: '2026 ~ Now',
            now: [
                { icon: 'co_present', text: 'Guest lecturer, AI Media Department, Kyungsung University' },
                { icon: 'music_note', text: 'Documentary music director (directed by Tak Ki-young)' },
                { icon: 'sports_esports', text: 'Game UI · video · feature development' }
            ],
            aboutTitle: 'A little about me',
            about: [
                { icon: 'edit_document', text: 'Blogger' },
                { icon: 'translate', text: 'J-POP & Japanese study' },
                { icon: 'interests', text: 'Games · music · anime' },
                { icon: 'diversity_3', text: 'All-rounder: writing · art · editing · sound' },
                { icon: 'flight_takeoff', text: 'Lived in India for a month' }
            ]
        }
    }[i18n.lang]);
</script>

<section class="px-margin-mobile md:px-margin-desktop py-section-gap bg-warm-greige">
    <h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-charcoal-brown mb-16 text-center">{t.heading}</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        <!-- Left Column -->
        <div class="bg-soft-beige p-8 rounded-lg flex flex-col gap-6">
            <h3 class="font-headline-md text-headline-md text-deep-wine border-b border-outline-variant pb-4">{t.nowTitle}</h3>
            <ul class="font-body-md text-body-md text-dark-taupe space-y-4">
                {#each t.now as item (item.text)}
                    <li class="flex items-start gap-3">
                        <span class="material-symbols-outlined text-deep-wine mt-1 text-sm">{item.icon}</span>
                        <span>{item.text}</span>
                    </li>
                {/each}
            </ul>
        </div>
        <!-- Right Column -->
        <div class="bg-soft-beige p-8 rounded-lg flex flex-col gap-6">
            <h3 class="font-headline-md text-headline-md text-deep-wine border-b border-outline-variant pb-4">{t.aboutTitle}</h3>
            <ul class="font-body-md text-body-md text-dark-taupe space-y-4">
                {#each t.about as item (item.text)}
                    <li class="flex items-start gap-3">
                        <span class="material-symbols-outlined text-deep-wine mt-1 text-sm">{item.icon}</span>
                        <span>{item.text}</span>
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</section>
