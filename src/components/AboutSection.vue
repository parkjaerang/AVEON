<script setup lang="ts">
import ScrollReveal from '@/components/ScrollReveal.vue'
import aboutImage from '@/assets/images/hero-city.jpg'

const values = [
  {
    index: '01',
    title: '전문성',
    text: '피부과와 의료 뷰티 시장의 맥락을 이해하고,\n병원별 목표에 맞는 중국 마케팅 방향을 설계합니다.',
  },
  {
    index: '02',
    title: '현지화',
    text: '샤오홍슈, 더우인, 위챗 등 중국 SNS의\n콘텐츠 형식과 고객 언어에 맞춰 전략을 실행합니다.',
  },
  {
    index: '03',
    title: '실행력',
    text: '기획에서 인플루언서 섭외, 콘텐츠 게시, 계정 운영까지\n캠페인이 실제로 움직이도록 함께합니다.',
  },
  {
    index: '04',
    title: '투명한 성과 관리',
    text: '조회, 참여, 문의로 이어지는 과정을 보고하고,\n다음 실행에 반영할 수 있도록 정리합니다.',
  },
]
</script>

<template>
  <section id="about" class="about">
    <div class="about__inner">
      <ScrollReveal tag="div" class="about__story" self :threshold="0.12">
        <div class="about__copy">
          <p class="about__label">ABOUT</p>
          <h2 class="about__title">
            한국과 중국,<br />
            피부과와 디지털을 연결합니다
          </h2>
          <p class="about__axis">KOREA × CHINA&nbsp;&nbsp;·&nbsp;&nbsp;BEAUTY × DIGITAL</p>
          <p>
            에비온컴퍼니는 한국 피부과의 중국 시장 진출과 고객 접점 확대를 지원하는<br />
            중국 마케팅 전문 기업입니다.
          </p>
          <p>
            중국 SNS 플랫폼에 적합한 콘텐츠 전략과 인플루언서 협업을 통해<br />
            병원별 마케팅 목표에 맞는 실행 방안을 제안합니다.
          </p>
        </div>
        <figure class="about__media">
          <img :src="aboutImage" alt="중국 시장과 연결되는 글로벌 비즈니스 도시 풍경" />
        </figure>
      </ScrollReveal>

      <ScrollReveal tag="div" class="about__mv" :threshold="0.12">
        <article class="reveal-item">
          <p class="about__mv-label">MISSION</p>
          <h3>
            한국의 우수한 의료·뷰티 서비스를<br />
            중국 고객에게 효과적으로 전달합니다.
          </h3>
        </article>
        <article class="reveal-item" style="transition-delay: 0.08s">
          <p class="about__mv-label">VISION</p>
          <h3>
            한국과 중국을 연결하는<br />
            신뢰도 높은 뷰티 마케팅 파트너로 성장합니다.
          </h3>
        </article>
      </ScrollReveal>

      <ScrollReveal tag="div" class="about__values" :threshold="0.1">
        <p class="about__values-label reveal-item">CORE VALUES</p>
        <ul>
          <li
            v-for="(item, index) in values"
            :key="item.index"
            class="reveal-item"
            :style="{ transitionDelay: `${0.06 + index * 0.07}s` }"
          >
            <span>{{ item.index }}</span>
            <strong>{{ item.title }}</strong>
            <p>{{ item.text }}</p>
          </li>
        </ul>
      </ScrollReveal>
    </div>
  </section>
</template>

<style scoped>
.about {
  background: var(--white);
  scroll-margin-top: var(--header-h);
}

.about__inner {
  width: min(1120px, calc(100% - 64px));
  margin: 0 auto;
  padding: 112px 0 120px;
}

.about__label {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.14em;
  color: var(--orange);
}

.about__title {
  margin-top: 14px;
  font-size: clamp(28px, 3.4vw, 42px);
  font-weight: 700;
  line-height: 1.35;
  letter-spacing: -0.04em;
}

.about__axis {
  margin-top: 16px;
  color: var(--text);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.08em;
}

.about__story {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: start;
}

.about__copy p {
  color: #4b5563;
  font-size: 17px;
  line-height: 1.85;
  word-break: keep-all;
  text-wrap: pretty;
}

.about__copy p.about__label {
  color: var(--orange);
  font-size: 13px;
  line-height: 1.4;
}

.about__copy p.about__axis {
  color: var(--text);
  font-size: 13px;
}

.about__copy > p:nth-of-type(3),
.about__copy > p:nth-of-type(4) {
  margin-top: 18px;
}

.about__axis {
  margin-bottom: 28px;
}

.about__media {
  margin: 0;
  overflow: hidden;
  background: var(--gray);
}

.about__media img {
  width: 100%;
  height: 420px;
  object-fit: cover;
  transition: transform 0.7s var(--ease);
}

.about__media:hover img {
  transform: scale(1.03);
}

.about__mv {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 72px;
}

.about__mv article {
  padding: 32px 32px 36px;
  background: var(--gray);
}

.about__mv-label {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: var(--orange);
}

.about__mv h3 {
  margin-top: 14px;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.55;
  letter-spacing: -0.03em;
  word-break: keep-all;
  text-wrap: pretty;
}

.about__values {
  margin-top: 80px;
}

.about__values-label {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: var(--text);
}

.about__values ul {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px;
  margin-top: 28px;
  padding-top: 28px;
  border-top: 1px solid #e5e7eb;
  list-style: none;
}

.about__values span {
  display: block;
  color: var(--orange);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.about__values strong {
  display: block;
  margin-top: 10px;
  font-size: 18px;
}

.about__values p {
  margin-top: 12px;
  color: var(--text);
  font-size: 14px;
  line-height: 1.7;
  white-space: pre-line;
  word-break: keep-all;
  text-wrap: pretty;
}

@media (max-width: 1024px) {
  .about__inner {
    width: min(1120px, calc(100% - 40px));
    padding: 80px 0 88px;
  }

  .about__story,
  .about__mv,
  .about__values ul {
    grid-template-columns: 1fr;
  }

  .about__media img {
    height: 240px;
  }
}

@media (max-width: 768px) {
  .about__title {
    font-size: 26px;
  }

  .about__copy p {
    font-size: 16px;
  }

  .about__mv article {
    padding: 24px;
  }

  .about__mv h3 {
    font-size: 18px;
  }
}
</style>
