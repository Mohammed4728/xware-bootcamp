<template>
  <div class="card">
    <h1>{{ props.data.id }}</h1>
    <p>
      {{ props.data.name }}
    </p>
    <p>
      {{ props.data.age }}
    </p>
    <button @click="cardInfo(props.data.id)">info</button>
  </div>
</template>
<script setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps(["data"]);
const emits = defineEmits(["cardInfo"]);
const cardInfo = (id) => {
  emits("cardInfo", id);
};
</script>
