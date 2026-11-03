<script setup lang="ts">
import ScrollReveal from '@/components/ScrollReveal.vue'

const strengths = [
  '피부과 분야에 특화된 중국 마케팅 운영 경험',
  '중국 현지 SNS 플랫폼별 콘텐츠 전략',
  '병원 특성에 맞는 인플루언서 매칭',
  '기획부터 실행, 결과 보고까지 통합 관리',
]
</script>

<template>
  <section id="home-strength" class="strength">
    <div class="strength__inner">
      <ScrollReveal class="strength__block" self :threshold="0.28">
        <h2 class="strength__heading">에비온컴퍼니의 경쟁력</h2>
        <ul class="strength__list">
          <li
            v-for="(item, index) in strengths"
            :key="item"
            class="strength__list-item reveal-item reveal-item--slide"
            :style="{ transitionDelay: `${index * 0.06}s` }"
          >
            {{ item }}
          </li>
        </ul>
      </ScrollReveal>

      <ScrollReveal class="strength__cta" self>
        <h3>중국 시장 진출, 어디서부터 시작할지 고민이라면.</h3>
        <p>병원의 목표와 상황에 맞는 중국 마케팅 방향을 함께 설계합니다.</p>
        <RouterLink class="btn btn-primary" to="/contact">에비온컴퍼니 상담 문의</RouterLink>
      </ScrollReveal>
    </div>
  </section>
</template>

<style scoped>
.strength {
  background: var(--white);
  scroll-margin-top: var(--header-h);
}

.strength__inner {
  width: min(1120px, calc(100% - 64px));
  margin: 0 auto;
  padding: 96px 0 112px;
}

.strength__block {
  max-width: 720px;
}

.strength__heading {
  font-size: clamp(24px, 2.8vw, 32px);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.35;
}

.strength__list {
  margin-top: 20px;
  padding-left: 1.2em;
  color: #374151;
  font-size: 17px;
  line-height: 1.8;
  list-style: disc;
}

.strength__list li + li {
  margin-top: 10px;
}

.strength__cta {
  margin-top: 64px;
  padding: clamp(40px, 5vw, 56px) clamp(32px, 5vw, 64px) clamp(44px, 5vw, 60px);
  background: var(--navy);
  color: var(--white);
  border-radius: var(--radius);
}

.strength__cta h3 {
  font-size: clamp(24px, 3vw, 34px);
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: -0.03em;
}

.strength__cta p {
  margin-top: 14px;
  max-width: 520px;
  color: rgba(255, 255, 255, 0.78);
  font-size: 16px;
  line-height: 1.75;
}

.strength__cta .btn {
  margin-top: 32px;
}

@media (max-width: 768px) {
  .strength__inner {
    width: min(1120px, calc(100% - 40px));
    padding: 72px 0 88px;
  }

  .strength__cta {
    margin-top: 48px;
    padding: 32px 24px 36px;
  }

  .strength__list {
    font-size: 16px;
  }
}
</style>
