<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    threshold?: number
    rootMargin?: string
    tag?: string
    /** Animate the wrapper element itself (for cards, feature blocks). */
    self?: boolean
  }>(),
  {
    threshold: 0.12,
    rootMargin: '0px 0px -6% 0px',
    tag: 'div',
    self: false,
  },
)

const root = ref<HTMLElement | null>(null)
const visible = ref(false)
let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) {
        visible.value = true
        observer?.disconnect()
      }
    },
    {
      threshold: props.threshold,
      rootMargin: props.rootMargin,
    },
  )

  if (root.value) {
    observer.observe(root.value)
  }
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<template>
  <component
    :is="tag"
    ref="root"
    class="scroll-reveal"
    :class="{ 'is-visible': visible, 'scroll-reveal--self': self }"
  >
    <slot />
  </component>
</template>

<style scoped>
.scroll-reveal--self:not(.is-visible) {
  opacity: 0;
  transform: translateY(20px);
}

.scroll-reveal--self.is-visible {
  opacity: 1;
  transform: none;
}

.scroll-reveal--self {
  transition:
    opacity 0.65s var(--ease),
    transform 0.65s var(--ease);
}

.scroll-reveal:not(.is-visible) :deep(.reveal-item),
.scroll-reveal:not(.is-visible) :deep(.reveal-block) {
  opacity: 0;
  transform: translateY(18px);
}

.scroll-reveal:not(.is-visible) :deep(.reveal-item--slide) {
  transform: translateX(-12px);
}

.scroll-reveal.is-visible :deep(.reveal-item),
.scroll-reveal.is-visible :deep(.reveal-block),
.scroll-reveal.is-visible :deep(.reveal-item--slide) {
  opacity: 1;
  transform: none;
}

.scroll-reveal :deep(.reveal-item),
.scroll-reveal :deep(.reveal-block),
.scroll-reveal :deep(.reveal-item--slide) {
  transition:
    opacity 0.65s var(--ease),
    transform 0.65s var(--ease);
}

@media (prefers-reduced-motion: reduce) {
  .scroll-reveal--self:not(.is-visible) {
    opacity: 1;
    transform: none;
  }

  .scroll-reveal--self {
    transition: none;
  }

  .scroll-reveal:not(.is-visible) :deep(.reveal-item),
  .scroll-reveal:not(.is-visible) :deep(.reveal-block),
  .scroll-reveal:not(.is-visible) :deep(.reveal-item--slide) {
    opacity: 1;
    transform: none;
  }

  .scroll-reveal :deep(.reveal-item),
  .scroll-reveal :deep(.reveal-block),
  .scroll-reveal :deep(.reveal-item--slide) {
    transition: none;
  }
}
</style>
