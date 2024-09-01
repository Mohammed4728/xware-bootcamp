<template>
  <h1>{{ route.meta.title }}</h1>
  <div>
    <router-link class="btn" to="/about">about page</router-link><br />
    <router-link
      class="btn"
      :to="{
        name: 'about',
      }"
      >about page by name</router-link
    ><br />
    <router-link
      :to="{
        name: 'UserInfo',
        params: {
          userId: 1,
        },
      }"
      >User Info</router-link
    ><br />
    <RouterLink to="/about">about page</RouterLink><br />
    <a href="/about">about</a><br />
    <button @click="goHome">Go To Home</button><br />
    <button @click="goUserInfo(1)">Go To UserInfo</button>
  </div>
</template>
<script setup>
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
console.log(route);
const goHome = () => {
  router.push("/");
  router.push({
    path: "/",
  });
};
const goUserInfo = (id) => {
  router.push({
    name: "UserInfo",
    params: {
      userId: id,
    },
  });
};
</script>
<style>
.btn {
  color: black;
  text-decoration: none;
}
.btn:hover {
  color: red;
}
</style>
