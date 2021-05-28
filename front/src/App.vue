<template>
  <div id="app">
    <section>
    <header>
      <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons">
 
      <a href="/" class="logo"><img src="./assets/logo_rl.jpg" class="logo"></a>
      <ul id="nav">
        <li><router-link to="/">Home</router-link></li>
        <li>
          <router-link to="/moves">Moves</router-link>
          <ul class="under_menu">
            <li><router-link to="/addmove">Add new move</router-link></li>
          </ul>
        </li>
        <li>
          <router-link to="/items">Items</router-link>
          <ul class="under_menu">
            <li><router-link to="/additem">Add new item</router-link></li>
          </ul>
        </li>
        <li><router-link to="/workshop">Workshop</router-link>
          <ul class="under_menu">
            <li><router-link to="/addworkshop">Add new map</router-link></li>
          </ul>
        </li>
        <li><router-link to="/twitch">Twitch</router-link></li>
      </ul>
    </header>
    <router-view/>
    </section>
  </div>
</template>


<script>
export default {
  name: 'App',
    components: {
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

header{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

header .logo{
    position: relative;
    max-width: 80px;
}

header ul{
    position: relative;
    display: flex;
    align-items: center;
}

header ul li{
    list-style: none;
}

header ul li a{
    display: inline-block;
    color: #333;
    font-weight: 400;
    margin-left: 40px;
    text-decoration: none;
}


#nav {
  padding: 30px;

  a {
    display: inline-block;
    color: #333;
    font-weight: 400;
    text-decoration: none;

    &.router-link-exact-active {
      background: var(--main-color);
      color: #fff;
      padding: 8px 20px;
      border-radius: 40px;
    }
  }
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

.under_menu{
  display: block;
  box-shadow: 0px 1px 2px #aaa;
  z-index : 1000;
  position : absolute;
  margin-top: 3px;
  top: -10000%;
  transition: top 0.2s step-end;
  padding: 3px;
  background: rgba(55,55,55,0.8);
  opacity: 0.5;
  border-radius: 5px;
}

ul li:hover .under_menu{
  //display : block;
  top: 80%;
  transition: none;
}

ul li:hover .under_menu::before{
  content: '';
  position: absolute;
  background: #999;
  width: 20px;
  height: 20px;
  transform: rotate(45deg); 
  top: -6px;
  right: 55px;
  z-index: -1;
}

.under_menu li {
  float : none;
  text-align: center;
  font-size: 16px;
  background: #fff;
  border-radius: 5px;
  a{
    margin: 0;
    padding: 8px 12px;
  }
}

.under_menu li:not(:first-child){
  border-top: 1px solid #bbb;
}

.under_menu li:hover{
  background-color: var(--main-color);
  color: #fff;
  opacity: 0.9;
}

.under_menu li:hover a{
  color: #fff !important;
}

</style>
