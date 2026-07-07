<script>
    import { Badge } from "$lib/components/ui/badge/index.js";
</script>

<section class="px-margin-mobile md:px-margin-desktop py-section-gap" id="skills">
    <h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-charcoal-brown mb-16 text-center">스킬</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Design -->
        <div class="bg-warm-greige p-8 rounded-lg border border-outline-variant/30">
            <div class="flex justify-between items-center mb-6 border-b border-outline-variant pb-4">
                <h3 class="font-headline-md text-headline-md text-charcoal-brown">디자인</h3>
                <Badge variant="default" class="font-label-caps text-label-caps rounded-full px-3 py-1 bg-primary-fixed text-deep-wine hover:bg-primary-fixed/80">고급</Badge>
            </div>
            <p class="font-body-md text-body-md text-dark-taupe leading-relaxed">
                Notion, Figma, 포토샵·일러스트(GTQ 1급), 파이널컷·프리미어프로
            </p>
        </div>
        <!-- Dev -->
        <div class="bg-warm-greige p-8 rounded-lg border border-outline-variant/30">
            <div class="flex justify-between items-center mb-6 border-b border-outline-variant pb-4">
                <h3 class="font-headline-md text-headline-md text-charcoal-brown">개발</h3>
                <Badge variant="secondary" class="font-label-caps text-label-caps rounded-full px-3 py-1 bg-surface-variant text-secondary hover:bg-surface-variant/80">중급</Badge>
            </div>
            <p class="font-body-md text-body-md text-dark-taupe leading-relaxed">
                블루프린트 게임개발, 로딩→오픈레벨→세이브/로드, 데이터테이블 관리
            </p>
        </div>
        <!-- AI -->
        <div class="bg-warm-greige p-8 rounded-lg border border-outline-variant/30 md:col-span-2">
            <div class="flex justify-between items-center mb-6 border-b border-outline-variant pb-4">
                <h3 class="font-headline-md text-headline-md text-charcoal-brown">AI 크리에이티브</h3>
                <Badge variant="default" class="font-label-caps text-label-caps rounded-full px-3 py-1 bg-primary-fixed text-deep-wine hover:bg-primary-fixed/80">고급</Badge>
            </div>
            <p class="font-body-md text-body-md text-dark-taupe leading-relaxed mb-6">
                ChatGPT 프롬프트, 미드저니 UI, Suno BGM 설계 및 에셋 제작, AI 영상 제작
                · <a href="https://my-question-cards.vercel.app/" target="_blank" rel="noopener" class="text-deep-wine font-semibold hover:underline">바이브 코딩 · Aida 질문카드 ↗</a>
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <a href="https://www.instagram.com/reel/DZ0Bs4wBK6r/" target="_blank" rel="noopener" class="group aspect-video bg-charcoal-brown rounded overflow-hidden relative block">
                    <img alt="AI 영상 - AI로 웹 서비스 만들고 AI로 광고하기" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/ai-restaurant.png"/>
                    <div class="absolute bottom-2 left-2 bg-background/80 px-2 py-1 rounded text-xs font-label-caps text-charcoal-brown">AI 광고 영상 ↗</div>
                </a>
                <a href="https://www.instagram.com/reel/DZ2qceONGye/" target="_blank" rel="noopener" class="group aspect-video bg-charcoal-brown rounded overflow-hidden relative block">
                    <img alt="AI 영상 - I have made fire" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/ai-fire.png"/>
                    <div class="absolute bottom-2 left-2 bg-background/80 px-2 py-1 rounded text-xs font-label-caps text-charcoal-brown">AI 영상 ↗</div>
                </a>
                <a href="https://my-question-cards.vercel.app/" target="_blank" rel="noopener" class="group aspect-video bg-soft-beige rounded overflow-hidden relative block">
                    <img alt="바이브 코딩 - Aida 질문카드 웹앱" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/aida-cards.svg"/>
                    <div class="absolute bottom-2 left-2 bg-background/80 px-2 py-1 rounded text-xs font-label-caps text-charcoal-brown">Aida 질문카드 ↗</div>
                </a>
            </div>
        </div>
        <!-- Marketing -->
        <div class="bg-warm-greige p-8 rounded-lg border border-outline-variant/30 md:col-span-2 flex flex-col md:flex-row items-center gap-8">
            <div class="md:w-1/3 text-center md:text-left border-b md:border-b-0 md:border-r border-outline-variant pb-4 md:pb-0 md:pr-8">
                <h3 class="font-headline-md text-headline-md text-charcoal-brown">마케팅</h3>
            </div>
            <div class="md:w-2/3">
                <p class="font-body-md text-body-md text-dark-taupe text-center md:text-left text-lg">
                    브랜딩, 스토리텔링, 콘텐츠 기획·제작
                </p>
            </div>
        </div>
    </div>
</section>
