<script setup>
import {ref, computed, createCommentVNode} from 'vue'
const name = "Vue 3";
// computed inicia con una propiedad de flecha y simpre tiene que existir un return

const counter = ref(0)

const increment = () => {
  console.log("aumentar contador") 
  counter.value++;
}
const disminuir = () => {
  console.log("disminuir contador")
  counter.value--;
}
const resetear = () => {
  console.log("resetear contador")
  counter.value = (0)
}

const classCounter = computed(() => { 
  if(counter.value === 0){
    return 'cero'
  }
  if (counter.value > 0){
    return 'positivo'
  } 
  if (counter.value < 0){
    return 'negativo'
  }
})
</script>

<template>
  <h1> hola {{ name.toUpperCase() }}</h1>
  <h2 :class="classCounter"> {{ counter }}</h2>
  <button @click="increment()">aumentar</button>
  <button @click="disminuir()">disminuir</button>
  <button @click="resetear()">limpiar</button>

</template>

<style>
h1 {
  color: blue;
}

.positivo {
  color: green;
}

.negativo {
  color: red;
}

.cero {
  color: salmon;
}
</style>

