<template>
  <div class="admin">
    <button v-on:click="admin">Deviens un admin</button>
    {{$store.state.admin}}
  </div>
</template>

<script>
export default {
  name: 'Admin',
  methods: {
      admin(){
         this.$store.dispatch('toggle_admin')
      }
  }
}
</script>