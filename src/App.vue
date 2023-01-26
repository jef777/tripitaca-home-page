<template>
  <div>
    <layout>
      <Hero />
      <WhyUs />
      <Packages />
      <Destinations />
      <ListWithUs />
      <VideoDemo />
    </layout>
  </div>
</template>

<script>
import Layout from '@/layout/Layout.vue'
import WhyUs from './views/WhyUs.vue'
import Packages from './views/Packages.vue'
import Destinations from './views/Destinations.vue'
import ListWithUs from './views/ListWithUs.vue'
import VideoDemo from './views/VideoDemo.vue'
import Hero from './views/Hero.vue'
export default {
  name: 'App',
  components: {
    Layout,
    WhyUs,
    Packages,
    Destinations,
    ListWithUs,
    VideoDemo,
    Hero,
  },
}
</script>
