# AVEON COMPANY

**에비온컴퍼니(AVEON COMPANY)** 공식 기업 소개 웹사이트입니다.  
한국 피부과·뷰티 브랜드의 **중국 시장 진출**을 위한 SNS 마케팅, 인플루언서, 디지털 마케팅 역량을 소개합니다.

## 주요 페이지

| 경로 | 설명 |
|------|------|
| `/` | HOME — 히어로, 서비스 요약(2×2), 플랫폼(샤오홍슈·더우인·위챗), 경쟁력, 상담 CTA |
| `/about` | 회사 소개 |
| `/services` | 서비스 상세 |
| `/influencer` | 인플루언서 네트워크 |
| `/portfolio` | 포트폴리오 |
| `/contact` | 상담·문의 |

라우트별 브라우저 title은 `src/router/index.ts`의 `meta.title`에서 설정합니다.

## 기술 스택

- [Vue 3](https://vuejs.org/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite 6](https://vite.dev/)
- [Vue Router 4](https://router.vuejs.org/)
- Composition API (`<script setup lang="ts">`)
- [Lucide Vue Next](https://lucide.dev/) (아이콘)
- 폰트: Pretendard(CDN), Noto Serif KR(디스플레이용)

## 사전 요구 사항

- **Node.js** 18 이상 권장
- **npm** (또는 호환 패키지 매니저)

## 설치 및 실행

```bash
npm install
npm run dev
```

개발 서버: [http://localhost:5173](http://localhost:5173)  
(`vite.config.ts`에서 `host: true` — 동일 네트워크에서 LAN 접속 가능)

## npm 스크립트

| 명령 | 설명 |
|------|------|
| `npm run dev` | 개발 서버 (HMR) |
| `npm run build` | 타입 검사(`vue-tsc`) 후 프로덕션 빌드 → `dist/` |
| `npm run preview` | 빌드 결과 로컬 미리보기 |

## 프로젝트 구조

```
AVEON/
├── public/              # 정적 파일 (favicon.svg 등)
├── scripts/             # 유틸 스크립트 (로고 변환 등)
├── src/
│   ├── assets/
│   │   ├── images/      # 로고·이미지
│   │   └── styles/      # 전역 CSS (디자인 토큰)
│   ├── components/      # 공통·섹션 컴포넌트
│   ├── router/          # 라우트 정의
│   ├── types/           # 공용 TypeScript 타입
│   ├── views/           # 페이지 뷰
│   ├── App.vue
│   └── main.ts
├── index.html
├── vite.config.ts
└── package.json
```

경로 별칭: `@/` → `src/` (`vite.config.ts`)

## 디자인

브랜드 컬러 등은 `src/assets/styles/main.css`의 CSS 변수로 관리합니다.

- 네이비 `#172A43`, 포인트 오렌지 `#F28A32` 등

## 에셋·파비콘

- 헤더/푸터 로고: `src/assets/images/aveon-logo.png`, `aveon-logo-inverted.png`
- 탭 아이콘: `public/favicon.svg` (`index.html`에서 연결)

### 로고 반전 이미지 재생성 (선택)

푸터 등 어두운 배경용 `aveon-logo-inverted.png`는 Python + Pillow로 생성할 수 있습니다.

```bash
pip install pillow
python scripts/generate-inverted-logo.py
```

## 배포

```bash
npm run build
```

`dist/` 디렉터리를 정적 호스팅(Netlify, Vercel, S3+CloudFront, nginx 등)에 업로드합니다.  
SPA이므로 호스트에서 **모든 경로를 `index.html`로 fallback** 하도록 설정하세요.

### GitHub Pages

1. **Settings → Pages:** Branch `main`, Folder **`/docs`**
2. `npm run build:pages` 후 `docs/` 커밋·푸시
3. 소스에 `/AVEON/assets/index-….js`가 보이면 정상 (`/src/main.ts`면 Pages 폴더 설정 오류)

## 라이선스

Private 프로젝트 (`package.json` — `"private": true`).
