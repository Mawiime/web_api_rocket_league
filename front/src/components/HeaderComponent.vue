<template>
  <div class="header" id="test">
    <header>
      <a href="/" class="logo"
        ><img src="../assets/logo_rl.jpg" class="logo"
      /></a>
      <ul id="nav">
        <li><router-link to="/">Home</router-link></li>
        <li>
          <router-link to="/moves">Moves</router-link>
          <ul v-if="$store.state.role=='admin'" class="under_menu">
            <li><router-link to="/addmove">Add new move</router-link></li>
          </ul>
        </li>
        <li>
          <router-link to="/items">Items</router-link>
          <ul v-if="$store.state.role=='admin'" class="under_menu">
            <li><router-link to="/additem">Add new item</router-link></li>
          </ul>
        </li>
        <li>
          <router-link to="/workshop">Workshop</router-link>
          <ul v-if="$store.state.role=='admin'" class="under_menu">
            <li><router-link to="/addworkshop">Add new map</router-link></li>
          </ul>
        </li>
        <li><router-link to="/twitch">Twitch</router-link></li>
        <li><button class="sign" v-if="$store.state.role!='admin' && $store.state.role!='member'" @click="afficherFormulaire()">Sign in</button></li>
        <li><button class="sign" v-if="$store.state.role=='admin' || $store.state.role=='member'" @click="disconnect()">Sign out</button></li>
      </ul>
    </header>

    <div class="popup" v-if="shown" >
      <div class="blocker"></div>
    <div id="LoginForm" v-click-outside="hidePopup">
      <div class="card-user">
        <form novalidate class="md-layout" @submit.prevent="validateConnection">
          <md-card class="md-layout-item md-size-100 md-small-size-100">
            <md-card-header>
              <div class="md-title">Connection</div>
            </md-card-header>

            <md-card-content>
              <div class="md-layout md-gutter">
                <div class="md-layout-item md-small-size-100">
                  <md-field :class="getValidationClass('userName')">
                    <md-icon>person</md-icon>
                    <label for="user-name">Username</label>
                    <md-input
                      name="user-name"
                      id="user-name"
                      autocomplete="given-name"
                      v-model="form.userName"
                      :disabled="sending"
                    />
                    <span class="md-error" v-if="!$v.form.userName.required"
                      >The name is required</span
                    >
                  </md-field>
                  <md-field :class="getValidationClass('password')">
                    <md-icon>lock</md-icon>
                    <label for="pass-word">password</label>
                    <md-input
                      type="password"
                      name="pass-word"
                      id="pass-word"
                      autocomplete="family-name"
                      v-model="form.password"
                      :disabled="sending"
                    />
                    <span class="md-error" v-if="!$v.form.password.required"
                      >The password is required</span
                    >
                  </md-field>
                </div>
              </div>
            </md-card-content>

            <md-progress-bar md-mode="indeterminate" v-if="sending" />

            <md-card-actions>
              <md-button type="submit" class="md-primary" :disabled="sending"
                >Sign in</md-button
              >
            </md-card-actions>
          </md-card>

          <md-snackbar :md-active="connected"
            >{{ lastUser }} signed in with success!</md-snackbar
          >
          <md-snackbar :md-active="wrongPassword">
            username or password invalid !</md-snackbar
          >
        </form>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";



export default {
  name: "HeaderComponent",
  mixins: [validationMixin],
  data() {
    return {
      shown: false,
      form: {
        userName: null,
        password: null,
      },
      connected: false,
      wrongPassword: false,
      sending: false,
      lastUser: null,
    };
  },
  validations: {
    form: {
      userName: {
        required,
      },
      password: {
        required,
      },
    },
  },
  methods: {
    hidePopup(){
      this.shown = false;
      var blur = document.getElementById("routComp");
      var header = document.querySelector("header");
      blur.classList.toggle('active');
      header.classList.toggle('active');
    },
    disconnect(){
      this.$store.dispatch("toggle_disconnect")
    },
    afficherFormulaire() {
      this.shown = !this.shown;
      var blur = document.getElementById("routComp");
      var header = document.querySelector("header");
      blur.classList.toggle('active');
      header.classList.toggle('active');
    },
    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];

      if (field) {
        return {
          "md-invalid": field.$invalid && field.$dirty,
        };
      }
    },
    clearForm() {
      this.$v.$reset();
      this.form.userName = null;
      this.form.password = null;
      window.setTimeout(() => {
        this.connected = false;
        this.afficherFormulaire();
      }, 1500);
    },

    connect: async function () {
      this.sending = true;
      // Instead of this timeout, here you can call your API
      const response = await fetch(
        "http://localhost:3000/users/" + this.form.userName,
        {
          method: "get",
        }
      );

       const data =  await response.text().then(function(text) {
        return text ? JSON.parse(text) : {}
      })

      if (data.password == this.form.password) {
        window.setTimeout(() => {
          if (data.rank == "admin") this.$store.dispatch("toggle_admin");
          else this.$store.dispatch("toggle_member");
          this.connected = true;
          this.sending = false;
          this.clearForm();
         
        }, 1500);
      } 
      else {
        window.setTimeout(() => {
          this.wrongPassword = true;
          this.sending = false;
        }, 1500);
      }

      this.error = false;
    },
    validateConnection() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.connect();
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header.active{
  filter: blur(20px);
  pointer-events: none;
  user-select: none;
}

header .logo {
  position: relative;
  max-width: 80px;
}

header ul {
  position: relative;
  display: flex;
  align-items: center;
}

header ul li {
  list-style: none;

  .sign{
    padding: 8px 12px;
    background-color: #fff;
    border: 2px solid rgb(46, 135, 219);
    cursor: pointer;
  }
}

header ul li a, .sign {
  display: inline-block;
  color: #333;
  font-weight: 400;
  margin-left: 40px;
  text-decoration: none;
}

#nav {
  padding: 30px;

  a {
    display: inline-block;
    color: #333;
    font-weight: 400;
    text-decoration: none;

    &.router-link-exact-active {
      background: var(--main-color);
      color: #fff;
      padding: 8px 20px;
      border-radius: 40px;
    }
  }
}

.under_menu {
  display: block;
  box-shadow: 5px 10px 20px #aaa;
  z-index: 1000;
  position: absolute;
  margin-top: 2px;
  top: -10000%;
  transition: top 0.05s step-end;
  padding: 3px;
  //background: rgba(55,55,55,0.8);
  //opacity: 0.5;
  border-radius: 5px;
}

ul li:hover .under_menu {
  //display : block;
  top: 65%;
  transition: none;
}

ul li:hover .under_menu::before {
  content: "";
  position: absolute;
  background: #ccc;
  width: 10px;
  height: 10px;
  transform: rotate(45deg);
  top: -2px;
  right: 50%;
  z-index: -1;
}

.under_menu li {
  float: none;
  text-align: center;
  font-size: 16px;
  background: #fff;
  border-radius: 5px;
  a {
    margin: 0;
    padding: 8px 12px;
  }
}

.under_menu li:not(:first-child) {
  border-top: 1px solid #bbb;
}

.under_menu li:hover {
  background-color: var(--main-color);
  color: #fff;
  opacity: 0.9;
}

.under_menu li:hover a {
  color: #fff !important;
}

///////////////// FORMULAIRE CONNEXION/////////////

div#LoginForm {
  padding: 10px;
  position: fixed;
  z-index: 100000;
  //top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 1;
	animation-name: fadeTop;
	animation-iteration-count: 1;
	animation-timing-function: ease-in-out;
	animation-duration: 0.5s;
}

@keyframes fadeTop{ 
  from {top: 30%;opacity: 0;}
  to {top: 50%;opacity: 1;}
}


</style>