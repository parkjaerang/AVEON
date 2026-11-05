<script setup lang="ts">
import ScrollReveal from '@/components/ScrollReveal.vue'
import heroImage from '@/assets/images/influencer-hero-unsplash.jpg'
import kolImage from '@/assets/images/influencer-kol-unsplash.webp'
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
</script>

<template>
  <main class="page-main">
    <section class="influencer">
      <div class="influencer__inner">
        <ScrollReveal tag="header" class="influencer__head" :threshold="0.32">
          <p class="influencer__label reveal-item">INFLUENCER NETWORK · 인플루언서 네트워크</p>
          <h1 class="reveal-item" style="transition-delay: 0.06s">CHINA INFLUENCER NETWORK</h1>
          <p class="influencer__lead reveal-item" style="transition-delay: 0.12s">
            브랜드와 병원의 목표에 맞는 중국 인플루언서를 발굴하고,<br />
            캠페인 실행을 지원합니다.
          </p>
        </ScrollReveal>

        <ScrollReveal tag="figure" class="influencer__hero-media" self :threshold="0.28">
          <img :src="heroImage" alt="소셜 미디어·인플루언서 마케팅" loading="eager" />
        </ScrollReveal>

        <div class="influencer__content">
          <div class="influencer__types">
            <ScrollReveal
              v-for="item in influencerTypes"
              :key="item.title"
              tag="article"
              class="influencer__type"
              :class="`influencer__type--${item.id}`"
              self
            >
              <figure class="influencer__type-media" :class="`influencer__type-media--${item.id}`">
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
  padding: 64px 0 112px;
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
  color: var(--text-dark);
}

.influencer__lead {
  margin-top: 18px;
  max-width: 620px;
  color: #4b5563;
  font-size: 16px;
  line-height: 1.8;
}

.influencer__hero-media {
  margin: 40px 0 0;
  border-radius: var(--radius);
  overflow: hidden;
  aspect-ratio: 16 / 9;
  background: var(--gray);
}

.influencer__hero-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: var(--media-focus);
}

.influencer__content {
  padding: 56px 0 0;
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
  min-width: 0;
}

.influencer__type-media {
  position: relative;
  flex: 0 0 260px;
  width: 100%;
  height: 260px;
  margin: 0;
  overflow: hidden;
  background: #eef1f5;
}

.influencer__type-media img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: var(--media-focus);
}

.influencer__type-media--kol img {
  object-position: center 18%;
  /* slight soften so hair/skin edges don't look jagged when scaled */
  filter: blur(0.35px) contrast(0.985) saturate(1.03);
  transform: scale(1.02);
  transform-origin: center center;
}

.influencer__type-media--koc img {
  object-position: center 38%;
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
  aspect-ratio: 16 / 9;
}

.influencer__banner-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 42%;
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
    padding: 48px 0 80px;
  }

  .influencer__hero-media {
    margin-top: 28px;
    aspect-ratio: 4 / 3;
  }

  .influencer__banner-media {
    aspect-ratio: 4 / 3;
  }

  .influencer__banner-caption {
    padding: 20px 20px 22px;
  }

  .influencer__content {
    padding-top: 40px;
  }

  .influencer__types {
    grid-template-columns: 1fr;
  }

  .influencer__type + .influencer__type {
    border-left: 0;
    border-top: 1px solid #e8ebf0;
  }

  .influencer__type-media {
    flex-basis: 220px;
    height: 220px;
  }

  .influencer__lead br {
    display: none;
  }
}
</style>
