<template>
  <q-tab-panels v-model="panel" animated class="shadow-2 rounded-borders my-card">
    <q-tab-panel name="order" class="q-pa-sm ">
      <div class="column q-gutter-xs">
        <div class="row justify-center">
          <q-img :src="product.imgUrl" width="200px" class="rounded-borders">
            <div class="absolute-bottom text-subtitle2 text-center">
              {{ product.name }}
            </div>
          </q-img>
        </div>
        <q-form @submit="submit">
          <q-input v-model="name" label="Name" :rules="requiredRules" />
          <q-input v-model="phone" label="Phone" :rules="requiredRules" />
          <q-input v-model="email" label="Email" :rules="emailRules" />
          <q-option-group v-model="delivery" :options="options" color="primary" inline dense />
          <q-input v-model="address" label="Address" hint="Deliver : Charlottetown, Stratford, Cornwall."
            :rules="requiredRules" v-if="delivery == 'Delivery'" />
          <div class="row q-mt-md">
            <q-btn label="Reserve" type="submit" color="secondary" no-caps dense />
            <q-btn label="Cancel" class="q-ml-md" color="primary" no-caps flat dense v-close-popup />
          </div>
        </q-form>
      </div>
    </q-tab-panel>
    <q-tab-panel name="success">
      <div>
        <div class="q-mb-md justify-center">
          <q-icon name="bi-check-circle-fill" size="2em" color="positive" />
        </div>
        <div class="text-h6">Thank you for your reservation!</div>
        <div class="text-subtitle1">We will contact you soon.</div>
        <q-btn label="Close" class="q-mt-md" color="primary" no-caps v-close-popup />
      </div>
    </q-tab-panel>
  </q-tab-panels>
</template>
<script setup>
import { ref, defineProps } from 'vue'
import { getCurrentInstance } from 'vue'
import { patterns } from 'quasar'

const panel = ref('order')

const props = defineProps(["product"]);

const options = ['Pickup', 'Delivery'].map((i) => ({ label: i, value: i }));

const name = ref('')
const phone = ref('')
const email = ref('')
const delivery = ref('Pickup')
const address = ref('')

const requiredRules = [val => !!val || '']
const { testPattern } = patterns
const emailRules = [val => testPattern.email(val) || '']

const post = getCurrentInstance().appContext.config.globalProperties.$api.post
function submit() {
  const data = {
    access_key: "59bd57db-8ca0-40e9-8771-64a2a9d25f5b",
    product: props.product.name,
    productImg: "https://giftloving.ca" + props.product.imgUrl,
    name: name.value,
    phone: phone.value,
    email: email.value,
    delivery: delivery.value,
    address: address.value,
  };

  // console.log(data);

  post("https://api.web3forms.com/submit", data)
    .then((res) => {
      panel.value = 'success'
    })
    .catch((err) => {
      console.log(err);
    });
}

</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 480px
</style>
