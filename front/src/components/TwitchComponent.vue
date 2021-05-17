<template>
  <div class="twitch">
    <div class="glob">
      <div class="list">
        <h1>Streamer Twitch</h1>
        <p>list of streamers currently on Twitch on rocket league order by the number of viewer</p>
      </div>
      <div class="list">
        <div class="streamers" v-for="item in listStreamer" :key="item.id">
          {{ item.type }} - <a :href="'https://www.twitch.tv/'+item.user_name">{{ item.user_name }}</a> - {{ item.viewer_count }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TwitchComponent',
  data : function() {
      return {
        listStreamer : [],
      }
  },
  methods : {
      fetchStream : function (){
        let fetchLink = "https://api.twitch.tv/helix/streams?game_id=30921";
        //f8wc4vij20lldxcic1y57bsvi7uqg2
        //292ficgerfvne4lxddenx9krx325uh

        fetch(fetchLink, {
            method: 'get',
            headers: new Headers({
                'Authorization': process.env.VUE_APP_TWITCH_AUTHORIZATION,
                'Client-ID' : process.env.VUE_APP_TWITCH_CLIENT_ID
            }) 
        })
        .then(function(response){
            return response.json();
        })
        .then(data => {
            let dataFromGame = [];
            for(let key in data.data){
                dataFromGame.push({
                    id : data.data[key].user_id,
                    type: data.data[key].type,
                    user_name: data.data[key].user_name,
                    viewer_count: data.data[key].viewer_count
                });
            }

            this.listStreamer = [...this.listStreamer,...dataFromGame];
        });
      }
  },

  mounted () {
    this.fetchStream();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

h1{
  width: 580px;
}

p{
  margin-bottom: 30px;
  margin-top: 15px;
}

.glob{
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}

.streamers{
  display: block;
}

</style>
