<script>
    import * as Card from "$lib/components/ui/card/index.js";
</script>

<section class="px-margin-mobile md:px-margin-desktop py-section-gap" id="awards">
    <h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-charcoal-brown mb-16">수상 경력</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        <!-- Card 1 -->
        <Card.Root class="group flex flex-col gap-4 border-none shadow-none bg-transparent">
            <div class="w-full aspect-video bg-soft-beige rounded-lg overflow-hidden p-4 relative">
                <img alt="글로벌 하나뿐인 지구영상제 - 영화의전당 상영" class="w-full h-full object-cover rounded shadow-sm group-hover:scale-105 transition-transform duration-500" src="/images/award-earth.png"/>
            </div>
            <Card.Header class="p-0">
                <Card.Description class="font-label-caps text-label-caps text-dark-taupe mb-2">2022 글로벌 하나뿐인 지구영상제</Card.Description>
                <Card.Title class="font-headline-md text-headline-md text-charcoal-brown">'지구가 목욕탕이라면?' 스톱모션 애니메이션</Card.Title>
            </Card.Header>
        </Card.Root>
        <!-- Card 2 -->
        <Card.Root class="group flex flex-col gap-4 border-none shadow-none bg-transparent">
            <div class="w-full aspect-video bg-soft-beige rounded-lg overflow-hidden p-4 relative">
                <img alt="유네스코 영화창의도시 부산 파트너즈 대상 수상" class="w-full h-full object-cover rounded shadow-sm group-hover:scale-105 transition-transform duration-500" src="/images/award-partners.png"/>
            </div>
            <Card.Header class="p-0">
                <Card.Description class="font-label-caps text-label-caps text-dark-taupe mb-2">2022 유네스코 영화창의도시 부산 파트너즈</Card.Description>
                <Card.Title class="font-headline-md text-headline-md text-charcoal-brown">대상 수상, OSMU 프로젝트</Card.Title>
            </Card.Header>
        </Card.Root>
        <!-- Card 3 -->
        <Card.Root class="group flex flex-col gap-4 border-none shadow-none bg-transparent">
            <div class="w-full aspect-video bg-soft-beige rounded-lg overflow-hidden p-4 relative">
                <img alt="051영화제 부산광역시장상 시상식" class="w-full h-full object-cover rounded shadow-sm group-hover:scale-105 transition-transform duration-500" src="/images/award-mayor.png"/>
            </div>
            <Card.Header class="p-0">
                <Card.Description class="font-label-caps text-label-caps text-dark-taupe mb-2">2022 051영화제 부산광역시장상</Card.Description>
                <Card.Title class="font-headline-md text-headline-md text-charcoal-brown">'같이' 시나리오·편집</Card.Title>
            </Card.Header>
        </Card.Root>
    </div>
</section>
