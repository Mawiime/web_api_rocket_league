<template>
  <div class="items page">
    <ItemsComponent />
  </div>
</template>

<script>
import ItemsComponent from '../components/ItemsComponent.vue'

export default {
  name: 'App',
  components: {
    ItemsComponent
  }
}
</script>
