<script setup lang="ts">
import ScrollReveal from '@/components/ScrollReveal.vue'

const items = [
  {
    title: '중국 SNS 운영',
    desc: '계정 관리 및 콘텐츠 운영',
  },
  {
    title: '인플루언서 섭외',
    desc: 'KOL·KOC 매칭 및 캠페인',
  },
  {
    title: '콘텐츠 제작',
    desc: '영상·사진·체험형 콘텐츠',
  },
  {
    title: '성과 분석',
    desc: '노출·반응·문의 데이터 분석',
  },
]
</script>

<template>
  <section id="home-services" class="overview">
    <div class="overview__inner">
      <ScrollReveal tag="div" class="overview__grid-wrap">
        <ul class="overview__grid">
          <li
            v-for="(item, index) in items"
            :key="item.title"
            class="overview__card motion-lift reveal-item"
            :style="{ transitionDelay: `${0.05 + index * 0.1}s` }"
          >
            <h2>{{ item.title }}</h2>
            <p>{{ item.desc }}</p>
          </li>
        </ul>
      </ScrollReveal>
    </div>
  </section>
</template>

<style scoped>
.overview {
  background: var(--white);
  scroll-margin-top: var(--header-h);
}

.overview__inner {
  width: min(1120px, calc(100% - 64px));
  margin: 0 auto;
  padding: 80px 0 72px;
}

.overview__grid-wrap {
  display: block;
}

.overview__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  list-style: none;
}

.overview__card {
  padding: 32px 28px 36px;
  background: var(--gray);
  border: 1px solid #e8eaee;
  border-radius: var(--radius);
}

.overview__card h2 {
  font-size: clamp(22px, 2.4vw, 28px);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.35;
}

.overview__card p {
  margin-top: 10px;
  color: #4b5563;
  font-size: 16px;
  line-height: 1.65;
}

@media (max-width: 768px) {
  .overview__inner {
    width: min(1120px, calc(100% - 40px));
    padding: 64px 0 72px;
  }

  .overview__grid {
    grid-template-columns: 1fr;
  }

  .overview__card {
    padding: 28px 24px 32px;
  }
}
</style>
