<template>
  <div class="admin">
    <button v-on:click="admin">Test</button>
    {{$store.state.admin}}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
      admin(){
         this.$store.dispatch('toggle_admin')
      }
  }
}
</script>