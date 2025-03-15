<script setup>
import {useCounterStore} from '@/store/counter.js' 
import { storeToRefs } from 'pinia'


const useCounter = useCounterStore()
const {increment} = useCounter
const {count, double} = storeToRefs(useCounter) //Para extraer propiedades de la tienda manteniendo su reactividad, debemos usar storeToRefs(). Se usa para la destructuracion.

</script>

<template>
  <main>
    <h1> Home counter: {{ count }} </h1>
    <h2> Home double: {{ double }}</h2>
    <button @click="increment"> Increment</button>
  </main>
</template>
