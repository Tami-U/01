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
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="md:col-span-1">
                    <p class="font-body-md text-body-md text-dark-taupe leading-relaxed mb-4">
                        ChatGPT 프롬프트, 미드저니 UI, Suno BGM 설계 및 에셋 제작
                    </p>
                </div>
                <div class="md:col-span-2 grid grid-cols-2 gap-4">
                    <div class="aspect-video bg-soft-beige rounded overflow-hidden relative">
                        <img alt="AI 게임 프롤로그 영상" class="w-full h-full object-cover" data-alt="A mystical sci-fi game UI concept art, floating islands in a dark serene atmosphere, teal and neon blue accents, detailed holographic interface elements, Japandi clean composition." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvtIPDr8OyN9nlcfvd71An7-Yp5fftuVVVbukBeVv6l3Jpkbplp_5T7eDCxfQ13KnPs6GczFUf4V9I5HqYuy5mWxvPEtAoBqch4Vv00UHFnZXLJzVZsItJrtumbvX_VnyPBA64hXRDD31RO58vWu2Qnjkk_y1K48Sca4uiaOkcOtsE5lw1fJ9S4SSiyN8OaIurO8cHOt9Q04WPohM0U_pL5WqRNiCAk5ynKyHPcz3XC4rJM1mYUQmetBeK5Mt6SZm9CLLxRsvU0HQ4"/>
                        <div class="absolute bottom-2 left-2 bg-background/80 px-2 py-1 rounded text-xs font-label-caps text-charcoal-brown">AI 게임 프롤로그</div>
                    </div>
                    <div class="aspect-video bg-soft-beige rounded overflow-hidden relative">
                        <img alt="SF Truck 콘셉트 기획" class="w-full h-full object-cover" data-alt="A conceptual illustration of a futuristic sci-fi heavy duty truck driving across a desert landscape, muted orange and taupe color palette, cinematic lighting, stylized concept art." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBWRcSSwPBswM6W9OktgaCT_Lj-49pMg0vLQe8ZZ0iMJnFcG_GmUXZNziCv2R9bW48up08NWunyHh_RvCviNZTAqWbwVr--nIlzHxLujsM5QEy_WbGz2KAAopDZfEtJ979ovKjmLZ86_gzu9B1INKA1TvaOjGo1bOSCEqidt9NTQo5BL4NmKJ7CR8rv--3m5odWMyZZchufjg65NlZ6j2K3DE-Q94ZWXnVF_v-sqTnwiGuBdZuk3kxcJW4R3StRtKOkcLp8jTmThJB"/>
                        <div class="absolute bottom-2 left-2 bg-background/80 px-2 py-1 rounded text-xs font-label-caps text-charcoal-brown">SF Truck 콘셉트 기획</div>
                    </div>
                </div>
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
