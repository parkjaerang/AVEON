<script setup lang="ts">
import ScrollReveal from '@/components/ScrollReveal.vue'
import type { ServiceItem } from '@/types'
import serviceClinic from '@/assets/images/hero-clinic.jpg'
import servicePortrait from '@/assets/images/hero-portrait.jpg'
import serviceCity from '@/assets/images/hero-city.jpg'

const featured: ServiceItem = {
  index: '01',
  title: '피부과 중국 마케팅 운영',
  summary: '병원별 목표에 맞춰 중국 마케팅 전략을 세우고, 콘텐츠부터 월간 보고까지 한 흐름으로 운영합니다.',
  items: ['마케팅 전략', '콘텐츠 캘린더', '플랫폼별 운영', '월간 보고'],
}

const services: ServiceItem[] = [
  {
    index: '02',
    title: '중국 인플루언서 섭외',
    summary: '채널과 지표를 검토한 뒤, 병원과 캠페인에 맞는 인플루언서를 섭외하고 일정을 조율합니다.',
    items: ['인플루언서 리스트업', '채널 및 지표 검토', '섭외 및 일정 조율'],
  },
  {
    index: '03',
    title: '콘텐츠 기획 및 제작',
    summary: '중국 고객이 이해하는 주제로 기획하고, 촬영부터 게시 관리까지 콘텐츠 제작을 지원합니다.',
    items: ['콘텐츠 주제 기획', '촬영 협업', '영상 및 이미지 제작', '게시 관리'],
  },
  {
    index: '04',
    title: '중국 SNS 계정 관리',
    summary: '게시 이후에도 계정 운영, 문의 모니터링, 반응 분석을 통해 접점이 끊기지 않도록 관리합니다.',
    items: ['게시물 운영', '댓글 및 문의 모니터링', '콘텐츠 반응 분석'],
  },
  {
    index: '05',
    title: '캠페인 성과 분석',
    summary: '조회수와 참여도에서 문의까지, 캠페인이 실제로 어떤 반응을 만들었는지 정리해 보고합니다.',
    items: ['조회수', '참여도', '저장', '링크 클릭', '문의 성과'],
  },
  {
    index: '06',
    title: '중국 고객 상담 연결',
    summary: '위챗 등 현지 고객 접점과 상담 흐름을 연결해, 관심 고객이 병원 문의까지 이어지도록 설계합니다.',
    items: ['위챗 등 고객 접점 연계', '상담 흐름 설계'],
  },
]
</script>

<template>
  <section id="services" class="services">
    <div class="services__inner">
      <ScrollReveal tag="header" class="services__head" :threshold="0.2">
        <p class="services__label reveal-item">SERVICES</p>
        <h2 class="reveal-item" style="transition-delay: 0.06s">
          중국 마케팅에 필요한 실행을<br />한 흐름으로 맡깁니다
        </h2>
        <p class="services__lead reveal-item" style="transition-delay: 0.12s">
          전략 수립부터 인플루언서 섭외, 콘텐츠 운영, 성과 정리, 상담 연결까지
          피부과 중국 마케팅에 필요한 과정을 함께 진행합니다.
        </p>
      </ScrollReveal>

      <ScrollReveal tag="article" class="feature" self :threshold="0.1">
        <div class="feature__copy">
          <span>{{ featured.index }}</span>
          <h3>{{ featured.title }}</h3>
          <p>{{ featured.summary }}</p>
          <ul>
            <li v-for="item in featured.items" :key="item">{{ item }}</li>
          </ul>
        </div>
        <figure class="feature__media">
          <img :src="serviceClinic" alt="피부과 중국 마케팅 운영" />
        </figure>
      </ScrollReveal>

      <div class="grid">
        <ScrollReveal tag="article" class="card card--photo motion-lift" self :threshold="0.1">
          <figure>
            <img :src="servicePortrait" alt="중국 인플루언서 섭외" />
          </figure>
          <div class="card__body">
            <span>{{ services[0].index }}</span>
            <h3>{{ services[0].title }}</h3>
            <p>{{ services[0].summary }}</p>
            <ul>
              <li v-for="item in services[0].items" :key="item">{{ item }}</li>
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal tag="article" class="card motion-lift" self :threshold="0.1">
          <div class="card__body">
            <span>{{ services[1].index }}</span>
            <h3>{{ services[1].title }}</h3>
            <p>{{ services[1].summary }}</p>
            <ul>
              <li v-for="item in services[1].items" :key="item">{{ item }}</li>
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal tag="article" class="card card--wide motion-lift" self :threshold="0.1">
          <div class="card__body">
            <span>{{ services[2].index }}</span>
            <h3>{{ services[2].title }}</h3>
            <p>{{ services[2].summary }}</p>
            <ul>
              <li v-for="item in services[2].items" :key="item">{{ item }}</li>
            </ul>
          </div>
          <figure>
            <img :src="serviceCity" alt="중국 SNS 계정 관리" />
          </figure>
        </ScrollReveal>

        <ScrollReveal tag="article" class="card motion-lift" self :threshold="0.1">
          <div class="card__body">
            <span>{{ services[3].index }}</span>
            <h3>{{ services[3].title }}</h3>
            <p>{{ services[3].summary }}</p>
            <ul class="chips">
              <li v-for="item in services[3].items" :key="item">{{ item }}</li>
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal tag="article" class="card card--accent motion-lift" self :threshold="0.1">
          <div class="card__body">
            <span>{{ services[4].index }}</span>
            <h3>{{ services[4].title }}</h3>
            <p>{{ services[4].summary }}</p>
            <ul>
              <li v-for="item in services[4].items" :key="item">{{ item }}</li>
            </ul>
            <RouterLink class="btn btn-primary" to="/contact">마케팅 상담 신청</RouterLink>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services {
  background: var(--gray);
  scroll-margin-top: var(--header-h);
}

.services__inner {
  width: min(1120px, calc(100% - 64px));
  margin: 0 auto;
  padding: 112px 0 120px;
}

.services__label {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.14em;
  color: var(--orange);
}

.services__head h2 {
  margin-top: 14px;
  font-size: clamp(28px, 3.4vw, 42px);
  font-weight: 700;
  line-height: 1.35;
  letter-spacing: -0.04em;
}

.services__lead {
  max-width: 640px;
  margin-top: 18px;
  color: #4b5563;
  font-size: 16px;
  line-height: 1.8;
}

.feature {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  min-height: 360px;
  margin-top: 48px;
  overflow: hidden;
  background: var(--navy);
  color: var(--white);
}

.feature__copy {
  padding: 44px 40px;
}

.feature span,
.card span {
  display: block;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--orange);
}

.feature h3,
.card h3 {
  margin-top: 12px;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.35;
}

.feature p,
.card p {
  margin-top: 14px;
  font-size: 15px;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.78);
}

.feature ul,
.card ul {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 24px;
  list-style: none;
}

.feature li,
.card li {
  padding: 7px 12px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 999px;
  font-size: 13px;
  font-weight: 600;
}

.feature__media,
.card figure {
  margin: 0;
  overflow: hidden;
  background: #101924;
}

.feature__media img,
.card figure img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s var(--ease);
}

.feature:hover img,
.card:hover img {
  transform: scale(1.05);
}

.grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 16px;
  margin-top: 16px;
}

.card {
  background: var(--white);
  overflow: hidden;
}

.card h3 {
  font-size: 22px;
}

.card p {
  color: #4b5563;
}

.card li {
  border-color: #e5e7eb;
  color: var(--navy);
}

.card__body {
  padding: 32px 28px 36px;
}

.card--photo {
  display: grid;
  grid-template-rows: 220px 1fr;
}

.card--wide {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
}

.card--wide figure {
  min-height: 220px;
}

.card--accent {
  background: var(--navy);
  color: var(--white);
}

.card--accent p {
  color: rgba(255, 255, 255, 0.78);
}

.card--accent li {
  border-color: rgba(255, 255, 255, 0.18);
  color: var(--white);
}

.card--accent .btn {
  margin-top: 28px;
}

.chips li {
  background: var(--gray);
  border-color: transparent;
}

@media (max-width: 1024px) {
  .services__inner {
    width: min(1120px, calc(100% - 40px));
    padding: 80px 0 88px;
  }

  .feature,
  .grid,
  .card--wide {
    grid-template-columns: 1fr;
  }

  .feature__media,
  .card--photo figure,
  .card--wide figure {
    min-height: 220px;
    height: 220px;
  }

  .feature h3 {
    font-size: 24px;
  }
}

@media (max-width: 768px) {
  .feature__copy,
  .card__body {
    padding: 28px 22px 32px;
  }

  .services__head h2 {
    font-size: 26px;
  }
}
</style>
