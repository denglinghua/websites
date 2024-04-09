<template>
  <q-card flat :bordered="false">
    <q-list>
      <q-item>
        <q-item-section avatar>
          <q-icon color="primary" name="bi-geo-alt-fill" />
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ $t('contact.address') }}</q-item-label>
          <div class=" row items-center">
            <q-item-label class="text-primary">{{ address }}
              <icon-button icon="bi-copy" size="xs" flat @click="copyToClipboard(address)"
                :tooltip="$t('contact.copyTooltip')" />
            </q-item-label>
          </div>
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section avatar>
          <q-icon color="primary" name="bi-telephone-fill" />
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ $t('contact.phone') }}</q-item-label>
          <q-item-label>
            <a href="tel:+19023308387" class="link">+1 (902) 330-8387</a>
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section avatar>
          <q-icon color="primary" name="bi-envelope-fill" />
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ $t('contact.email') }}</q-item-label>
          <q-item-label>
            <a :href="'mailto:' + email" class="link">{{ email }}</a>
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-card>
  <q-card class="q-mt-md q-ml-md" style="max-width: 600px">
    <q-card-section class="q-pa-sm">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2759.7807981024735!2d-63.1312319241054!3d46.23470368170146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5e52e0f814d261%3A0xff997adf42023187!2s155%20Queen%20St%2C%20Charlottetown%2C%20PE%20C1A%204B4!5e0!3m2!1sen!2sca!4v1706220916063!5m2!1sen!2sca"
        width="100%" height="360" style="border: 0" allowfullscreen="false" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </q-card-section>
  </q-card>
</template>
<script setup>
import { copyToClipboard } from 'quasar'
import IconButton from 'src/components/IconButton.vue'

const email = "hello" + "@" + "islandcoyote.com";
const address = "155 Queen Street, Lower Level Room 3A, Charlottetown, PE C1A 4B4";

</script>
