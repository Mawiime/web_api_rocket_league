<template>
  <div class="addItem">
    <h1>Add new item</h1>
        <input type="text" v-model="itemName"/>
        <input type="text" v-model="itemType"/>
        <input type="text" v-model="itemImage"/>

        <input type="button" @click="postItem" value="Post item"/>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'AddItemComponent',
  data() {
        return {
            itemName : null,
            itemType : null,
            itemImage : null
        }
  },
  methods: {
      postItem(){
          const data = {
              itemName : this.itemName,
              itemType : this.itemType,
              itemImage : this.itemImage
          }

          axios.post('http://localhost:3000/items', data)
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