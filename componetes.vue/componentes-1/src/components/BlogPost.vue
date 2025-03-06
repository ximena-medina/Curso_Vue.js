<script setup>
// defineProps(["title", "id", "body"])
//objeto en defineProps
defineProps({
    title: String,
    id: Number,
    body: {
        type: String,
        default: "sin descripcion",
    }

})
</script>

<template>
  <div class="card">
    <div class="card-body">
        <h5 class="card-title"> {{id}} - {{ title }}</h5>
        <p>{{ body }}</p>
    </div>

  </div>

</template>