<script setup>
import { list } from 'postcss';
import {ref, computed, createCommentVNode} from 'vue'
const name = "Contador de Numeros Vue3";
// computed inicia con una propiedad de flecha y simpre tiene que existir un return

const counter = ref(0)
const array = ref([])

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
const añadir = () => {
  console.log("Añdir a la lista")
  array.value.push(counter.value)
}

// buscamos si el numero no existe en el array
const bloquear = computed(() => {
  const num = array.value.find((num) => num === counter.value)
  return num || num === 0;
});

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
  <div class="container text-center mt-4 px-4">
    <h1> {{ name.toUpperCase() }}</h1>
    <h2 :class="classCounter"> {{ counter }}</h2>
    <div class="btn-group" role="group mt-6">
      <button @click="increment" class="btn btn-outline-success">aumentar</button>
      <button @click="disminuir" class="btn btn-outline-danger">disminuir</button>
      <button @click="resetear" class="btn btn-outline-secondary">limpiar</button>
      <button @click="añadir" class="btn btn-outline-primary" :disabled="bloquear">Añadir</button>
    </div>
    <ul class="list-group list-group-flush mt-6">
      <li class="list-group-item"v-for="(num, index) in array" :key="index">
      {{ num }} : {{ index }} </li>
    </ul>

  </div>
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

