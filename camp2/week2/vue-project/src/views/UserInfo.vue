<template>
  <div>Users Info</div>
  <div>{{ route.params.userId }}</div>
</template>
<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
const userInfoData = () => {
  axois.get(`https/api/users/${userId}`);
};
</script>
