<template>
  <div class="twitch-container">
    <TwitchComponent/>
  </div>
</template>


<script>
import TwitchComponent from '../components/TwitchComponent.vue'

export default {
  name: 'App',
  components: {
    TwitchComponent
  },

  
}
</script>

<style scoped lang="scss">
.twitch-container{
    width: 100%;
}

</style>