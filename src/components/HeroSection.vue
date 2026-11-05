<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import heroClinic from '@/assets/images/hero-clinic.jpg'

const heroReady = ref(false)
const visualReady = ref(false)
/** 좌측 텍스트·버튼 모션 시작까지 대기 (ms) */
const HERO_START_MS = 420

let heroStartTimer: ReturnType<typeof setTimeout> | null = null

const highlights = [
  { label: '피부과 특화', desc: '중국 마케팅 운영' },
  { label: '인플루언서', desc: '섭외 및 캠페인 실행' },
  { label: 'SNS 운영', desc: '샤오홍슈 · 더우인 · 위챗' },
]

onMounted(() => {
  requestAnimationFrame(() => {
    visualReady.value = true
  })
  heroStartTimer = setTimeout(() => {
    heroReady.value = true
  }, HERO_START_MS)
})

onBeforeUnmount(() => {
  if (heroStartTimer) clearTimeout(heroStartTimer)
})
</script>

<template>
  <section id="home" class="hero" :class="{ 'is-ready': heroReady }">
    <div class="hero__copy">
      <p class="hero__eyebrow">중국 뷰티 마케팅 파트너</p>
      <h1 class="hero__title">
        한국의 뷰티를<br />
        중국의 고객과 연결합니다
      </h1>
      <p class="hero__en">KOREA × CHINA · BEAUTY · DIGITAL MARKETING</p>
      <p class="hero__sub">
        중국 SNS 마케팅부터 인플루언서 섭외까지,<br />
        에비온컴퍼니가 함께합니다.
      </p>
      <div class="hero__actions">
        <RouterLink class="btn btn-primary" to="/contact">마케팅 상담 신청</RouterLink>
        <RouterLink class="btn btn-ghost" to="/services">서비스 알아보기</RouterLink>
      </div>
      <ul class="hero__points">
        <li
          v-for="(item, index) in highlights"
          :key="item.label"
          class="hero__point"
          :style="{ transitionDelay: `${0.4 + index * 0.15}s` }"
        >
          <strong>{{ item.label }}</strong>
          <span>{{ item.desc }}</span>
        </li>
      </ul>
    </div>

    <div class="hero__visual" :class="{ 'is-ready': visualReady }">
      <img :src="heroClinic" alt="피부과·뷰티 케어 상담 이미지" />
      <div class="hero__caption">
        <span>AVEON COMPANY</span>
        <p>한국 피부과의 중국시장 진출</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  min-height: 100vh;
  min-height: 100dvh;
  padding-top: var(--header-h);
}

.hero__copy {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--navy);
  color: var(--white);
  padding: 72px 64px 64px;
}

.hero__sub {
  opacity: 0;
  transform: translateY(16px);
  transition:
    opacity 0.65s var(--ease),
    transform 0.65s var(--ease);
  transition-delay: 0s;
}

.hero__eyebrow {
  display: inline-flex;
  width: fit-content;
  margin-bottom: 20px;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(242, 138, 50, 0.14);
  color: #f6b06a;
  font-size: 13px;
  font-weight: 600;
  opacity: 0;
  transform: translate3d(0, 24px, 0);
  transition:
    opacity 0.65s var(--ease),
    transform 0.65s var(--ease);
  transition-delay: 0s;
}

.hero.is-ready .hero__eyebrow,
.hero.is-ready .hero__sub {
  opacity: 1;
  transform: none;
}

.hero__title {
  font-size: clamp(32px, 3.6vw, 48px);
  font-weight: 700;
  line-height: 1.28;
  letter-spacing: -0.04em;
}

.hero__en {
  margin-top: 14px;
  color: rgba(255, 255, 255, 0.48);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.06em;
}

.hero__sub,
.hero__actions {
  transition:
    opacity 0.65s var(--ease),
    transform 0.65s var(--ease);
}

.hero__actions {
  opacity: 0;
  transform: translateY(14px);
  transition-delay: 0.08s;
}

.hero.is-ready .hero__actions {
  opacity: 1;
  transform: none;
}

.hero__point {
  opacity: 0;
  transform: translateY(-22px);
  transition:
    opacity 0.6s var(--ease),
    transform 0.6s var(--ease);
}

.hero.is-ready .hero__point {
  opacity: 1;
  transform: none;
}

.hero__sub {
  margin-top: 28px;
  color: rgba(255, 255, 255, 0.78);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.75;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 36px;
}

.hero__points {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 56px;
  padding-top: 28px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  list-style: none;
}

.hero__points strong {
  display: block;
  font-size: 14px;
  font-weight: 700;
}

.hero__points span {
  display: block;
  margin-top: 4px;
  color: rgba(255, 255, 255, 0.58);
  font-size: 13px;
}

.hero__visual {
  position: relative;
  overflow: hidden;
  background: #0f1c2d;
  opacity: 0;
  transform: scale(1.02);
  transition:
    opacity 0.85s var(--ease),
    transform 0.85s var(--ease);
}

.hero__visual.is-ready {
  opacity: 1;
  transform: none;
}

.hero__visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: var(--media-focus);
  transition: transform 0.8s var(--ease);
}

.hero__visual:hover img {
  transform: scale(1.02);
}

.hero__caption {
  position: absolute;
  left: 24px;
  bottom: 28px;
  color: var(--white);
  text-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
}

.hero__caption span {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.hero__caption p {
  margin-top: 4px;
  font-size: 14px;
  font-weight: 500;
}


@media (max-width: 1024px) {
  .hero {
    grid-template-columns: 1fr;
  }

  .hero__copy {
    padding: 48px 24px 40px;
  }

  .hero__visual {
    min-height: 360px;
  }

  .hero__points {
    grid-template-columns: 1fr;
    gap: 18px;
    margin-top: 36px;
  }
}

@media (max-width: 768px) {
  .hero__title {
    font-size: 30px;
  }

  .hero__actions .btn {
    flex: 1;
    min-width: 140px;
  }

  .hero__visual {
    min-height: 280px;
  }
}
</style>
