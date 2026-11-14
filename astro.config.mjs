// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://okaynow.whitemason.club',
  base: '/',
  build: {
    // 차량 앱 QR과 기획서가 privacy.html·guide.html·report.html 주소를 쓰므로 파일 이름을 그대로 둔다.
    format: 'preserve',
  },
});
