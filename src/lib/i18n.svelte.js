import { browser } from '$app/environment';

// 전역 언어 상태 (ko | en). 컴포넌트들이 i18n.lang을 반응형으로 읽습니다.
export const i18n = $state({ lang: 'ko' });

export function setLang(lang) {
	i18n.lang = lang;
	if (browser) {
		localStorage.setItem('lang', lang);
		document.documentElement.lang = lang;
	}
}

// 최초 로드 시 저장된 언어를 복원합니다. (클라이언트 전용)
export function initLang() {
	if (!browser) return;
	const saved = localStorage.getItem('lang');
	if (saved === 'ko' || saved === 'en') {
		i18n.lang = saved;
		document.documentElement.lang = saved;
	}
}
