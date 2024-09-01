<template>
  <div>
    <!-- <CardItem :title="titleParent" :des="descriptionParent"></CardItem> -->
    <!-- <CardItem :data="dataObj"></CardItem> -->
    <CardItem
      v-for="person in persons"
      :key="person.id"
      :data="person"
      @cardInfo="cardInfoParent"
    ></CardItem>
    <!-- <CardItem></CardItem>
    <CardItem></CardItem>
    <CardItem></CardItem>
    <CardItem></CardItem> -->
  </div>
</template>
<script setup>
import { ref } from "vue";
import CardItem from "../components/CardItem.vue";
// const dataObj = ref({
//   title: "title vue",
//   descriptionParent: "description vue",
// });
const persons = ref([
  {
    id: 1,
    name: "person",
    age: "11",
  },
  {
    id: 2,
    name: "person2",
    age: "22",
  },
  {
    id: 3,
    name: "person3",
    age: "33",
  },
]);
const cardInfoParent = (id) => {
  console.log(id);
};
</script>
