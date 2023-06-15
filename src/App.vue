<template>
  <div class="c-container">
    <BarraLateral />
    <router-view />
  </div>
</template>

<script>
import BarraLateral from './components/BarraLateral.vue'

export default {
  name: 'App',
  components: { BarraLateral,}
}
</script>

<style scoped>
.c-container {
  display: flex;
  min-height: 100vh;
}
</style>



