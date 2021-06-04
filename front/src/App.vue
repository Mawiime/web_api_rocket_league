<template>
  <div id="app">
    <section>
    <HeaderComponent/>
    <transition
      :delay = "200"
      mode="out-in"
      name="custom-classes-transition"
      enter-active-class="animated fadeInRight"
      leave-active-class="animated fadeOutLeft"
    >
    <router-view class="view"/>
    </transition>
    </section>
  </div>
</template>


<script>
import HeaderComponent from './components/HeaderComponent.vue';

export default {
  name: 'App',
    components: {
      HeaderComponent
  }
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap');

:root {
  --main-color: #283bb4;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

.page{
  width: 100%;
}

section{
    position: relative;
    width: 100%;
    min-height: 100vh;
    padding: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    background-image: linear-gradient(112.5deg, rgb(255,255,255) 0%, 
    rgb(255,255,255) 10%,rgb(255,255,255) 10%, 
    rgb(195, 195, 195) 53%,rgb(176, 176, 176) 53%, 
    rgb(176, 176, 176) 55%,rgb(157, 157, 157) 55%, rgb(157, 157, 157) 60%,
    rgb(137, 137, 137) 60%, rgb(137, 137, 137) 88%,rgb(118, 118, 118) 88%, 
    rgb(118, 118, 118) 91%,rgb(99, 99, 99) 91%, rgb(99, 99, 99) 100%),
    linear-gradient(157.5deg, rgb(255,255,255) 0%, 
    rgb(255,255,255) 10%,rgb(255,255,255) 10%, 
    rgb(195, 195, 195) 53%,rgb(176, 176, 176) 53%, 
    rgb(176, 176, 176) 55%,rgb(157, 157, 157) 55%, 
    rgb(157, 157, 157) 60%,rgb(137, 137, 137) 60%, 
    rgb(137, 137, 137) 88%,rgb(118, 118, 118) 88%, 
    rgb(118, 118, 118) 91%,rgb(99, 99, 99) 91%, rgb(99, 99, 99) 100%),
    linear-gradient(135deg, rgb(255,255,255) 0%, 
    rgb(255,255,255) 10%,rgb(255,255,255) 10%, rgb(195, 195, 195) 53%,
    rgb(176, 176, 176) 53%, rgb(176, 176, 176) 55%,rgb(157, 157, 157) 55%, 
    rgb(157, 157, 157) 60%,rgb(137, 137, 137) 60%, rgb(137, 137, 137) 88%,rgb(118, 118, 118) 88%, 
    rgb(118, 118, 118) 91%,rgb(99, 99, 99) 91%, rgb(99, 99, 99) 100%),
    linear-gradient(90deg, rgb(195, 195, 195),rgb(228, 228, 228)); 
    background-blend-mode:overlay,overlay,overlay,normal;
}


h1{
  text-align: center;
  font-size: 50px;
  padding-bottom: 20px;
  border-bottom: 5px solid var(--main-color);
  border-radius: 5px;
  display: block;
  font-weight: 600;
  width: 350px;
  margin: 20px auto 70px auto !important;
  color: #333;
}

</style>
