<template>
  <div class="moves">
    <h1>List of Moves</h1>
    <table>
        <tr v-for="item in listMoves" :key="item.id">
            <td>{{item.name}}</td>
            <td><a :href="item.videoLink" target="_blank">Link</a></td>
        </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'MovesComponent',
  data() {
        return {
            listMoves: [],
            errors : []
        }
  },
  // Fetches posts when the component is created.
  created() {
      //test sur une api random
    axios.get(`http://localhost:3000/moves`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.listMoves = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

h1{
    margin: 30px;
}


ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: flex;
  margin: 0 10px;
  padding: 8px 20px;
  border: 1px solid #333;

  & a{
      position: relative;
      right: 0;
  }
}

table{
    width: 75%;
    margin: 50px auto;
    border-collapse: collapse;

    & tr:nth-child(even){
        background-color: #f2f2f2;
    }

    & tr:hover {background-color: #ddd;}

    & td{
        border: 1px solid #ddd;
        padding: 8px;
    }
}
</style>

<!--

https://id.twitch.tv/oauth2/authorize?client_id=9vccw2g8hpx4e6yhcye036zhr9uk6r&redirect_uri=http://localhost&response_type=code&scope=viewing_activity_read

http://localhost/?code=292ficgerfvne4lxddenx9krx325uh&scope=viewing_activity_read

292ficgerfvne4lxddenx9krx325uh
-->