<template>
  <div class="addItem">
    <h1>Add new item</h1>
        <ul v-if="error" class="errors">
          <li v-for="item in logs" :key="item">{{ item }}</li>
        </ul>
        <input type="text" v-model="itemName" placeholder="Item name"/>
        <input type="text" v-model="itemType" placeholder="Item type"/>
        <input type="text" v-model="itemImage" placeholder="Item link image"/>

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
            itemImage : null,
            logs: [],
			      error: false
        };
  },
  methods: {
      postItem(){
          this.logs = [];
          if((this.itemName == null) || (this.itemType == null) || (this.itemImage == null)){
            this.error = true;
            this.logs.push("Au moins un champs n'est pas renseigné");
          }
          else{
            this.error = false;
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

h1 {
  margin-bottom: 25px;
  width: 500px;
}

input[type="text"] {
  border: none;
  width: 100%;
  height: 100%;
  padding: 10px 20px;
  background: #333;
  border-radius: 3px;
  box-shadow: 0px 8px 15px rgba(#4b4848, 0.1);
  margin: 20px 0;
  color: white;
}

input[type="text"]:focus {
  box-shadow: 0px 20px 30px rgba(#4b4848, 0.3);
  outline: none;
}

input[type="button"] {
  background-color: var(--main-color);
  width: 100%;
  border: none;
  outline: none;
  color: white;
  padding: 10px 20px;
  //text-transform: uppercase;
  font-size: 16px;
  margin: 40px 0;
  cursor: pointer;
  border-radius: 2px;
  box-shadow: 0px 8px 15px rgba(#4b4848, 0.1);
}

input[type="button"]:hover {
  opacity: 0.8;
  box-shadow: 0px 20px 30px rgba(#4b4848, 0.3);
}

.errors{
	background: #f8d7da;
	color: #721c24;
	padding: 8px 30px;
	border-radius: 2px;
	margin-bottom: 20px;
}

</style>