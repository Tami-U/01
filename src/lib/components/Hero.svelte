<script>
    import { Button } from "$lib/components/ui/button/index.js";
    import { Mail } from "lucide-svelte";
    import { i18n } from '$lib/i18n.svelte.js';

    const t = $derived({
        ko: {
            name: '박타미',
            tagline: '혼자서 한 편의 영화를 완성하는 영화감독',
            desc: '첫 아이디어부터 최종 배포까지, 한 손으로.',
            game: '게임 블로그',
            film: '영화 블로그',
            brunch: '브런치'
        },
        en: {
            name: 'TAMI PARK',
            tagline: 'A filmmaker who takes a film from A to Z.',
            desc: '',
            game: 'Game Blog',
            film: 'Film Blog',
            brunch: 'Brunch'
        }
    }[i18n.lang]);
</script>

<section class="px-margin-mobile md:px-margin-desktop py-section-gap grid grid-cols-1 md:grid-cols-2 gap-gutter items-center" id="intro">
    <div class="flex flex-col gap-6">
        <h1 class="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-charcoal-brown">
            {t.name}
        </h1>
        <p class="font-headline-md text-headline-md text-deep-wine">
            {t.tagline}
        </p>
        {#if t.desc}
            <p class="font-body-lg text-body-lg text-dark-taupe max-w-lg mt-4">
                {t.desc}
            </p>
        {/if}
        <div class="mt-8 flex flex-col items-start gap-4">
            <Button variant="ghost" class="font-body-md text-body-md text-charcoal-brown flex items-center gap-2 hover:text-deep-wine hover:bg-transparent transition-colors px-0 w-fit" href="mailto:tamiwriter@naver.com">
                <Mail class="w-5 h-5" />
                tamiwriter@naver.com
            </Button>
            <div class="flex gap-4 mt-2">
                <Button variant="link" target="_blank" rel="noopener" class="font-label-caps text-label-caps text-dark-taupe hover:text-deep-wine px-0 h-auto" href="https://tami-u.tistory.com/">{t.game}</Button>
                <Button variant="link" target="_blank" rel="noopener" class="font-label-caps text-label-caps text-dark-taupe hover:text-deep-wine px-0 h-auto" href="https://tami-u.tistory.com/">{t.film}</Button>
                <Button variant="link" target="_blank" rel="noopener" class="font-label-caps text-label-caps text-dark-taupe hover:text-deep-wine px-0 h-auto" href="https://brunch.co.kr/@utami">{t.brunch}</Button>
            </div>
        </div>
    </div>
    <div class="relative w-full aspect-[4/5] bg-soft-beige rounded-lg overflow-hidden p-6 md:p-12">
        <img alt="박타미 프로필 사진 - ARRI 카메라로 촬영 중" class="w-full h-full object-cover rounded-lg shadow-sm" src="/images/profile.png"/>
    </div>
</section>
