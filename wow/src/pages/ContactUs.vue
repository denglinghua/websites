<template>
  <q-card flat :bordered="false">
    <q-list>
      <q-item>
        <q-item-section avatar>
          <q-icon color="primary" name="bi-geo-alt-fill" />
        </q-item-section>

        <q-item-section>
          <q-item-label caption>Address</q-item-label>
          <div class="row items-center q-mt-sm">
            <q-item-label>{{ address }}
              <icon-button icon="bi-copy" size="xs" flat @click="copyToClipboard(address)"
                tooltip="Copy address to clipboard" />
            </q-item-label>
          </div>
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section avatar>
          <q-icon color="primary" name="bi-telephone-fill" />
        </q-item-section>

        <q-item-section>
          <q-item-label caption>Phone</q-item-label>
          <q-item-label>
            <a href="tel:+19022138728" class="link">(902) 213-8728</a>
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section avatar>
          <q-icon color="primary" name="bi-envelope-fill" />
        </q-item-section>

        <q-item-section>
          <q-item-label caption>Email</q-item-label>
          <q-item-label>
            <a :href="'mailto:' + email" class="link">{{ email }}</a>
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-card>
  <q-card class="q-mt-md q-ml-md" style="max-width: 700px">
    <q-card-section class="q-pa-none">
      <q-img src="img/contact_us.jpg" class="rounded-borders" />
    </q-card-section>
  </q-card>
</template>
<script setup>
import { copyToClipboard } from 'quasar'
import IconButton from 'src/components/IconButton.vue'

const email = "contact" + "@" + "wowhometextile.com";
const address = "590 N River Rd, Charlottetown, PE C1E 1J7";

</script>
