<template>
  <div class="items">
    <h1>List of Items</h1>

    <div class="glob">
      <div class="card" v-for="item in listItems" :key="item.id">
        <button id="cross" v-on:click="deleteItem(item.id)"></button>
        <img :src="item.itemImage" :alt="item.itemName" style="width:100%">
        <div class="container">
          <h4><b>{{item.itemType}}</b></h4>
          <p>{{item.itemName}}</p>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'ItemsComponent',
  data() {
        return {
            listItems: [],
            errors : []
        }
  },
  // Fetches posts when the component is created.
  methods:{
    deleteItem(id){
      axios.delete('http://localhost:3000/items/'+id)
      .then(() => {
        window.location.reload()
      })
      .catch((err) => {
        console.log(err)
      })
    }
  },
  created() {
    console.log(this.$route)
      //test sur une api random
    axios.get(`http://localhost:3000/items`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.listItems = response.data
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
  margin-bottom: 25px;
}

.glob{
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-around;
}

.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px; /* 5px rounded corners */
  width: 200px;
  flex: 0 0 200px;
  margin: 10px;
  position: relative;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}

img {
  border-radius: 5px 5px 0 0;
}

#cross {
  position: absolute;
  height: 40px;
  opacity: 0.9;
  background: #333;
  border: 2px solid #aaa;
  border-radius: 50%;
  margin: auto auto;
  padding: 5px;
  width: 40px;
  z-index: 100;
  cursor: pointer;
  right: -10px;
  top: -15px;
  box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
  line-height: 40px;
}
#cross:hover {
  opacity: 1;
  background-color: black;
}
#cross:before, #cross:after {
  position: absolute;
  top: 22%;
  left: 50%;
  transform: translate(-50%,-50%);
  content: '';
  height: 22px;
  width: 2px;
  background-color: #aaa;
}
#cross:before {
  transform: rotate(45deg);
}
#cross:after {
  transform: rotate(-45deg);
}

</style>