<template>

  <div class="addMove">
    <h1>Add new move</h1>
    
    <div class="card-move">
      <form novalidate class="md-layout" @submit.prevent="validateMove">
        <md-card class="md-layout-item md-size-100 md-small-size-100">
          <md-card-header>
            <div class="md-title">Moves</div>
          </md-card-header>

          <md-card-content>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-field :class="getValidationClass('MoveName')">
                  <label for="move-name">Move Name</label>
                  <md-input name="move-name" id="move-name" autocomplete="given-name" v-model="form.MoveName" :disabled="sending" md-counter="20" />
                  <span class="md-error" v-if="!$v.form.MoveName.required">The name is required</span>
                  <span class="md-error" v-else-if="!$v.form.MoveName.maxLength">Too long</span>
                </md-field>
              </div>

              <div class="md-layout-item md-small-size-100">
                <md-field :class="getValidationClass('MoveLink')">
                  <label for="move-link">Move link</label>
                  <md-input name="move-link" id="move-link" autocomplete="family-name" v-model="form.MoveLink" :disabled="sending" />
                  <span class="md-error" v-if="!$v.form.MoveLink.required">The link is required</span>
                  <span class="md-error" v-else-if="!$v.form.MoveLink.minlength">Invalid link</span>
                </md-field>
              </div>
            </div>  
          </md-card-content>

          <md-progress-bar md-mode="indeterminate" v-if="sending" />

          <md-card-actions>
            <md-button type="submit" class="md-primary" :disabled="sending">Create move</md-button>
          </md-card-actions>
        </md-card>

        <md-snackbar :md-active="moveSaved">The move {{ lastMove }} was saved with success!</md-snackbar>
      </form>
    </div>

  </div>


  
</template>

<script>
import axios from "axios";
import { validationMixin } from 'vuelidate';
import {
    required,
    maxLength
  } from 'vuelidate/lib/validators'

export default {
  name: "AddMoveComponent",
  mixins: [validationMixin],
  data() {
    return {
      form: {
        MoveName: null,
        MoveLink: null
      },
      moveSaved: false,
      sending: false,
      lastMove: null
    };
  },
  validations: {
      form: {
        MoveName: {
          required,
          maxLength: maxLength(20)
        },
        MoveLink: {
          required
        }
      }
    },
  methods: {
    getValidationClass (fieldName) {
      const field = this.$v.form[fieldName]

      if (field) {
        return {
          'md-invalid': field.$invalid && field.$dirty
        }
      }
    },
    clearForm () {
        this.$v.$reset()
        this.form.MoveName = null
        this.form.MoveLink = null
        window.setTimeout(() => {
          this.moveSaved = false  
        }, 1500)
      },
    saveMove () {
        this.sending = true
        // Instead of this timeout, here you can call your API

        const data = {
        name: this.form.MoveName,
        videoLink: this.form.MoveLink,
				};
        console.log(this.form.MoveName)

        window.setTimeout(() => {
          this.moveSaved = true
          this.sending = false
          this.clearForm()
        }, 1500)

        this.error = false;
			

				axios
					.post("http://localhost:3000/moves", data)
					.then((res) => {
						console.log(`Status: ${res.status}`);
						console.log("Body: ", res.data);
					})
					.catch((err) => {
						console.error(err);
					});
      },
    validateMove () {
        this.$v.$touch()

        if (!this.$v.$invalid) {
          this.saveMove()
        }
      },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  margin-bottom: 25px;
  width: 500px;
}

////// POUR MATERIAL //////////
.card-move{

  margin : 0 auto;
  position : center;
}

.md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }

  input[type="text"]{
  background-color: #ebeef2;
  padding-left: 5px;
}
//////////////////



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
