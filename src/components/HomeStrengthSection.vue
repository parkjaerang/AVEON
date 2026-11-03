<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import ctaBackground from '@/assets/images/andy-wang-kMzMK36LCeA-unsplash.jpg'

const ctaBackgroundImage = `url(${ctaBackground})`

const strengthBlockRoot = ref<HTMLElement | null>(null)
const strengthMotionOn = ref(false)
let strengthMotionTimer: ReturnType<typeof setTimeout> | null = null
let strengthObserver: IntersectionObserver | null = null

const ctaRoot = ref<HTMLElement | null>(null)
const ctaMotionOn = ref(false)
let ctaMotionTimer: ReturnType<typeof setTimeout> | null = null
let ctaObserver: IntersectionObserver | null = null
let ctaMotionScheduled = false

/** Intersection 후 이 시간만큼 기다렸다가 제목 → 리스트 순차 모션 */
const MOTION_START_MS = 420
const MOTION_STEP_S = 0.14

const CTA_MOTION_START_MS = 420
/** 카드가 펼쳐진 뒤 제목 → 본문 → 버튼 */
const CTA_CONTENT_BASE_S = 0.32
const CTA_CONTENT_STEP_S = 0.16

const strengths = [
  '피부과 분야에 특화된 중국 마케팅 운영 경험',
  '중국 현지 SNS 플랫폼별 콘텐츠 전략',
  '병원 특성에 맞는 인플루언서 매칭',
  '기획부터 실행, 결과 보고까지 통합 관리',
]

function motionStepStyle(step: number) {
  return {
    transitionDelay: `${step * MOTION_STEP_S}s`,
  }
}

function ctaStepStyle(step: number) {
  return {
    transitionDelay: `${CTA_CONTENT_BASE_S + step * CTA_CONTENT_STEP_S}s`,
  }
}

function scheduleCtaMotion() {
  if (ctaMotionScheduled) return
  ctaMotionScheduled = true
  ctaObserver?.disconnect()
  ctaMotionTimer = setTimeout(() => {
    ctaMotionOn.value = true
  }, CTA_MOTION_START_MS)
}

function bindCtaMotion(el: HTMLElement) {
  ctaObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) {
        scheduleCtaMotion()
      }
    },
    {
      threshold: 0.06,
      rootMargin: '0px 0px 8% 0px',
    },
  )
  ctaObserver.observe(el)

  const rect = el.getBoundingClientRect()
  const viewHeight = window.innerHeight || document.documentElement.clientHeight
  if (rect.top < viewHeight * 0.94 && rect.bottom > viewHeight * 0.06) {
    scheduleCtaMotion()
  }
}

onMounted(() => {
  if (strengthBlockRoot.value) {
    strengthObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          strengthMotionTimer = setTimeout(() => {
            strengthMotionOn.value = true
          }, MOTION_START_MS)
          strengthObserver?.disconnect()
        }
      },
      {
        threshold: 0.28,
        rootMargin: '0px 0px -10% 0px',
      },
    )
    strengthObserver.observe(strengthBlockRoot.value)
  }

  if (ctaRoot.value) {
    bindCtaMotion(ctaRoot.value)
  }
})

onBeforeUnmount(() => {
  strengthObserver?.disconnect()
  ctaObserver?.disconnect()
  if (strengthMotionTimer) clearTimeout(strengthMotionTimer)
  if (ctaMotionTimer) clearTimeout(ctaMotionTimer)
})
</script>

<template>
  <section id="home-strength" class="strength">
    <div class="strength__inner">
      <div
        ref="strengthBlockRoot"
        class="strength__block"
        :class="{ 'strength__block--motion': strengthMotionOn }"
      >
        <h2 class="strength__heading strength__motion-step" :style="motionStepStyle(0)">
          에비온컴퍼니의 경쟁력
        </h2>
        <ul class="strength__list">
          <li
            v-for="(item, index) in strengths"
            :key="item"
            class="strength__list-item strength__motion-step strength__motion-step--slide"
            :style="motionStepStyle(index + 1)"
          >
            {{ item }}
          </li>
        </ul>
      </div>

      <div
        ref="ctaRoot"
        class="strength__cta"
        :class="{ 'strength__cta--motion': ctaMotionOn }"
      >
        <h3 class="strength__cta__title" :style="ctaStepStyle(0)">
          중국 시장 진출, 어디서부터 시작할지 고민이라면.
        </h3>
        <p class="strength__cta__copy" :style="ctaStepStyle(1)">
          병원의 목표와 상황에 맞는 중국 마케팅 방향을 함께 설계합니다.
        </p>
        <RouterLink class="btn btn-primary strength__cta__btn" :style="ctaStepStyle(2)" to="/contact">
          에비온컴퍼니 상담 문의
        </RouterLink>
      </div>
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

.strength__motion-step {
  opacity: 0;
  transform: translateY(18px);
  transition:
    opacity 0.65s var(--ease),
    transform 0.65s var(--ease);
}

.strength__motion-step--slide {
  transform: translateX(-12px);
}

.strength__block--motion .strength__motion-step,
.strength__block--motion .strength__motion-step--slide {
  opacity: 1;
  transform: none;
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
  position: relative;
  margin-top: 64px;
  padding: clamp(40px, 5vw, 56px) clamp(32px, 5vw, 64px) clamp(44px, 5vw, 60px);
  background-color: var(--navy);
  color: var(--white);
  border-radius: var(--radius);
  overflow: hidden;
  isolation: isolate;
  opacity: 0;
  transform: translateY(28px) scale(0.985);
  transition:
    opacity 0.65s var(--ease),
    transform 0.85s cubic-bezier(0.22, 1, 0.36, 1);
}

.strength__cta--motion {
  opacity: 1;
  transform: none;
}

.strength__cta::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 0;
  background-image:
    linear-gradient(rgba(23, 42, 67, 0.84), rgba(23, 42, 67, 0.92)), v-bind(ctaBackgroundImage);
  background-size: cover;
  background-position: center 20%;
  transform: scale(1.14);
  transition: transform 1.35s cubic-bezier(0.22, 1, 0.36, 1);
}

.strength__cta--motion::before {
  transform: scale(1);
}

.strength__cta__title,
.strength__cta__copy,
.strength__cta__btn {
  position: relative;
  z-index: 1;
}

.strength__cta__title {
  font-size: clamp(24px, 3vw, 34px);
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: 0.05em;
  opacity: 0;
  transition:
    opacity 0.75s var(--ease),
    letter-spacing 0.9s cubic-bezier(0.22, 1, 0.36, 1);
}

.strength__cta--motion .strength__cta__title {
  opacity: 1;
  letter-spacing: -0.03em;
}

.strength__cta__copy {
  margin-top: 14px;
  max-width: 520px;
  color: rgba(255, 255, 255, 0.78);
  font-size: 16px;
  line-height: 1.75;
  opacity: 0;
  filter: blur(10px);
  transform: translateY(10px);
  transition:
    opacity 0.8s var(--ease),
    filter 0.85s var(--ease),
    transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}

.strength__cta--motion .strength__cta__copy {
  opacity: 1;
  filter: blur(0);
  transform: none;
}

.strength__cta__btn {
  display: inline-flex;
  margin-top: 32px;
  opacity: 0;
  transform: scale(0.86);
  box-shadow: 0 4px 12px rgba(242, 138, 50, 0);
  transition:
    opacity 0.55s var(--ease),
    transform 0.6s cubic-bezier(0.34, 1.45, 0.64, 1),
    box-shadow 0.65s var(--ease);
}

.strength__cta--motion .strength__cta__btn {
  opacity: 1;
  transform: scale(1);
  box-shadow: 0 8px 24px rgba(242, 138, 50, 0.28);
}

@media (prefers-reduced-motion: reduce) {
  .strength__motion-step,
  .strength__motion-step--slide {
    opacity: 1;
    transform: none;
    transition: none;
  }

  .strength__cta {
    opacity: 1;
    transform: none;
    transition: none;
  }

  .strength__cta::before {
    transform: none;
    transition: none;
  }

  .strength__cta__title,
  .strength__cta__copy,
  .strength__cta__btn {
    opacity: 1;
    letter-spacing: -0.03em;
    filter: none;
    transform: none;
    transition: none;
    box-shadow: 0 8px 24px rgba(242, 138, 50, 0.28);
  }
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
