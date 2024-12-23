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
            <a href="tel:+19023303560" class="link">(902) 330-3560</a>
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
  <q-card class="q-mt-lg q-ml-md" style="max-width: 800px">
    <q-card-section class="q-pa-none">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2759.9735764662787!2d-63.1011380230568!3d46.2308701710969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5e5256f55d5ca9%3A0xbbdf051db62c91bf!2s27%20Hopeton%20Rd%2C%20Stratford%2C%20PE%20C1B%201T6!5e0!3m2!1sen!2sca!4v1734918890186!5m2!1sen!2sca"
        width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </q-card-section>
  </q-card>
</template>
<script setup>
import { copyToClipboard } from 'quasar'
import IconButton from 'src/components/IconButton.vue'

const email = "contact" + "@" + "sport-elements.com";
const address = "27 Hopeton Rd, Stratford, PE C1B 1T6";

</script>
