<template>
  <div id="app">
    <section>
    <header>
      <a href="#" class="logo"><img src="./assets/logo_rl.jpg" class="logo"></a>
      <ul id="nav">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/moves">Moves</router-link></li>
        <li><router-link to="/items">Items</router-link></li>
      </ul>
    </header>
    <router-view/>
    </section>
  </div>
</template>

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


section{
    position: relative;
    width: 100%;
    min-height: 100vh;
    padding: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
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
    margin-left: 40px;
    text-decoration: none;

    &.router-link-exact-active {
      background: var(--main-color);
      color: #fff;
      padding: 8px 20px;
      border-radius: 40px;
    }
  }
}
</style>
