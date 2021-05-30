<template>
  <div class="addWorkshop">
    <h1>Add new map</h1>
      <div class="card-workshop">
        <form novalidate class="md-layout" @submit.prevent="validateWorkshop">
          <md-card class="md-layout-item md-size-100 md-small-size-100">
            <md-card-header>
              <div class="md-title">Workshop</div>
            </md-card-header>

            <md-card-content>
              <div class="md-layout md-gutter">
                <div class="md-layout-item md-small-size-100">
                  <md-field :class="getValidationClass('WorkshopName')">
                    <md-icon>badge</md-icon>
                    <label for="workshop-name">Map name</label>
                    <md-input name="workshop-name" id="workshop-name" autocomplete="given-name" v-model="form.WorkshopName" :disabled="sending" md-counter="20" />
                    <span class="md-error" v-if="!$v.form.WorkshopName.required">The name is required</span>
                    <span class="md-error" v-else-if="!$v.form.WorkshopName.maxLength">Too long</span>
                  </md-field>
                <div class="md-layout-item md-small-size-100">
                  <md-field :class="getValidationClass('WorkshopTag')">
                    <md-icon>tag</md-icon>
                    <label for="workshop-tag">Map tag</label>
                    <md-input name="workshop-tag" id="workshop-tag" autocomplete="type-name" v-model="form.WorkshopTag" :disabled="sending" md-counter="20" />
                    <span class="md-error" v-if="!$v.form.WorkshopTag.required">The tag is required</span>
                    <span class="md-error" v-else-if="!$v.form.WorkshopTag.maxLength">Too long</span>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100">
                  <md-field :class="getValidationClass('WorkshopLink')">
                    <md-icon>link</md-icon>
                    <label for="workshop-link">Map link</label>
                    <md-input name="workshop-link" id="workshop-link" autocomplete="family-name" v-model="form.WorkshopLink" :disabled="sending" />
                    <span class="md-error" v-if="!$v.form.WorkshopLink.required">The link is required</span>
                    <span class="md-error" v-else-if="!$v.form.WorkshopLink.minlength">Invalid link</span>
                  </md-field>
                </div>
              </div>
            </div>  
          </md-card-content>

          <md-progress-bar md-mode="indeterminate" v-if="sending" />

          <md-card-actions>
            <md-button type="submit" class="md-primary" :disabled="sending">Create map</md-button>
          </md-card-actions>
        </md-card>

          <md-snackbar :md-active="itemSaved">The map {{ lastWorkshop }} was saved with success!</md-snackbar>
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
        WorkshopName: null,
        WorkshopTag: null,
        WorkshopLink: null
      },
      itemSaved: false,
      sending: false,
      lastWorkshop: null
    };
  },
  validations: {
      form: {
        WorkshopName: {
          required,
          maxLength: maxLength(20)
        },
        WorkshopLink: {
          required
        },
        WorkshopTag: {
          required,
          maxLength: maxLength(20)
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
        this.form.WorkshopName = null
        this.form.WorkshopTag = null
        this.form.WorkshopLink = null
        window.setTimeout(() => {
          this.itemSaved = false  
        }, 1500)
      },
    saveWorkshop () {
        this.sending = true
        // Instead of this timeout, here you can call your API

        const data = {
        name: this.form.WorkshopName,
        link: this.form.WorkshopLink,
        tag: this.form.WorkshopTag
				};
        console.log(this.sending)
        window.setTimeout(() => {
          this.itemSaved = true
          this.sending = false
          this.clearForm()
        }, 1500)
				axios
					.post("http://localhost:3000/workshop", data)
					.then((res) => {
						console.log(`Status: ${res.status}`);
						console.log("Body: ", res.data);
					})
					.catch((err) => {
						console.error(err);
					});
      },
    validateWorkshop () {
        this.$v.$touch()

        if (!this.$v.$invalid) {
          this.saveWorkshop()
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
//////@at-root pour materiel vue //////////
.card-workshop{

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
///////////////////
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
