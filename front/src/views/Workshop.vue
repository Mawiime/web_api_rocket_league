<template>
  <div class="workshop-container page">
    <WorkshopComponent/>
  </div>
</template>


<script>
import WorkshopComponent from '../components/WorkshopComponent.vue'

export default {
  name: 'App',
  components: {
    WorkshopComponent
  }
}
</script>

<style scoped lang="scss">
.workshop-container{
    width: 100%;
}

</style>