<template>
  <q-tab-panels v-model="panel" animated class="shadow-2 rounded-borders">
    <q-tab-panel name="order" class="q-pa-xs">
      <q-card class="my-card">
        <img :src="product.imgUrl">
        <q-card-section class="q-pt-sm q-pb-none">
          <div class="text-subtitle2">{{ product.name }}</div>
        </q-card-section>
        <q-form @submit="submit">
          <q-card-section class="q-py-none">
            <q-input v-model="name" label="Name" :rules="requiredRules" />
          </q-card-section>

          <q-card-section class="q-py-none">
            <q-input v-model="phone" label="Phone" :rules="requiredRules" />
          </q-card-section>

          <q-card-section class="q-py-none">
            <q-input v-model="email" label="Email" :rules="emailRules" />
          </q-card-section>

          <q-card-section class="q-pt-md q-pb-none">
            <q-option-group v-model="delivery" :options="options" color="primary" inline dense />
          </q-card-section>

          <q-card-section class="q-py-none" v-if="delivery == 'Delivery'">
            <q-input v-model="address" label="Address" hint="Deliver : Charlottetown, Stratford, Cornwall."
              :rules="requiredRules" />
          </q-card-section>
          <q-card-actions class="q-pt-md">
            <q-btn label="Reserve" type="submit" color="secondary" dense />
            <q-btn label="Cancel" color="primary" flat dense v-close-popup />
          </q-card-actions>
        </q-form>
      </q-card>
    </q-tab-panel>
    <q-tab-panel name="success">
      <q-card class="my-card">
        <q-card-section class="q-pt-md q-pb-none">
          <div class="text-h6">Thank you for your reservation!</div>
        </q-card-section>
        <q-card-section class="q-py-none">
          <div class="text-subtitle2">We will contact you soon.</div>
        </q-card-section>
        <q-card-actions class="q-pt-md">
          <q-btn label="Close" color="primary" dense v-close-popup />
        </q-card-actions>
      </q-card>
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

  console.log(data);

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
  box-shadow: none !important
  border: none !important
</style>
