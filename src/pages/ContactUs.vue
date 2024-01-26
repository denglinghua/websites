<template>
  <q-card flat :bordered="false">
    <q-list>
      <q-item>
        <q-item-section avatar>
          <q-icon color="primary" name="bi-geo-alt-fill" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Address</q-item-label>
          <q-item-label caption
            >155 Queen Street, Lower Level Room 3A, Charlottetown, PEI, C1A 4B4
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section avatar>
          <q-icon color="primary" name="bi-telephone-fill" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Phone</q-item-label>
          <q-item-label caption>(902) 000-0000</q-item-label>
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section avatar>
          <q-icon color="primary" name="bi-envelope-fill" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Email</q-item-label>
          <q-item-label caption>hello@islandcoyotetech.com</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-card>
  <q-card class="my-card" flat :bordered="false" style="max-width: 600px">
    <q-card-section>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2759.7807981024735!2d-63.1312319241054!3d46.23470368170146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5e52e0f814d261%3A0xff997adf42023187!2s155%20Queen%20St%2C%20Charlottetown%2C%20PE%20C1A%204B4!5e0!3m2!1sen!2sca!4v1706220916063!5m2!1sen!2sca"
        width="100%"
        height="360"
        style="border: 0"
        allowfullscreen="false"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </q-card-section>
  </q-card>
</template>
