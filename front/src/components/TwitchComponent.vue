<template>
  <div class="twitch">
    <h1>Streamer Twitch</h1>
    <p>list of streamers currently on Twitch on rocket league order by the number of viewer</p>
    <div class="streamers" v-for="item in listStreamer" :key="item.id">
      {{ item.type }} - {{ item.user_name }} - {{ item.viewer_count }}
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
                'Authorization': 'Bearer f8wc4vij20lldxcic1y57bsvi7uqg2',
                'Client-ID' : '9vccw2g8hpx4e6yhcye036zhr9uk6r',
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
  margin-top: 20px;
}

p{
  margin-bottom: 30px;
  margin-top: 15px;
}

</style>
