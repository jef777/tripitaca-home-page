<template>
  <div>
    <layout>
      <WhyUs />
    </layout>
  </div>
</template>

<script>
import Layout from '@/layout/Layout.vue'
import WhyUs from './views/WhyUs.vue'
export default {
  name: 'App',
  components: {
    Layout,
    WhyUs,
  },
}
</script>
