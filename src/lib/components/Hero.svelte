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
            혼자서 한 편의 영화를 완성하는 영화감독
        </p>
        <p class="font-body-lg text-body-lg text-dark-taupe max-w-lg mt-4">
            첫 아이디어부터 최종 배포까지, 한 손으로.
        </p>
        <div class="mt-8 flex flex-col items-start gap-4">
            <Button variant="ghost" class="font-body-md text-body-md text-charcoal-brown flex items-center gap-2 hover:text-deep-wine hover:bg-transparent transition-colors px-0 w-fit" href="mailto:tamiwriter@naver.com">
                <Mail class="w-5 h-5" />
                tamiwriter@naver.com
            </Button>
            <div class="flex gap-4 mt-2">
                <Button variant="link" target="_blank" rel="noopener" class="font-label-caps text-label-caps text-dark-taupe hover:text-deep-wine px-0 h-auto" href="https://tami-u.tistory.com/">게임 블로그</Button>
                <Button variant="link" target="_blank" rel="noopener" class="font-label-caps text-label-caps text-dark-taupe hover:text-deep-wine px-0 h-auto" href="https://tami-film.tistory.com/">영화 블로그</Button>
                <Button variant="link" target="_blank" rel="noopener" class="font-label-caps text-label-caps text-dark-taupe hover:text-deep-wine px-0 h-auto" href="https://brunch.co.kr/@utami">브런치</Button>
            </div>
        </div>
    </div>
    <div class="relative w-full aspect-[4/5] bg-soft-beige rounded-lg overflow-hidden p-6 md:p-12">
        <img alt="박타미 프로필 사진 - ARRI 카메라로 촬영 중" class="w-full h-full object-cover rounded-lg shadow-sm" src="/images/profile.png"/>
    </div>
</section>
