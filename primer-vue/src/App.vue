<script setup>
const name = "Vue 3";

const handleClick = (message) => {
  console.log(message) 
}
</script>

<template>
  <h1> hola {{ name.toUpperCase() }}</h1>
  <button v-on:click.right="handleClick('Texto Rigth')">Activame rigth</button>
  <button @click="handleClick('Texto Left')">Activame Left</button>
  <button @click="handleClick('Texto Meddle')">Activame Meddle</button>

</template>

<style>
h1 {
  color: blue;
}
</style>

