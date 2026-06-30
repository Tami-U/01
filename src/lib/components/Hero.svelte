<script>
    import { Button } from "$lib/components/ui/button/index.js";
    import { Mail } from "lucide-svelte";
</script>

<section class="px-margin-mobile md:px-margin-desktop py-section-gap grid grid-cols-1 md:grid-cols-2 gap-gutter items-center" id="intro">
    <div class="flex flex-col gap-6">
        <h1 class="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal-brown">
            박타미
        </h1>
        <p class="font-headline-md text-headline-md text-deep-wine">
            영화감독 · AI 영상 크리에이터
        </p>
        <p class="font-body-lg text-body-lg text-dark-taupe max-w-lg mt-4">
            기술과 서사를 결합하여 새로운 시각적 경험을 만드는 제작자입니다.
        </p>
        <div class="mt-8 flex flex-col items-start gap-4">
            <Button variant="ghost" class="font-body-md text-body-md text-charcoal-brown flex items-center gap-2 hover:text-deep-wine hover:bg-transparent transition-colors px-0 w-fit" href="mailto:tamiwriter@naver.com">
                <Mail class="w-5 h-5" />
                tamiwriter@naver.com
            </Button>
            <div class="flex gap-4 mt-2">
                <Button variant="link" class="font-label-caps text-label-caps text-dark-taupe hover:text-deep-wine px-0 h-auto" href="#">게임 블로그</Button>
                <Button variant="link" class="font-label-caps text-label-caps text-dark-taupe hover:text-deep-wine px-0 h-auto" href="#">영화 블로그</Button>
                <Button variant="link" class="font-label-caps text-label-caps text-dark-taupe hover:text-deep-wine px-0 h-auto" href="#">브런치</Button>
            </div>
        </div>
    </div>
    <div class="relative w-full aspect-[4/5] bg-soft-beige rounded-lg overflow-hidden p-6 md:p-12">
        <img alt="박타미 프로필 사진" class="w-full h-full object-cover rounded-lg shadow-sm" data-alt="A cinematic portrait of a Korean female filmmaker in a warm Japandi minimalist setting, soft neutral tones, elegant lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8BL-JJ-tPoBihco9rEMzPrYnNt0Ncj8nnovtWicPmH7YDZ7zRX4UtWNb3dT6ceKVC7kn-TQi1ohOePvIkKWKBbJpohMBfMER2_ev8o0PSh_vsbXnTEF_wMb6LonT2WPzAi08MjfqRNBD8ConimLhaWcoSWWPiBUF8sUczmm8sOeaZU9DFCUDD4R4b77-9T2l1NSizmq2p6vClDaRk-9VF1AeUHRQkd5KgzOZxyUyPJOJlpbrnavkzLSGZBg3cOCF0u0dEG3JMvkSH"/>
    </div>
</section>
