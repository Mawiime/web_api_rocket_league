<template>
  <div class="workshops">
    <h1>List of Maps</h1>
    <div class="wrap-table100">
				<div class="table100">
					<table>
						<thead>
							<tr class="table100-head">
								<th class="column1">Name</th>
								<th class="column2">Tag</th>
								<th class="column3">Link</th>
                <th class="column4"></th>
							</tr>
						</thead>
						<tbody>
								<tr class="tab-line" v-for="item in listWorkshop" :key="item.id">
									<td class="column1">{{item.name}}</td>
									<td class="column2">{{item.tag}}</td>
									<td class="column3"><a :href="item.link" target="_blank">telecharger la map</a></td>
                  <td class="column4"><md-button v-if="$store.state.admin" class="md-icon-button" v-on:click="deleteMap(item.id)"><md-icon >delete</md-icon></md-button></td>
                  <!-- <button id="cross" v-on:click="deleteMap(item.id)"></button> -->
								</tr>
						</tbody>
					</table>
				</div>
			</div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'WorkshopComponent',
  data() {
        return {
            listWorkshop: [],
            errors : []
        }
  },
  methods:{
    getMapsData(){
      axios.get(`http://localhost:3000/workshop`)
      .then(response => {
        // JSON responses are automatically parsed.
        this.listWorkshop = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
    },
    deleteMap(id){
      axios.delete('http://localhost:3000/workshop/'+id)
      .then(() => {
        window.location.reload()
      })
      .catch((err) => {
        console.log(err)
      })
    },
  },
  // Fetches posts when the component is created.
  mounted() {
    this.getMapsData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


.glob{
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
}



/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}


#cross {
  height: 30px;
  opacity: 0.6;
  background: #333;
  border: 2px solid #aaa;
  border-radius: 10px;
  margin: auto auto;
  padding: 5px;
  width: 30px;
  z-index: 100;
  cursor: pointer;
  top: 0px;
  box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
  line-height: 40px;
}
#cross:hover {
  opacity: 1;
}
#cross:before, #cross:after {
  position: absolute;
  top: 25%;
  left: 48%;
  transform: translate(-50%,-50%);
  content: '';
  height: 11px;
  width: 2px;
  background-color: #aaa;
}
#cross:before {
  transform: rotate(45deg);
}
#cross:after {
  transform: rotate(-45deg);
}



/*//////////////////////////////////////////////////////////////////
[ RESTYLE TAG ]*/
* {
	margin: 0px; 
	padding: 0px; 
	box-sizing: border-box;
}

body, html {
	height: 100%;
	font-family: sans-serif;
}

/* ------------------------------------ */


a:focus {
	outline: none !important;
}

a:hover {
	text-decoration: none;
}

/* ------------------------------------ */
h1,h2,h3,h4,h5,h6 {margin: 0px;}

h1{
  padding-bottom: 20px;
}

p {margin: 0px;}

ul, li {
	margin: 0px;
	list-style-type: none;
}


/* ------------------------------------ */
input {
  display: block;
	outline: none;
	border: none !important;
}

textarea {
  display: block;
  outline: none;
}

textarea:focus, input:focus {
  border-color: transparent !important;
}

/* ------------------------------------ */
button {
	outline: none !important;
	border: none;
	background: transparent;
}

button:hover {
	cursor: pointer;
}

iframe {
	border: none !important;
}




/*//////////////////////////////////////////////////////////////////
[ Utiliti ]*/






/*//////////////////////////////////////////////////////////////////
[ Table ]*/

.limiter {
  width: 100%;
  margin: 0 auto;
}

.container-table100 {
  width: 100%;
  min-height: 100vh;
  background: #c850c0;
  background: -webkit-linear-gradient(45deg, #4158d0, #c850c0);
  background: -o-linear-gradient(45deg, #4158d0, #c850c0);
  background: -moz-linear-gradient(45deg, #4158d0, #c850c0);
  background: linear-gradient(45deg, #4158d0, #c850c0);

  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 33px 30px;
}

.wrap-table100 {
  width: 1170px;
  margin : 0 auto;
}

table {
  border-spacing: 1;
  border-collapse: collapse;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
  position: relative;
}
table * {
  position: relative;
}
table td, table th {
  padding-left: 8px;
}
table thead tr {
  height: 60px;
  background: rgb(48, 78, 212);
}
table tbody tr {
  height: 50px;
}
table tbody tr:last-child {
  border: 0;
}
table td, table th {
  text-align: left;
}
table td.l, table th.l {
  text-align: right;
}
table td.c, table th.c {
  text-align: center;
}
table td.r, table th.r {
  text-align: center;
}


.table100-head th{
  font-family: OpenSans-Regular;
  font-size: 18px;
  color: #fff;
  line-height: 1.2;
  font-weight: unset;
}

tbody tr:nth-child(even) {
  background-color: #f5f5f5;
}

tbody tr {
  font-family: OpenSans-Regular;
  font-size: 15px;
  color: #808080;
  line-height: 1.2;
  font-weight: unset;
}

tbody tr:hover {
  color: #555555;
  background-color: #b5cbeb;
  font-weight : bold;
}

.column1 {
  width: 30%;
  padding-left: 40px;
}

.column2 {
  width: 30%;
}

.column3 {
  width: 30%;
}

.column4 {
  width: 10%;
  text-align: center;
}



@media screen and (max-width: 992px) {
  table {
    display: block;
  }
  table > *, table tr, table td, table th {
    display: block;
  }
  table thead {
    display: none;
  }
  table tbody tr {
    height: auto;
    padding: 37px 0;
  }
  table tbody tr td {
    padding-left: 40% !important;
    margin-bottom: 24px;
  }
  table tbody tr td:last-child {
    margin-bottom: 0;
  }
  table tbody tr td:before {
    font-family: OpenSans-Regular;
    font-size: 14px;
    color: #999999;
    line-height: 1.2;
    font-weight: unset;
    position: absolute;
    width: 40%;
    left: 30px;
    top: 0;
  }
  table tbody tr td:nth-child(1):before {
    content: "Date";
  }
  table tbody tr td:nth-child(2):before {
    content: "Order ID";
  }
  table tbody tr td:nth-child(3):before {
    content: "Name";
  }
  table tbody tr td:nth-child(4):before {
    content: "Price";
  }
  table tbody tr td:nth-child(5):before {
    content: "Quantity";
  }
  table tbody tr td:nth-child(6):before {
    content: "Total";
  }


  .column4,
  .column1,
  .column2,
  .column3 {
    width: 100%;
  }

  tbody tr {
    font-size: 14px;
  }
}

@media (max-width: 576px) {
  .container-table100 {
    padding-left: 15px;
    padding-right: 15px;
  }
}

</style>