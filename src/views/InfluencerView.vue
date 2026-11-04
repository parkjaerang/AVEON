<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import ScrollReveal from '@/components/ScrollReveal.vue'
import heroImage from '@/assets/images/influencer-hero-unsplash.jpg'
import kolImage from '@/assets/images/influencer-kol-unsplash.jpg'
import kocImage from '@/assets/images/influencer-koc-unsplash.jpg'
import scopeImage from '@/assets/images/influencer-scope-unsplash.jpg'

const influencerTypes = [
  {
    id: 'kol',
    title: 'KOL',
    text: '인지도와 영향력을 바탕으로 브랜드 및 병원 홍보를 위한 인플루언서 협업',
    image: kolImage,
    alt: 'KOL 인플루언서 콘텐츠 촬영',
  },
  {
    id: 'koc',
    title: 'KOC',
    text: '체험형 콘텐츠와 후기 중심의 실제 경험 전달 및 콘텐츠 확산',
    image: kocImage,
    alt: 'KOC 뷰티·체험 후기 콘텐츠',
  },
]

const servicePoints = [
  '플랫폼별 인플루언서 섭외 서비스 소개',
  '팔로워 수, 콘텐츠 분야, 주요 활동 플랫폼에 따른 매칭 기준',
  '피부과 방문 체험, 시술 관련 콘텐츠, 뷰티 리뷰 등 캠페인 유형',
  '섭외부터 방문 일정 조율, 콘텐츠 게시, 결과 보고까지의 진행 절차',
  '인플루언서 협업 문의 양식',
]

const heroReady = ref(false)
/** 페이지 진입 후 모션 시작까지 대기 (ms) — Home hero와 동일 */
const HERO_START_MS = 420

let heroStartTimer: ReturnType<typeof setTimeout> | null = null

onMounted(() => {
  heroStartTimer = setTimeout(() => {
    heroReady.value = true
  }, HERO_START_MS)
})

onBeforeUnmount(() => {
  if (heroStartTimer) clearTimeout(heroStartTimer)
})
</script>

<template>
  <main class="page-main">
    <section class="influencer">
      <div class="influencer__hero" :class="{ 'is-ready': heroReady }">
        <div class="influencer__hero-copy">
          <div class="influencer__inner influencer__inner--hero">
            <header class="influencer__head">
              <p class="influencer__head-el influencer__label">INFLUENCER NETWORK · 인플루언서 네트워크</p>
              <h1 class="influencer__head-el">CHINA INFLUENCER NETWORK</h1>
              <p class="influencer__head-el influencer__lead">
                브랜드와 병원의 목표에 맞는 중국 인플루언서를 발굴하고,<br />
                캠페인 실행을 지원합니다.
              </p>
            </header>
          </div>
        </div>
        <figure class="influencer__hero-media">
          <img :src="heroImage" alt="소셜 미디어·인플루언서 마케팅" />
        </figure>
      </div>

      <div class="influencer__content">
        <div class="influencer__inner">
          <div class="influencer__types">
            <ScrollReveal
              v-for="item in influencerTypes"
              :key="item.title"
              tag="article"
              class="influencer__type"
              :class="`influencer__type--${item.id}`"
              self
            >
              <figure class="influencer__type-media">
                <img :src="item.image" :alt="item.alt" loading="lazy" />
              </figure>
              <div class="influencer__type-body">
                <h2>{{ item.title }}</h2>
                <p>{{ item.text }}</p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal class="influencer__banner" self :threshold="0.2">
            <figure class="influencer__banner-media">
              <img :src="scopeImage" alt="인플루언서 캠페인 기획·협업" loading="lazy" />
              <figcaption class="influencer__banner-caption">
                <span>CAMPAIGN EXECUTION</span>
                <p>섭외부터 콘텐츠 게시·성과 보고까지 한 흐름으로 지원합니다.</p>
              </figcaption>
            </figure>
          </ScrollReveal>

          <ScrollReveal class="influencer__points-wrap" :threshold="0.1">
            <p class="influencer__points-label reveal-item">SERVICE SCOPE</p>
            <ul class="influencer__points">
              <li
                v-for="(point, index) in servicePoints"
                :key="point"
                class="reveal-item reveal-item--slide"
                :style="{ transitionDelay: `${0.08 + index * 0.07}s` }"
              >
                <span class="influencer__points-num">{{ index + 1 }}</span>
                <span>{{ point }}</span>
              </li>
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.influencer {
  background: var(--white);
}

.influencer__inner {
  width: min(1120px, calc(100% - 64px));
  margin: 0 auto;
}

.influencer__hero {
  position: relative;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  min-height: min(520px, 72vh);
  background: var(--navy);
  color: var(--white);
  overflow: hidden;
  isolation: isolate;
}

.influencer__hero::before {
  position: absolute;
  top: 0;
  bottom: 0;
  left: calc(100% * 1.05 / 2.05 - 32px);
  z-index: 3;
  width: 64px;
  background: linear-gradient(90deg, var(--navy) 0%, var(--navy) 35%, transparent 100%);
  content: '';
  pointer-events: none;
}

.influencer__hero-copy {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  z-index: 2;
  background: var(--navy);
}

.influencer__hero-copy::after {
  position: absolute;
  top: 0;
  right: -48px;
  width: 48px;
  height: 100%;
  background: var(--navy);
  content: '';
  pointer-events: none;
}

.influencer__hero-media {
  position: relative;
  z-index: 1;
  margin: 0;
  min-height: 280px;
  overflow: hidden;
  background: var(--navy);
  opacity: 0;
  transition: opacity 0.85s var(--ease);
  transition-delay: 0.12s;
  contain: paint;
}

.influencer__hero.is-ready .influencer__hero-media {
  opacity: 1;
}

.influencer__hero-media img {
  width: calc(100% + 2px);
  height: 100%;
  margin-left: -1px;
  object-fit: cover;
  transform: scale3d(1.06, 1.06, 1);
  transform-origin: center center;
  transition: transform 1.1s var(--ease);
  transition-delay: 0.12s;
  backface-visibility: hidden;
}

.influencer__hero.is-ready .influencer__hero-media img {
  transform: scale3d(1, 1, 1);
}

.influencer__hero-media::after {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(
    90deg,
    var(--navy) 0%,
    var(--navy) 18%,
    rgba(23, 42, 67, 0.85) 30%,
    transparent 52%
  );
  content: '';
  pointer-events: none;
}

.influencer__inner.influencer__inner--hero {
  width: 100%;
  max-width: none;
  margin: 0;
  padding: 72px 64px 64px;
}

.influencer__head-el {
  opacity: 0;
  transform: translate3d(0, 22px, 0);
  backface-visibility: hidden;
  transition:
    opacity 0.65s var(--ease),
    transform 0.65s var(--ease);
}

.influencer__hero.is-ready .influencer__head-el {
  opacity: 1;
  transform: none;
}

.influencer__hero.is-ready .influencer__head-el:nth-child(1) {
  transition-delay: 0s;
}

.influencer__hero.is-ready .influencer__head-el:nth-child(2) {
  transition-delay: 0.1s;
}

.influencer__hero.is-ready .influencer__head-el:nth-child(3) {
  transition-delay: 0.2s;
}

.influencer__label {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: var(--orange);
}

.influencer__head h1 {
  margin-top: 14px;
  font-size: clamp(28px, 3.4vw, 40px);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.28;
}

.influencer__lead {
  margin-top: 18px;
  max-width: 620px;
  color: rgba(255, 255, 255, 0.72);
  font-size: 16px;
  line-height: 1.8;
}

.influencer__content {
  padding: 56px 0 112px;
}

.influencer__types {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid #e8ebf0;
  border-radius: var(--radius);
  overflow: hidden;
}

.influencer__type {
  display: flex;
  flex-direction: column;
  padding: 0;
}

.influencer__type-media {
  margin: 0;
  aspect-ratio: 16 / 10;
  overflow: hidden;
}

.influencer__type-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.influencer__type-body {
  padding: 28px 28px 36px;
}

.influencer__type + .influencer__type {
  border-left: 1px solid #e8ebf0;
}

.influencer__type--kol {
  background: #f8fafc;
}

.influencer__type h2 {
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: var(--navy);
}

.influencer__type p {
  margin-top: 12px;
  color: #4b5563;
  font-size: 15px;
  line-height: 1.75;
}

.influencer__type--kol h2::before,
.influencer__type--koc h2::before {
  display: block;
  width: 24px;
  height: 3px;
  margin-bottom: 14px;
  border-radius: 999px;
  content: '';
}

.influencer__type--kol h2::before {
  background: var(--navy);
}

.influencer__type--koc h2::before {
  background: var(--orange);
}

.influencer__banner {
  margin-top: 48px;
}

.influencer__banner-media {
  position: relative;
  margin: 0;
  border-radius: var(--radius);
  overflow: hidden;
  aspect-ratio: 21 / 8;
}

.influencer__banner-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.influencer__banner-caption {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 28px 32px;
  background: linear-gradient(180deg, transparent 0%, rgba(15, 23, 42, 0.88) 100%);
  color: var(--white);
}

.influencer__banner-caption span {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.14em;
  color: var(--orange);
}

.influencer__banner-caption p {
  margin-top: 8px;
  max-width: 520px;
  font-size: 15px;
  line-height: 1.65;
}

.influencer__points-wrap {
  margin-top: 56px;
  padding-top: 48px;
  border-top: 1px solid #e8ebf0;
}

.influencer__points-label {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.14em;
  color: var(--orange);
}

.influencer__points {
  margin-top: 20px;
  padding-left: 0;
  list-style: none;
}

.influencer__points li {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid #eef1f5;
  color: #374151;
  font-size: 15px;
  line-height: 1.7;
}

.influencer__points li:last-child {
  border-bottom: 0;
  padding-bottom: 0;
}

.influencer__points-num {
  flex-shrink: 0;
  width: 24px;
  font-size: 14px;
  font-weight: 700;
  color: var(--orange);
}

@media (max-width: 768px) {
  .influencer__inner {
    width: min(1120px, calc(100% - 40px));
  }

  .influencer__hero {
    grid-template-columns: 1fr;
    min-height: 0;
  }

  .influencer__hero::before {
    display: none;
  }

  .influencer__hero-copy::after {
    display: none;
  }

  .influencer__hero-media {
    order: -1;
    min-height: 220px;
    max-height: 280px;
  }

  .influencer__hero-media::after {
    background: linear-gradient(180deg, transparent 35%, var(--navy) 100%);
  }

  .influencer__inner.influencer__inner--hero {
    padding: 48px 24px 40px;
  }

  .influencer__banner-media {
    aspect-ratio: 4 / 3;
  }

  .influencer__banner-caption {
    padding: 20px 20px 22px;
  }

  .influencer__content {
    padding: 40px 0 80px;
  }

  .influencer__types {
    grid-template-columns: 1fr;
  }

  .influencer__type + .influencer__type {
    border-left: 0;
    border-top: 1px solid #e8ebf0;
  }

  .influencer__lead br {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .influencer__head-el,
  .influencer__hero-media,
  .influencer__hero-media img {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
</style>
