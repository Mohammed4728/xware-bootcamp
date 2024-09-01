<template>
  <form @submit.prevent="login()">
    <input type="text" v-model.trim="firstName" /><br />
    <input type="text" v-model.number="counter" />
    <input type="text" v-model.lazy="lastName" />
    <span>{{ error }}</span>
    <select v-model="selectOption">
      <option value="A">a</option>
      <option value="B">b</option>
    </select>
    {{ firstName }}
    {{ lastName }}
    {{ selectOption }}
    <button type="submit">submit</button>
  </form>
  <CardItem></CardItem>
</template>
<script setup>
import CardItem from "../components/CardItem.vue";
//npm i axios
// import axois from "axois"
import { ref, watch } from "vue";
const firstName = ref("firstName");
const error = ref("");
const lastName = ref("lastName");
const counter = ref("1");
const selectOption = ref("");
const login = () => {
  console.log("login");
  console.log(firstName.value);
  //   axios.get("url" ).then((res)=>{}).catch((error)=>{})
  //   axios.delete(`url/${id}` ).then((res)=>{}).catch((error)=>{})
  //   axios.dispatch(`url/${id}` , {} ).then((res)=>{}).catch((error)=>{})
  //   axios.put(`url/${id}` , {} ).then((res)=>{}).catch((error)=>{})
  //   axios.post("url" , {name: firstName.value , ,password:password.value}).then((res)=>{}).catch((error)=>{})
};
watch(firstName, (newValue) => {
  if (newValue === "") {
    error.value = "please enter a name";
  } else {
    error.value = "";
  }
});
watch(counter, (newValue) => {
  console.log(typeof newValue);
});
</script>
