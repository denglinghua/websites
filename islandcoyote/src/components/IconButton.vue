<template>
    <q-btn color="primary">
        <q-tooltip>
            {{ tooltip }}
        </q-tooltip>
    </q-btn>
</template>
<script setup>
const props = defineProps({
    tooltip: {
        type: String,
        default: null,
    },
})

</script>
