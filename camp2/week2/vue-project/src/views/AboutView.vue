<template>
  <div>{{ result }}</div>
  <div>{{ result }}</div>
  <div>{{ result }}</div>
  <div>{{ changeName() }}</div>
  <div>{{ changeName() }}</div>
  <div>{{ changeName() }}</div>

  <button @click="changeName">change</button>
</template>
<script setup>
import { watch, ref, watchEffect, computed } from "vue";
const show = ref("asd");
const name = ref("name");
const result = computed(() => {
  console.log("run  computed");
  return show.value + " " + name.value;
});
function getTrips() {
  //   axios.get("").then().catch();
  console.log("getTrips");
}
const changeName = () => {
  name.value = "andrew";
  console.log("run  function");
};
// getTrips();
// setTimeout(() => {
//   show.value = "andrew";
//   name.value = "AAAA";
// }, 2000);
watch(show, (newValue, oldValue) => {
  console.log("oldValue" + oldValue);
  console.log("newValue" + newValue);
});
watch(name, (newValue, oldValue) => {
  console.log("oldValue" + oldValue);
  console.log("newValue" + newValue);
});
// watchEffect(() => {
//   console.log(name.value);
//   console.log(show.value);
// });
</script>
<style></style>
