<template>
  <div>
    <layout>
      <WhyUs />
      <Packages />
      <Destinations />
    </layout>
  </div>
</template>

<script>
import Layout from '@/layout/Layout.vue'
import WhyUs from './views/WhyUs.vue'
import Packages from './views/Packages.vue'
import Destinations from './views/Destinations.vue'
export default {
  name: 'App',
  components: {
    Layout,
    WhyUs,
    Packages,
    Destinations,
  },
}
</script>
