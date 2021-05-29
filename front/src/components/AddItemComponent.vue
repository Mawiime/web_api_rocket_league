<template>
  <div class="addItem">
    <h1>Add new item</h1>
       <div class="card-item">
      <form novalidate class="md-layout" @submit.prevent="validateItem">
        <md-card class="md-layout-item md-size-100 md-small-size-100">
          <md-card-header>
            <div class="md-title">Moves</div>
          </md-card-header>

          <md-card-content>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-field :class="getValidationClass('ItemName')">
                  <label for="item-name">Item name</label>
                  <md-input name="item-name" id="item-name" autocomplete="given-name" v-model="form.ItemName" :disabled="sending" md-counter="20" />
                  <span class="md-error" v-if="!$v.form.ItemName.required">The name is required</span>
                  <span class="md-error" v-else-if="!$v.form.ItemName.maxLength">Too long</span>
                </md-field>
              <div class="md-layout-item md-small-size-100">
                <md-field :class="getValidationClass('ItemType')">
                  <label for="item-type">Item type</label>
                  <md-input name="item-type" id="item-type" autocomplete="type-name" v-model="form.ItemType" :disabled="sending" md-counter="20" />
                  <span class="md-error" v-if="!$v.form.ItemType.required">The type is required</span>
                  <span class="md-error" v-else-if="!$v.form.ItemType.maxLength">Too long</span>
                </md-field>
              </div>
              <div class="md-layout-item md-small-size-100">
                <md-field :class="getValidationClass('ItemLink')">
                  <label for="item-link">item image</label>
                  <md-input name="item-link" id="item-link" autocomplete="family-name" v-model="form.ItemLink" :disabled="sending" />
                  <span class="md-error" v-if="!$v.form.ItemLink.required">The link is required</span>
                  <span class="md-error" v-else-if="!$v.form.ItemLink.minlength">Invalid link</span>
                </md-field>
              </div>
            </div>
          </div>  
          </md-card-content>

          <md-progress-bar md-mode="indeterminate" v-if="sending" />

          <md-card-actions>
            <md-button type="submit" class="md-primary" :disabled="sending">Create move</md-button>
          </md-card-actions>
        </md-card>

        <md-snackbar :md-active="itemSaved">The move {{ lastItem }} was saved with success!</md-snackbar>
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
        ItemName: null,
        ItemType: null,
        ItemLink: null
      },
      itemSaved: false,
      sending: false,
      lastItem: null
    };
  },
  validations: {
      form: {
        ItemName: {
          required,
          maxLength: maxLength(20)
        },
        ItemLink: {
          required
        },
        ItemType: {
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
        this.form.ItemName = null
        this.form.ItemType = null
        this.form.ItemLink = null
        window.setTimeout(() => {
          this.itemSaved = false  
        }, 1500)
      },
    saveItem () {
        this.sending = true
        // Instead of this timeout, here you can call your API

        const data = {
        itemName: this.form.ItemName,
        itemType: this.form.ItemType,
        itemImage: this.form.ItemLink
				};
        console.log(this.sending)
        window.setTimeout(() => {
          this.itemSaved = true
          this.sending = false
          this.clearForm()
        }, 1500)
				axios
					.post("http://localhost:3000/items", data)
					.then((res) => {
						console.log(`Status: ${res.status}`);
						console.log("Body: ", res.data);
					})
					.catch((err) => {
						console.error(err);
					});
      },
    validateItem () {
        this.$v.$touch()

        if (!this.$v.$invalid) {
          this.saveItem()
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
.card-item{

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