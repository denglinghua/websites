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
            <a href="tel:+1902888888" class="link">(902) 888-888</a>
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
      <iframe class="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d782.9944428356407!2d-63.09861655784637!3d46.230547801757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5e52566082aaa7%3A0x10ae3d7c1c50d8f3!2sMike%20%26%20Andreea&#39;s%20NOFRILLS%20Stratford!5e0!3m2!1sen!2sca!4v1734899456726!5m2!1sen!2sca"
        width="100%" height="400" style="border: 0" allowfullscreen="false" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </q-card-section>
  </q-card>
</template>
<script setup>
import { copyToClipboard } from 'quasar'
import IconButton from 'src/components/IconButton.vue'

const email = "contact" + "@" + "abc.com";
const address = "ABC Rd, Stratford, PE C1E 1K1";

</script>
