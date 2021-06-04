<template>
  <div class="header">
    <header>
      <a href="/" class="logo"><img src="../assets/logo_rl.jpg" class="logo"></a>
      <ul id="nav">
        <li><router-link to="/">Home</router-link></li>
        <li>
          <router-link to="/moves">Moves</router-link>
          <ul v-if="$store.state.admin" class="under_menu">
            <li><router-link to="/addmove">Add new move</router-link></li>
          </ul>
        </li>
        <li>
          <router-link to="/items">Items</router-link>
          <ul v-if="$store.state.admin" class="under_menu">
            <li><router-link to="/additem">Add new item</router-link></li>
          </ul>
        </li>
        <li><router-link to="/workshop">Workshop</router-link>
          <ul v-if="$store.state.admin" class="under_menu">
            <li><router-link to="/addworkshop">Add new map</router-link></li>
          </ul>
        </li>
        <li><router-link to="/twitch">Twitch</router-link></li>
      </ul>
    </header>
  </div>
</template>

<script>

export default {
  name: "HeaderComponent",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

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

.under_menu{
  display: block;
  box-shadow: 5px 10px 20px #aaa;
  z-index : 1000;
  position : absolute;
  margin-top: 2px;
  top: -10000%;
  transition: top 0.05s step-end;
  padding: 3px;
  //background: rgba(55,55,55,0.8);
  //opacity: 0.5;
  border-radius: 5px;
}

ul li:hover .under_menu{
  //display : block;
  top: 65%;
  transition: none;
}

ul li:hover .under_menu::before{
  content: '';
  position: absolute;
  background: #ccc;
  width: 10px;
  height: 10px;
  transform: rotate(45deg); 
  top: -2px;
  right: 50%;
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