<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    label: string
    title: string
    lead: string
    ctaLabel?: string
    ctaTo?: string
    image?: string
    imageAlt?: string
    badge?: string
    marqueeItems?: string[]
    compact?: boolean
  }>(),
  {
    ctaLabel: undefined,
    ctaTo: '/contact',
    image: undefined,
    imageAlt: '',
    badge: 'AVEON',
    marqueeItems: () => [],
    compact: false,
  },
)

const heroReady = ref(false)

const showVisual = computed(() => !props.compact && Boolean(props.image))
const showMarquee = computed(() => props.marqueeItems.length > 0)

onMounted(() => {
  requestAnimationFrame(() => {
    heroReady.value = true
  })
})
</script>

<template>
  <div
    class="page-hero"
    :class="{ 'is-ready': heroReady, 'page-hero--compact': compact, 'page-hero--visual': showVisual }"
  >
    <div class="page-hero__bg" aria-hidden="true">
      <span class="page-hero__orb page-hero__orb--1" />
      <span class="page-hero__orb page-hero__orb--2" />
    </div>

    <div class="page-hero__shell">
      <div class="page-hero__grid">
        <header class="page-hero__head">
          <p class="page-hero__label">{{ label }}</p>
          <h1>{{ title }}</h1>
          <p class="page-hero__lead" v-html="lead" />
          <RouterLink v-if="ctaLabel" class="btn btn-primary page-hero__cta" :to="ctaTo ?? '/contact'">
            {{ ctaLabel }}
          </RouterLink>
        </header>

        <figure v-if="showVisual" class="page-hero__visual">
          <img :src="image" :alt="imageAlt" loading="eager" />
          <div v-if="badge" class="page-hero__badge">
            <span class="page-hero__pulse" />
            {{ badge }}
          </div>
        </figure>
      </div>
    </div>

    <div v-if="showMarquee" class="page-hero__marquee" aria-hidden="true">
      <div class="page-hero__marquee-track">
        <span v-for="(item, i) in [...marqueeItems, ...marqueeItems]" :key="`${item}-${i}`">
          {{ item }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-hero {
  position: relative;
  background: var(--navy);
  color: var(--white);
  overflow: hidden;
}

.page-hero__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.page-hero__orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.35;
  animation: page-hero-orb 14s var(--ease) infinite alternate;
}

.page-hero__orb--1 {
  top: -10%;
  right: 10%;
  width: min(420px, 55vw);
  height: min(420px, 55vw);
  background: rgba(242, 138, 50, 0.45);
}

.page-hero__orb--2 {
  bottom: -20%;
  left: -5%;
  width: min(360px, 48vw);
  height: min(360px, 48vw);
  background: rgba(100, 149, 237, 0.35);
  animation-delay: -6s;
}

.page-hero__shell {
  position: relative;
  z-index: 1;
  width: min(var(--content-w), calc(100% - 64px));
  margin: 0 auto;
  padding: 56px 0 48px;
}

.page-hero--compact .page-hero__shell {
  padding: 48px 0 40px;
}

.page-hero__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  align-items: center;
}

.page-hero--visual .page-hero__grid {
  grid-template-columns: 1.05fr 0.95fr;
  gap: 40px;
}

.page-hero__head {
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.75s var(--ease),
    transform 0.75s var(--ease);
}

.page-hero.is-ready .page-hero__head {
  opacity: 1;
  transform: none;
}

.page-hero__label {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: var(--orange);
}

.page-hero__head h1 {
  margin-top: 14px;
  font-size: clamp(28px, 3.4vw, 40px);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.28;
}

.page-hero__lead {
  margin-top: 18px;
  max-width: 620px;
  color: rgba(255, 255, 255, 0.72);
  font-size: 16px;
  line-height: 1.8;
}

.page-hero__cta {
  margin-top: 28px;
}

.page-hero__visual {
  position: relative;
  margin: 0;
  overflow: hidden;
  border-radius: var(--radius);
  aspect-ratio: 4 / 5;
  max-height: 420px;
  opacity: 0;
  transform: translateX(24px) scale(0.98);
  transition:
    opacity 0.85s var(--ease) 0.12s,
    transform 0.85s var(--ease) 0.12s;
}

.page-hero.is-ready .page-hero__visual {
  opacity: 1;
  transform: none;
}

.page-hero__visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: var(--media-focus);
  transition: transform 0.8s var(--ease);
}

.page-hero__visual:hover img {
  transform: scale(1.02);
}

.page-hero__badge {
  position: absolute;
  left: 16px;
  bottom: 16px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(23, 42, 67, 0.82);
  backdrop-filter: blur(8px);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
}

.page-hero__pulse {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #4ade80;
  box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.6);
  animation: page-hero-pulse 2s ease-out infinite;
}

.page-hero__marquee {
  position: relative;
  z-index: 1;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 14px 0;
  mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
}

.page-hero__marquee-track {
  display: flex;
  gap: 48px;
  width: max-content;
  animation: page-hero-marquee 28s linear infinite;
}

.page-hero__marquee-track span {
  flex-shrink: 0;
  color: rgba(255, 255, 255, 0.45);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.page-hero__marquee-track span::after {
  margin-left: 48px;
  color: var(--orange);
  content: '·';
}

@keyframes page-hero-orb {
  from {
    transform: translate(0, 0) scale(1);
  }
  to {
    transform: translate(24px, -18px) scale(1.08);
  }
}

@keyframes page-hero-marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@keyframes page-hero-pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.55);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(74, 222, 128, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(74, 222, 128, 0);
  }
}

@media (max-width: 900px) {
  .page-hero--visual .page-hero__grid {
    grid-template-columns: 1fr;
  }

  .page-hero__visual {
    max-height: 320px;
    aspect-ratio: 16 / 10;
  }
}

@media (max-width: 768px) {
  .page-hero__shell {
    width: min(var(--content-w), calc(100% - 40px));
    padding: 40px 0 36px;
  }

  .page-hero__lead :deep(br) {
    display: none;
  }

  .page-hero__marquee-track {
    animation-duration: 22s;
  }
}

@media (prefers-reduced-motion: reduce) {
  .page-hero__marquee-track {
    animation: none;
  }

  .page-hero__orb {
    animation: none;
  }

  .page-hero__pulse {
    animation: none;
  }
}
</style>
