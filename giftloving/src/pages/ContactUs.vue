<template>
  <q-card flat :bordered="false">
    <q-list>
      <q-item>
        <q-item-section avatar>
          <q-icon color="primary" name="bi-geo-alt-fill" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Address</q-item-label>
          <div class="row items-center">
            <q-item-label caption>{{ address }}</q-item-label>
            <icon-button icon="bi-copy" size="xs" flat @click="copyToClipboard(address)"
              tooltip="Copy address to clipboard" />
          </div>
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section avatar>
          <q-icon color="primary" name="bi-telephone-fill" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Phone</q-item-label>
          <q-item-label caption>
            <a href="tel:+19023308387" class="link">(902) 330-8888</a>
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section avatar>
          <q-icon color="primary" name="bi-envelope-fill" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Email</q-item-label>
          <q-item-label caption>
            <a :href="'mailto:' + email" class="link">{{ email }}</a>
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-card>
  <q-card class="q-mt-md q-ml-md" style="max-width: 600px">
    <q-card-section class="q-pa-sm">
      <q-img src="ps/p2.png" />
    </q-card-section>
  </q-card>
</template>
<script setup>
import { copyToClipboard } from 'quasar'
import IconButton from 'src/components/IconButton.vue'

const email = "hello" + "@" + "imgiftloving.com";
const address = "569 Capital Dr, Cornwall, PE C0A 1H8";

</script>
