<template>
  <q-card style="width: 380px;" class="q-px-lg">
    <q-card-section align="center" class="q-pb-none">
      <div class="text-h5 text-primary">{{ $t('layout.sendMessage') }}</div>
    </q-card-section>
    <q-card-section class="q-mt-none">
      <q-form @submit="send">
        <q-input v-model="fullName" :label="$t('contact.fullName')" :rules="requiredRules" />
        <q-input v-model="email" :label="$t('contact.email')" :rules="emailRules" />
        <q-input v-model="phone" :label="$t('contact.phone')" :rules="requiredRules" />
        <q-input v-model="message" :label="$t('contact.message')" type="textarea" :rules="requiredRules" />
        <div class="row justify-end q-gutter-sm q-mt-md">
          <q-btn flat :label="$t('contact.cancel')" :no-caps="true" v-close-popup />
          <q-btn color="primary" :label="$t('contact.send')" type="submit" :no-caps="true" />
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
import useGlobal from "src/global";

const $t = useGlobal().$t

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
    subject: `A message from islandcoyote.com - ${fullName.value}`,
    Name: fullName.value,
    Email: email.value,
    Phone: phone.value,
    Message: message.value,
  };

  //console.log(data);

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
    color: 'positive',
    icon: 'bi-check-circle',
    message: $t('contact.msgSent'),
  })

  emit('update:modelValue', false)

  loading.value = false;
}

</script>
