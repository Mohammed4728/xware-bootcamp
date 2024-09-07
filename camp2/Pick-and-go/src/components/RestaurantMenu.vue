<template>
    <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold">Menu for {{ restaurantName }}</h1>
        <!-- Add restaurant-specific menu details -->
    </div>
</template>

<script>
import { useRoute } from 'vue-router'

export default {
    setup() {
        const route = useRoute()
        const restaurantName = route.params.restaurant

        return {
            restaurantName,
        }
    },
}
</script>

<style scoped></style>
