<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { Menu, X } from 'lucide-vue-next'
import { useRoute } from 'vue-router'
import type { NavItem } from '@/types'
import logoUrl from '@/assets/images/aveon-logo.png'

const route = useRoute()

const navItems: NavItem[] = [
  { id: 'home', label: 'HOME', to: '/' },
  { id: 'about', label: 'ABOUT', to: '/about' },
  { id: 'services', label: 'SERVICES', to: '/services' },
  { id: 'influencer', label: 'INFLUENCER NETWORK', to: '/influencer' },
  { id: 'portfolio', label: 'PORTFOLIO', to: '/portfolio' },
  { id: 'contact', label: 'CONTACT', to: '/contact' },
]

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const headerClass = computed(() => ({
  'is-scrolled': isScrolled.value,
  'is-open': isMenuOpen.value,
}))

const onScroll = () => {
  isScrolled.value = window.scrollY > 8
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const isNavActive = (to: string) => {
  if (to === '/') {
    return route.path === '/'
  }
  return route.path === to
}

watch(
  () => route.path,
  () => {
    closeMenu()
  },
)

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <header class="header" :class="headerClass">
    <div class="header__inner">
      <RouterLink class="logo" to="/" @click="closeMenu" aria-label="AVEON COMPANY">
        <img :src="logoUrl" alt="AVEON COMPANY" />
      </RouterLink>

      <nav class="nav" aria-label="주요 메뉴">
        <template v-for="item in navItems" :key="item.id">
          <span
            v-if="item.disabled"
            class="nav__link is-disabled"
            aria-disabled="true"
          >
            {{ item.label }}
          </span>
          <RouterLink
            v-else
            class="nav__link"
            :class="{ 'is-active': isNavActive(item.to) }"
            :to="item.to"
            :aria-current="isNavActive(item.to) ? 'page' : undefined"
          >
            {{ item.label }}
          </RouterLink>
        </template>
      </nav>

      <div class="header__actions">
        <RouterLink class="header__cta" to="/contact">상담 문의</RouterLink>
        <button
          class="menu-btn"
          type="button"
          :aria-expanded="isMenuOpen"
          aria-label="메뉴 열기"
          @click="toggleMenu"
        >
          <X v-if="isMenuOpen" :size="20" :stroke-width="1.8" />
          <Menu v-else :size="20" :stroke-width="1.8" />
        </button>
      </div>
    </div>

    <div class="mobile" :class="{ 'is-open': isMenuOpen }">
      <nav class="mobile__nav">
        <template v-for="item in navItems" :key="item.id">
          <span
            v-if="item.disabled"
            class="mobile__link is-disabled"
            aria-disabled="true"
          >
            {{ item.label }}
          </span>
          <RouterLink
            v-else
            class="mobile__link"
            :class="{ 'is-active': isNavActive(item.to) }"
            :to="item.to"
            :aria-current="isNavActive(item.to) ? 'page' : undefined"
            @click="closeMenu"
          >
            {{ item.label }}
          </RouterLink>
        </template>
      </nav>
      <RouterLink class="btn btn-primary mobile__cta" to="/contact" @click="closeMenu">
        마케팅 상담 신청
      </RouterLink>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  inset: 0 0 auto;
  z-index: 50;
  background: rgba(255, 255, 255, 0.92);
  border-bottom: 1px solid transparent;
  backdrop-filter: blur(16px);
  transition: border-color 0.25s var(--ease), box-shadow 0.25s var(--ease);
}

.header.is-scrolled,
.header.is-open {
  border-bottom-color: #e8ebf0;
  box-shadow: 0 8px 24px rgba(23, 42, 67, 0.06);
}

.header__inner {
  display: flex;
  align-items: stretch;
  width: 100%;
  height: var(--header-h);
  padding: 0 clamp(16px, 3.5vw, 56px);
}

.logo {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  margin-right: 16px;
  align-self: center;
}

.logo img {
  display: block;
  height: 26px;
  width: auto;
  max-height: 26px;
}

.nav {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: clamp(6px, 1.2vw, 16px);
  min-width: 0;
  padding: 0 8px;
  height: 100%;
}

.nav__link {
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 0 8px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.03em;
  color: #6b7280;
  white-space: nowrap;
  transition:
    color 0.2s var(--ease),
    font-weight 0.2s var(--ease);
}

.nav__link:hover {
  color: var(--navy);
}

.nav__link.is-active {
  color: var(--navy);
  font-weight: 700;
}

.nav__link.is-active::after {
  content: '';
  position: absolute;
  left: 8px;
  right: 8px;
  bottom: 0;
  height: 3px;
  border-radius: 3px 3px 0 0;
  background: var(--orange);
}

.nav__link.is-disabled,
.mobile__link.is-disabled {
  cursor: default;
  opacity: 0.85;
}

.nav__link.is-disabled:hover,
.mobile__link.is-disabled:hover {
  color: #4b5563;
}

.header__actions {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
  margin-left: 16px;
  align-self: center;
}

.header__cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 36px;
  padding: 0 16px;
  border-radius: 999px;
  background: var(--navy);
  color: var(--white);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.02em;
  white-space: nowrap;
}

.header__cta:hover {
  background: var(--navy-2);
}

.menu-btn {
  display: none;
  width: 40px;
  height: 40px;
  border: 0;
  background: transparent;
  color: var(--navy);
}

.mobile {
  display: none;
}

@media (max-width: 1100px) {
  .nav,
  .header__cta {
    display: none;
  }

  .menu-btn {
    display: grid;
    place-items: center;
  }

  .header__inner {
    padding: 0 16px;
  }

  .logo {
    margin-right: 0;
  }

  .header__actions {
    margin-left: auto;
  }

  .logo img {
    height: 20px;
    max-height: 24px;
  }

  .mobile {
    display: block;
    max-height: 0;
    overflow: hidden;
    background: var(--white);
    transition: max-height 0.4s var(--ease);
  }

  .mobile.is-open {
    max-height: 480px;
    border-top: 1px solid #e8ebf0;
  }

  .mobile__nav {
    display: flex;
    flex-direction: column;
    padding: 8px 20px 12px;
  }

  .mobile__link {
    padding: 14px 12px 14px 16px;
    border-bottom: 1px solid #f0f2f5;
    font-size: 15px;
    font-weight: 600;
    color: #4b5563;
    border-left: 3px solid transparent;
    transition:
      color 0.2s var(--ease),
      background 0.2s var(--ease),
      border-color 0.2s var(--ease);
  }

  .mobile__link.is-active {
    color: var(--navy);
    font-weight: 700;
    border-left-color: var(--orange);
    background: rgba(242, 138, 50, 0.08);
  }

  .mobile__cta {
    width: calc(100% - 40px);
    margin: 16px 20px 24px;
  }
}
</style>
