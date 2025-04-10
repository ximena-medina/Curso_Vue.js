<script setup>
defineProps(["start", "end"])
const emit = defineEmits(['next', 'previus'])

const activarSiguiente = () => {
    console.log("me diste siguiente")
    emit("next")
}
</script>

<template>
    <div class="btn-group mb-4" role="group" aria-label="Basic example">
        <button 
            @click="emit('Previus')" 
            type="button" 
            class="btn btn-primary2"
            :disabled="start === 0"
        > 
            Previus {{ start }}
        </button>
        <button 
            @click="emit('Next')" 
            type="button" 
            class="btn btn-primary"
            :disabled="end === 100"
        > 
            Next {{ end }}
        </button>
    </div>
</template>

