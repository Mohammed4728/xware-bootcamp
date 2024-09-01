<template>
  <h1>QUIZES</h1>
  <QuizList v-for="quiz in quizs" :key="quiz.id" :data="quiz" @quizContent="quizInfoParent">
  </QuizList>
</template>
<script setup>
import { ref } from 'vue'
import QuizList from '../components/QuizList.vue'
const quizs = ref([
  {
    id: 1,
    quizA:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sequi incidunt adipisci facereNobis tempore eos iusto dolor odio laborum pariatur autem velit alias officiis at dolores, providentvoluptatibus illo.'
  },
  {
    id: 2,
    quizA:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sequi incidunt adipisci facere.Nobis tempore eos iusto dolor odio laborum pariatur autem velit alias officiis at dolores, providentvoluptatibus illo.'
  }
])
</script>
