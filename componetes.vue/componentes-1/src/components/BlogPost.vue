<script setup>
// defineProps(["title", "id", "body"])
//objeto en defineProps
defineProps({
    title: String,
    id: Number,
    body: {
        type: String,
        default: "no description",
    }

})
</script>

<template>
  <div class="card">
    <div class="card-body">
        <h5 class="card-title"> {{id}} - {{ title }}</h5>
        <p>{{ body }}</p>
        <button @click="$emit(changeFavorite, title)" 
        class="btn btn-outline-primary">
        favorite</button>
    </div>

  </div>

</template>