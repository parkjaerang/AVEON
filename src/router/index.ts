import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ServicesView from '@/views/ServicesView.vue'
import InfluencerView from '@/views/InfluencerView.vue'
import PortfolioView from '@/views/PortfolioView.vue'
import ContactView from '@/views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView, meta: { title: 'AVEON COMPANY | 에비온컴퍼니' } },
    { path: '/about', name: 'about', component: AboutView, meta: { title: 'ABOUT | AVEON COMPANY' } },
    { path: '/services', name: 'services', component: ServicesView, meta: { title: 'SERVICES | AVEON COMPANY' } },
    {
      path: '/influencer',
      name: 'influencer',
      component: InfluencerView,
      meta: { title: 'INFLUENCER NETWORK | AVEON COMPANY' },
    },
    { path: '/portfolio', name: 'portfolio', component: PortfolioView, meta: { title: 'PORTFOLIO | AVEON COMPANY' } },
    { path: '/contact', name: 'contact', component: ContactView, meta: { title: 'CONTACT · 상담 문의 | AVEON COMPANY' } },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

router.afterEach((to) => {
  document.title = (to.meta.title as string) || 'AVEON COMPANY | 에비온컴퍼니'
})

export default router
