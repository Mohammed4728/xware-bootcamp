<template>
  <div>
    <RouterLink to="/">Go to Home</RouterLink>
  </div>
</template>

<script setup>
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onErrorCaptured,
} from "vue";

onBeforeMount(() => {});

onMounted(() => {
  onBeforeUnmount(() => {
    clearInterval(intervalId);
  });
});

onBeforeUpdate(() => {});

onUpdated(() => {});

onUnmounted(() => {
  alert("onUnmounted");
});

onErrorCaptured((err, instance, info) => {
  return false;
});
</script>
