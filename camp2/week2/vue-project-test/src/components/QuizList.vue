<template>
  <div class="card">
    <h1>{{ props.data.id }}</h1>
    <p>
      {{ props.data.quizA }}
    </p>
    <button @click="quizContent(props.data.quizA)">Quiz</button>
  </div>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue'
const props = defineProps(['data'])
const emits = defineEmits(['quizContent'])
const quizContent = (quizA) => {
  emits('quizContent', quizA)
}
</script>
