<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <HelloWorld msg="Vite + Vue" />
</template>

<script>
export default {
  name: 'App',

  methods: {
    getPackages() {
      console.log('call getPackages')
      this.$store.dispatch('packages/get_packages', 3).then((res) => {
        console.log('res', res)
      })
    },
  },
  mounted() {
    this.getPackages()
  },
}
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
