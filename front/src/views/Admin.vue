<template>
  <div class="admin page">
    <AdminComponent/>
  </div>
</template>

<script>
import AdminComponent from '../components/AdminComponent.vue'

export default {
  name: 'App',
  components: {
    AdminComponent
  }
}
</script>