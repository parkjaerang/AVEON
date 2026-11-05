<script setup lang="ts">
import ScrollReveal from '@/components/ScrollReveal.vue'
</script>

<template>
  <main class="page-main">
    <section class="portfolio">
      <ScrollReveal class="portfolio__inner">
        <p class="portfolio__label reveal-item">PORTFOLIO · 포트폴리오</p>
        <h1 class="reveal-item" style="transition-delay: 0.06s">SELECTED PROJECTS</h1>
        <p class="portfolio__lead reveal-item" style="transition-delay: 0.12s">
          중국 SNS와 인플루언서를 활용한 피부과 마케팅 실행 사례를 소개합니다.
        </p>
        <RouterLink
          class="btn btn-primary reveal-item"
          style="transition-delay: 0.18s"
          to="/contact"
        >
          마케팅 상담 신청
        </RouterLink>
      </ScrollReveal>
    </section>
  </main>
</template>

<style scoped>
.portfolio__inner {
  width: min(1120px, calc(100% - 64px));
  margin: 0 auto;
  padding: 64px 0 112px;
}

.portfolio__label {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: var(--orange);
}

.portfolio__inner h1 {
  margin-top: 14px;
  font-size: clamp(28px, 3.4vw, 40px);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.28;
}

.portfolio__lead {
  margin-top: 18px;
  max-width: 620px;
  color: #4b5563;
  font-size: 16px;
  line-height: 1.8;
}

.portfolio__inner .btn {
  margin-top: 32px;
}

@media (max-width: 768px) {
  .portfolio__inner {
    width: min(1120px, calc(100% - 40px));
    padding: 48px 0 80px;
  }
}
</style>
