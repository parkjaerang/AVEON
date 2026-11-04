<script setup lang="ts">
import ScrollReveal from '@/components/ScrollReveal.vue'
import imgXiaohongshu from '@/assets/images/xiaohongshu-com-logo.png'
import imgDouyin from '@/assets/images/douyin-com-logo.png'
import imgWechat from '@/assets/images/wechat-com-logo.png'

const platforms = [
  {
    name: '샤오홍슈 · 小红书',
    desc: '피부과 검색형 콘텐츠, 시술 정보, 방문 후기 및 체험 콘텐츠 전략',
    image: imgXiaohongshu,
    alt: '샤오홍슈(小红书) 로고',
  },
  {
    name: '더우인 · 抖音',
    desc: '숏폼 영상, 뷰티 콘텐츠 확산 및 잠재 고객 도달 전략',
    image: imgDouyin,
    alt: '더우인(抖音) 로고',
  },
  {
    name: '위챗 · 微信',
    desc: '상담 연결, 문의 응대 및 고객 커뮤니케이션 지원',
    image: imgWechat,
    alt: '위챗(微信) 로고',
  },
]
</script>

<template>
  <section id="home-platforms" class="platforms">
    <div class="platforms__inner">
      <ScrollReveal
        v-for="item in platforms"
        :key="item.name"
        tag="article"
        class="platform"
      >
        <figure class="platform__media">
          <img
            class="platform__image"
            :src="item.image"
            :alt="item.alt"
            loading="lazy"
          />
        </figure>
        <div class="platform__copy">
          <h2>{{ item.name }}</h2>
          <p>{{ item.desc }}</p>
        </div>
      </ScrollReveal>
    </div>
  </section>
</template>

<style scoped>
.platforms {
  background: var(--gray);
  scroll-margin-top: var(--header-h);
}

.platforms__inner {
  width: min(1120px, calc(100% - 64px));
  margin: 0 auto;
  padding: 88px 0 96px;
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.platform {
  display: grid;
  grid-template-columns: minmax(0, 440px) minmax(0, 1fr);
  gap: clamp(32px, 4vw, 52px);
  align-items: center;
}

.platform__media {
  position: relative;
  aspect-ratio: 16 / 10;
  width: 100%;
  margin: 0;
  overflow: hidden;
  border-radius: var(--radius);
  box-shadow: 0 1px 2px rgba(23, 42, 67, 0.04);
}

.platform__media img {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: var(--media-focus);
  will-change: transform;
}

.platform:not(.is-visible) .platform__image {
  transform: scale(1.12);
}

.platform.is-visible .platform__image {
  animation: platform-image-zoom 0.85s var(--ease) forwards;
}

@keyframes platform-image-zoom {
  0% {
    transform: scale(1.12);
  }
  100% {
    transform: scale(1);
  }
}

.platform__copy {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding-block: 8px;
  opacity: 0;
  transform: translateX(-32px);
  transition:
    opacity 0.7s var(--ease),
    transform 0.7s var(--ease);
  transition-delay: 0.12s;
}

.platform.is-visible .platform__copy {
  opacity: 1;
  transform: none;
}

.platform__copy h2 {
  font-size: clamp(22px, 2.6vw, 30px);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.35;
}

.platform__copy p {
  margin: 0;
  color: #4b5563;
  font-size: 16px;
  line-height: 1.75;
}

@media (max-width: 900px) {
  .platforms__inner {
    width: min(1120px, calc(100% - 40px));
    padding: 64px 0 72px;
    gap: 24px;
  }

  .platform {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .platform__copy {
    padding-block: 0 4px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .platform:not(.is-visible) .platform__image,
  .platform.is-visible .platform__image {
    transform: none;
    animation: none;
  }

  .platform__copy {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
</style>
