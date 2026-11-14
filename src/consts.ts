// Pleos App Market 주소가 생기면 넣는다. 비어 있으면 "출시 준비 중"을 보여 준다.
export const MARKET_URL = '';

/** 차량 앱 소스 저장소(공모전 심사용, 비공개) */
export const GITHUB_URL = 'https://github.com/whitemason/okaynow-pleos';

/** 문의 이메일. 정해지면 넣는다. 비어 있으면 "준비 중"으로 보인다. */
export const CONTACT_EMAIL = '';

/** base(astro.config.mjs)를 붙인 사이트 안 주소 */
export function url(path = '') {
  return import.meta.env.BASE_URL.replace(/\/$/, '') + '/' + path.replace(/^\//, '');
}
