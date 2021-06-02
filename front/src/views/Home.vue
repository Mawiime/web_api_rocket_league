<template>
  <div class="home page">
    <div class="circle"></div>
    <div class="content">
      <div class="textBox">
        <h2>Welcome, in our new<br /><span>Rocket League API !</span></h2>
        <p>
          This API will give you access to useful information such as items,
          tutorials to understand moves, worshops maps. And even access to
          streamers currently streaming Rocket League on Twitch. It is
          undoubtedly the best tool to progress on Rocket League!
        </p>
        <!--<a href="#">Learn more</a>-->
      </div>

      <div class="imgBox">
        <img src="../assets/fond.png" class="illustration" />
      </div>
    </div>

    <ul class="sci">
      <li>
        <a
          href="https://github.com/Mawiime/web_api_rocket_league"
          target="_blank"
          ><img src="../assets/github.png" alt=""/>
        </a>
      </li>
      <li>
        <a
          href="https://www.twitch.tv/directory/game/Rocket%20League"
          target="_blank"
          ><img src="../assets/twitch.png" alt=""/>
        </a>
      </li>
      <li>
        <a
          href="https://steamcommunity.com/workshop/browse/?appid=252950&browsesort=trend&section=readytouseitems"
          target="_blank"
          ><img src="../assets/steam.png" alt=""/>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss">
.content {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.content .textBox {
  position: relative;
  max-width: 600px;
}

.content .textBox h2 {
  color: #333;
  font-size: 3.5em;
  line-height: 1.4em;
  font-weight: 400;
}

.content .textBox h2 span {
  color: var(--main-color);
  font-size: 1em;
  font-weight: 800;
}

.content .textBox p {
  color: #333;
  margin-top: 30px;
}

.content .textBox a {
  display: inline-block;
  margin-top: 20px;
  padding: 8px 20px;
  background: var(--main-color);
  color: #fff;
  border-radius: 40px;
  font-weight: 500;
  letter-spacing: 1px;
  text-decoration: none;
}

.content .imgBox {
  width: 600px;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
  margin-top: 50px;
  transform: rotate(45deg);
}

.content .imgBox img {
  max-width: 450px;
}

.sci {
  position: absolute;
  top: 50%;
  right: 30px;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.sci li {
  list-style: none;
}

.sci li a {
  display: inline-block;
  margin: 8px 0;
  transform: scale(0.8);
  filter: invert(1);
}

.circle {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--main-color);
  clip-path: circle(600px at right 800px);
}
</style>
