<template>
  <h1>{{ loader }}</h1>
  <p>{{ version }}</p>
  <p>{{ type }}</p>
  <p>{{ fileName }}</p>
</template>

<script>
const data = {
  loader: "vue-loader",
  version: 1,
  type: ".vue",
  fileName: "info.vue"
};
</script>
