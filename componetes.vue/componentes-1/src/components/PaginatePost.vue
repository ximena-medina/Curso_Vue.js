<script setup>

const emit = defineEmits(['next', 'previus'])
</script>

<template>
    <div class="btn-group mb-4" role="group" aria-label="Basic example">
        <button @click="emit('Previus')" type="button" class="btn btn-primary"> Previus </button>
        <button @click="emit('Next')" type="button" class="btn btn-primary"> Next </button>
    </div>
</template>

