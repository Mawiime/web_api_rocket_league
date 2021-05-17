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