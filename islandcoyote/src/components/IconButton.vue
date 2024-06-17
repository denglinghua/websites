<template>
    <q-btn color="primary">
        <q-tooltip>
            {{ tooltip }}
        </q-tooltip>
    </q-btn>
</template>
<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    tooltip: {
        type: String,
        default: null,
    },
})

</script>