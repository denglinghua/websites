<template>
  <q-card style="width: 380px;" class="q-px-lg">
    <q-card-section align="center" class="q-pb-none">
      <div class="text-h5 text-primary">Send us a message</div>
    </q-card-section>
    <q-card-section class="q-mt-none">
      <q-form @submit="send">
        <q-input v-model="fullName" label="Full name" :rules="requiredRules" />
        <q-input v-model="email" label="Email" :rules="emailRules" />
        <q-input v-model="phone" label="Phone" :rules="requiredRules" />
        <q-input v-model="message" label="Your message" type="textarea" :rules="requiredRules" />
        <div class="row justify-end q-gutter-sm q-mt-md">
          <q-btn flat label="Cancel" :no-caps="true" v-close-popup />
          <q-btn color="primary" label="Send" type="submit" :no-caps="true" />
        </div>
      </q-form>
    </q-card-section>
    <q-inner-loading :showing="loading" />
  </q-card>
</template>
<script setup>
import { ref } from "vue";
import { getCurrentInstance } from 'vue'
import { patterns } from 'quasar'
import { Notify } from 'quasar'

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const requiredRules = [val => !!val || '']
const { testPattern } = patterns
const emailRules = [val => testPattern.email(val) || '']

const fullName = ref('');
const email = ref('');
const phone = ref('');
const message = ref('');

const post = getCurrentInstance().appContext.config.globalProperties.$api.post

const loading = ref(false);
function send() {
  const data = {
    access_key: "cc0a9fc3-def8-4ca9-baef-a4030093b7fd",
    subject: `A message from abc.com - ${fullName.value}`,
    Name: fullName.value,
    Email: email.value,
    Phone: phone.value,
    Message: message.value,
  };

  //console.log(data);

  afterSent();
  return;

  loading.value = true;
  post("https://api.web3forms.com/submit", data)
    .then((res) => {
      afterSent();
    })
    .catch((err) => {
      console.log(err);
    });
}

function afterSent() {
  Notify.create({
    color: 'orange',
    icon: 'bi-check-circle',
    message: 'Message sent, We will contact you soon. Thank you!',
  })

  emit('update:modelValue', false)

  loading.value = false;
}

</script>
