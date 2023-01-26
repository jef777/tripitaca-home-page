<template>
  <Header />
  <div class="app-body"></div>
  <slot />
  <Footer />
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
  name: 'Layout',
  components: {
    Header,
    Footer,
  },
}
</script>
<style scoped>
.app-body {
  min-height: 9vh;
}
</style>
