<template>
  <div class="moves-container page">
    <MovesComponent/>
  </div>
</template>


<script>
import MovesComponent from '../components/MovesComponent.vue'

export default {
  name: 'App',
  components: {
    MovesComponent
  }
}
</script>

<style scoped lang="scss">
.moves-container{
    width: 100%;
}

</style>