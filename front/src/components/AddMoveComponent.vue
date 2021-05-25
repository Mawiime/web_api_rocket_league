<template>
  <div class="addMove">
    <h1>Add new move</h1>
        <input type="text" v-model="moveName"/>
        <input type="text" v-model="link"/>

        <input type="button" @click="postMove" value="Post Move"/>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'AddMoveComponent',
  data() {
        return {
            moveName : null,
            link : null
        }
  },
  methods: {
      postMove(){
          const data = {
              name : this.moveName,
              videoLink : this.link
          }

          axios.post('http://localhost:3000/moves', data)
          .then((res) => {
                console.log(`Status: ${res.status}`);
                console.log('Body: ', res.data);
          }).catch((err) => {
                console.error(err);
          })
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

h1{
  margin-bottom: 25px;
}

</style>