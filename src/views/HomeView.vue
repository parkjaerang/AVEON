<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import HomeServicesOverview from '@/components/HomeServicesOverview.vue'
import HomePlatformsSection from '@/components/HomePlatformsSection.vue'
import HomeStrengthSection from '@/components/HomeStrengthSection.vue'
</script>

<template>
  <main class="home">
    <div class="home__hero-pin">
      <HeroSection />
    </div>
    <div class="home__sheet">
      <HomeServicesOverview />
      <HomePlatformsSection />
      <HomeStrengthSection />
    </div>
  </main>
</template>

<style scoped>
.home {
  isolation: isolate;
}

.home__hero-pin {
  position: sticky;
  top: 0;
  z-index: 1;
}

.home__sheet {
  position: relative;
  z-index: 2;
  background: var(--white);
  box-shadow: 0 -24px 48px rgba(23, 42, 67, 0.16);
}

@media (prefers-reduced-motion: reduce) {
  .home__hero-pin {
    position: static;
  }

  .home__sheet {
    box-shadow: none;
  }
}
</style>
