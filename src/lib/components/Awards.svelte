<script>
    import * as Card from "$lib/components/ui/card/index.js";
    import { i18n } from '$lib/i18n.svelte.js';

    const t = $derived({
        ko: {
            heading: '수상 경력',
            cards: [
                { img: '/images/award-earth.png', alt: '글로벌 하나뿐인 지구영상제 - 영화의전당 상영', desc: '2022 글로벌 하나뿐인 지구영상제', title: "'지구가 목욕탕이라면?' 스톱모션 애니메이션" },
                { img: '/images/award-partners.png', alt: '유네스코 영화창의도시 부산 파트너즈 대상 수상', desc: '2022 유네스코 영화창의도시 부산 파트너즈', title: '대상 수상, OSMU 프로젝트' },
                { img: '/images/award-mayor.png', alt: '051영화제 부산광역시장상 시상식', desc: '2022 051영화제 부산광역시장상', title: "'같이' 시나리오·편집" }
            ]
        },
        en: {
            heading: 'Awards',
            cards: [
                { img: '/images/award-earth.png', alt: 'One and Only Earth Film Festival - screening at Busan Cinema Center', desc: '2022 One and Only Earth Film Festival', title: "'If Earth Were a Bathhouse?' — stop-motion animation" },
                { img: '/images/award-partners.png', alt: 'UNESCO Creative City of Film Busan Partners - Grand Prize', desc: '2022 UNESCO Creative City of Film Busan Partners', title: 'Grand Prize, OSMU project' },
                { img: '/images/award-mayor.png', alt: '051 Film Festival - Busan Mayor Award ceremony', desc: '2022 051 Film Festival, Busan Mayor Award', title: "'Together' — screenplay & editing" }
            ]
        }
    }[i18n.lang]);
</script>

<section class="px-margin-mobile md:px-margin-desktop py-section-gap" id="awards">
    <h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-charcoal-brown mb-16">{t.heading}</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {#each t.cards as card (card.title)}
            <Card.Root class="group flex flex-col gap-4 border-none shadow-none bg-transparent">
                <div class="w-full aspect-video bg-soft-beige rounded-lg overflow-hidden p-4 relative">
                    <img alt={card.alt} class="w-full h-full object-cover rounded shadow-sm group-hover:scale-105 transition-transform duration-500" src={card.img}/>
                </div>
                <Card.Header class="p-0 pt-2 px-2">
                    <Card.Description class="font-label-caps text-label-caps text-dark-taupe mb-2">{card.desc}</Card.Description>
                    <Card.Title class="font-headline-md text-headline-md text-charcoal-brown">{card.title}</Card.Title>
                </Card.Header>
            </Card.Root>
        {/each}
    </div>
</section>
