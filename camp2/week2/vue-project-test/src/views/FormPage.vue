<template>
  <h1>FORM</h1>
  <form @submit.prevent="login()">
    <input type="text" v-model.trim="person.firstName" />
    <input type="text" v-model.trim="person.lastName" />
    <input type="text" v-model.trim.number="person.age" />
    <button type="submit">Submit</button>
    {{ person }}
  </form>
</template>
<script setup>
import { ref } from 'vue'
const person = ref({ firstName: '', lastName: '', age: '' })
console.log(person)
// watch (person , (newValue);
//     if (newValue === "") {

//     } else {

//     }
// )
const login = () => {
  console.log('login')
  console.log(person.value)
}
</script>
