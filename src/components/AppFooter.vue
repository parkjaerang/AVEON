<script setup lang="ts">
import { ArrowUpRight, Clock, Mail } from 'lucide-vue-next'
import ScrollReveal from '@/components/ScrollReveal.vue'
import logoUrl from '@/assets/images/aveon-logo-inverted.png'
import type { NavItem } from '@/types'

const navItems: NavItem[] = [
  { id: 'home', label: 'HOME', to: '/' },
  { id: 'about', label: 'ABOUT', to: '/about' },
  { id: 'services', label: 'SERVICES', to: '/services' },
  { id: 'influencer', label: 'INFLUENCER', to: '/influencer' },
  { id: 'portfolio', label: 'PORTFOLIO', to: '/portfolio' },
  { id: 'contact', label: 'CONTACT', to: '/contact' },
]

const contactEmail = 'contact@aveoncompany.co.kr'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <ScrollReveal class="footer__shell" :threshold="0.06">
      <div class="footer__mast reveal-item">
        <RouterLink class="footer__logo" to="/" aria-label="AVEON COMPANY 홈">
          <img :src="logoUrl" alt="AVEON COMPANY" width="148" height="32" />
        </RouterLink>
        <p class="footer__tagline">
          한국 피부과·뷰티 기업의 중국 시장 진출을 위한 마케팅 파트너입니다.<br />
          중국 SNS 운영, 인플루언서 협업, 콘텐츠 실행까지 한 흐름으로 지원합니다.
        </p>
      </div>

      <div class="footer__grid reveal-item" style="transition-delay: 0.07s">
        <div class="footer__col">
          <p class="footer__col-title">Menu</p>
          <nav class="footer__menu" aria-label="푸터 메뉴">
            <RouterLink v-for="item in navItems" :key="item.id" :to="item.to">
              {{ item.label }}
            </RouterLink>
          </nav>
        </div>

        <div class="footer__col">
          <p class="footer__col-title">Company</p>
          <ul class="footer__facts">
            <li><span>상호</span> 에비온컴퍼니</li>
            <li><span>사업 분야</span> 피부과·뷰티 중국 디지털 마케팅</li>
          </ul>
        </div>

        <aside class="footer__col footer__col--contact">
          <p class="footer__col-title">Contact</p>
          <div class="footer__contact-card">
            <a class="footer__email" :href="`mailto:${contactEmail}`">
              <Mail class="footer__icon" aria-hidden="true" :size="20" :stroke-width="1.75" />
              <span>{{ contactEmail }}</span>
              <ArrowUpRight class="footer__email-arrow" aria-hidden="true" :size="16" />
            </a>
            <p class="footer__hours">
              <Clock class="footer__icon" aria-hidden="true" :size="16" :stroke-width="1.75" />
              평일 10:00 – 18:00 · 주말·공휴일 휴무
            </p>
            <RouterLink class="footer__cta" to="/contact">마케팅 상담 신청</RouterLink>
          </div>
        </aside>
      </div>

      <div class="footer__meta reveal-item" style="transition-delay: 0.12s">
        <p class="footer__copy">
          Copyright © {{ year }} AVEON COMPANY · 에비온컴퍼니. All rights reserved.
        </p>
        <div class="footer__legal">
          <span>서비스 이용약관 (예시)</span>
          <span>개인정보 처리방침 (예시)</span>
        </div>
      </div>
    </ScrollReveal>
  </footer>
</template>

<style scoped>
.footer {
  background: #0c1219;
  color: rgba(255, 255, 255, 0.62);
}

.footer__shell {
  width: min(var(--content-w), calc(100% - 48px));
  margin: 0 auto;
  padding: 48px 0 28px;
}

.footer__mast {
  padding-bottom: 36px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer__logo {
  display: inline-block;
}

.footer__logo img {
  width: auto;
  height: clamp(26px, 3.2vw, 34px);
  object-fit: contain;
}

.footer__tagline {
  margin-top: 18px;
  max-width: 640px;
  font-size: 15px;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.7);
}

.footer__grid {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1fr) minmax(0, 1.15fr);
  gap: clamp(28px, 4vw, 48px);
  padding: 36px 0 32px;
}

.footer__col-title {
  margin-bottom: 16px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--orange);
}

.footer__menu {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}

.footer__menu a {
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.82);
  transition: color 0.2s ease, transform 0.2s var(--ease);
}

.footer__menu a:hover {
  color: var(--white);
  transform: translateX(3px);
}

.footer__facts {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 14px;
  font-size: 14px;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.78);
}

.footer__facts li {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.footer__facts span {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.06em;
  color: rgba(255, 255, 255, 0.42);
}

.footer__contact-card {
  padding: 20px 20px 22px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius);
}

.footer__email {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 600;
  color: var(--white);
  transition: color 0.2s ease;
}

.footer__email:hover {
  color: var(--orange);
}

.footer__email span {
  flex: 1;
  min-width: 0;
  word-break: break-all;
}

.footer__email-arrow {
  flex-shrink: 0;
  opacity: 0.5;
}

.footer__hours {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-top: 14px;
  font-size: 13px;
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.55);
}

.footer__icon {
  flex-shrink: 0;
  color: var(--orange);
}

.footer__hours .footer__icon {
  margin-top: 1px;
}

.footer__cta {
  display: inline-flex;
  margin-top: 18px;
  padding: 11px 18px;
  width: 100%;
  justify-content: center;
  border-radius: var(--radius);
  background: var(--orange);
  color: var(--white);
  font-size: 14px;
  font-weight: 700;
  transition: filter 0.2s ease, transform 0.2s var(--ease);
}

.footer__cta:hover {
  filter: brightness(1.06);
  transform: translateY(-1px);
}

.footer__meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px 20px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.footer__copy {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.42);
}

.footer__legal {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.38);
}

.footer__legal span {
  cursor: default;
}

@media (max-width: 900px) {
  .footer__grid {
    grid-template-columns: 1fr 1fr;
  }

  .footer__col--contact {
    grid-column: 1 / -1;
  }
}

@media (max-width: 640px) {
  .footer__shell {
    width: min(var(--content-w), calc(100% - 40px));
    padding: 40px 0 24px;
  }

  .footer__grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .footer__meta {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
