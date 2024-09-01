<template>
  <!-- import function or any code js in template  -->
  <h1>{{ show === true ? "yes" : "no" }}</h1>
  <!-- <div>{{ show !== true ? showAlert(true) : "" }}</div> -->
  <!-- import text by variable js -->
  <div v-text="textDiv"></div>
  <!-- import tage  by variable js -->
  <div v-html="tag"></div>
  <!-- bind class  -->
  <div v-bind:class="classStyle">center</div>
  <div
    :class="[
      textCenter === 'text-center' ? (textCenter = '') : (textCenter = ''),
      textDanger,
    ]"
  >
    center
  </div>
  <!-- bind style  -->
  <div :style="styleObject">div</div>
  <!-- v-if -->
  <div v-if="show">show is true</div>
  <div v-else-if="!show">show is false</div>
  <div v-else>show is false</div>
  <!-- v-show -->
  <div v-show="show">show is true with v-show</div>
  <div v-show="!show">show is false with v-show</div>
  <!-- v-for -->
  <!-- array -->
  <!-- <div v-for="(number, index) in numbers" :key="index">
    <h1 v-if="number <= 5">{{ number }}</h1>
  </div> -->
  <div v-for="(number, index) in numbers" :key="index" v-show="number <= 5">
    <span> {{ number }}</span>
    <button>done</button>
    <button @click="editItem(index)">edit</button>
    <button @click="deleteItem(index)">delete</button>
  </div>
  <!-- v-for ==> object -->
  <!-- <div v-for="(key, value) in person">
    <p v-if="value === 'andrew'">{{ key === "name" }} : {{ value }}</p>
  </div> -->
  <!-- v-on  -->
  <!-- <button @click="show = !show">change</button> -->
  <button @click="showAlert('asd')">show</button>
</template>
<script setup>
import { ref, reactive } from "vue";
let show = ref(true);
let textDiv = ref("asdddd");
let classStyle = ref("text-center");
let textCenter = ref("text-center");
let textDanger = ref("text-danger");
let textColor = ref("red");
let styleObject = ref({
  color: textColor === "red" ? (textColor = "blue") : (textColor = "red"),
  "font-size": "45px",
});
let tag = ref("<span> this is span </span>");
const state = reactive({
  name: "andrew",
  isShow: true,
  skills: ["html", "css"],
});
let numbers = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
let person = ref({
  name: "andrew",
  age: "441",
});
const showAlert = (value) => {
  alert(value);
};
console.log(show.value);
console.log(person.value.name);
console.log(state.name);
// showAlert();
const deleteItem = (index) => {
  console.log(index);
  numbers.value.splice(index, 1);
};
</script>
<style scoped>
.text-center {
  text-align: center;
}
.text-danger {
  color: red;
}
</style>
