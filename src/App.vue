<template>
  <div>
    <layout>
      <WhyUs />
      <Packages />
    </layout>
  </div>
</template>

<script>
import Layout from '@/layout/Layout.vue'
import WhyUs from './views/WhyUs.vue'
import Packages from './views/Packages.vue'
export default {
  name: 'App',
  components: {
    Layout,
    WhyUs,
    Packages,
  },
}
</script>
