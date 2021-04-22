<template>
  <div class="moves">
    <h1>Liste des Moves</h1>
    <table>
        <tr v-for="item in listMoves" :key="item">
            <td>{{item.name}}</td>
            <td><a :href='item.url'>Lien</a></td>
        </tr>
    </table>

    <ul>
        <li v-for="item in posts" :key="item">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'MovesComponent',
  data() {
        return {
            listMoves: [
                {id: 1, name : 'flip reset', url : 'http://localhost'}, 
                {id: 2, name : 'double tap', url : 'http://localhost'},
                {id: 3, name : 'wavedash', url : 'http://localhost'}
            ],
            posts : [],
            errors : []
        }
    },

    // Fetches posts when the component is created.
  created() {
      //test sur une api random
    axios.get(`http://jsonplaceholder.typicode.com/posts`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data
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