<template>
  <q-card flat :bordered="false">
    <q-list>
      <q-item>
        <q-item-section>
          <q-item-label class="text-h5">Billing Information</q-item-label>
        </q-item-section>
      </q-item>
      <q-item v-for="info in infoItems" :key="info.title">
        <q-item-section>
          <q-item-label caption>{{ info.title }}</q-item-label>
          <div class="row items-center">
            <q-item-label>{{ info.content }}</q-item-label>
            <icon-button icon="bi-copy" size="xs" flat @click="copyToClipboard(info.content)" tooltip="Copy" />
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </q-card>
</template>

<script setup>
import { copyToClipboard } from 'quasar'
import IconButton from 'src/components/IconButton.vue'

const contact = "Island Coyote Tech Inc.";
const address = "155 Queen Street, Lower Level Room 3A, Charlottetown, PE C1A 4B4";
const email = "hello" + "@" + "islandcoyotetech.com";
const phone = "(902) 330-8387";

const infoItems = [
  { "title": "Contact", "content": contact },
  { "title": "Address", "content": address },
  { "title": "Phone", "content": phone },
  { "title": "Email", "content": email }
]

</script>
