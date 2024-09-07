<template>
    <div class="flex justify-center mt-10">
        <!-- Search Bar -->
        <div class="w-full max-w-md">
            <form @submit.prevent="handleSubmit" class="flex">
                <input
                    v-model="query"
                    type="text"
                    class="flex-1 p-3 border rounded-l-full focus:outline-none focus:ring-orange-400"
                    placeholder="Find Your Restaurant"
                    @input="filterSuggestions"
                />
                <button
                    type="submit"
                    class="p-3 bg-orange-400 text-white rounded-r-full"
                >
                    🔍
                </button>
            </form>

            <!-- Suggestions List -->
            <ul
                v-if="filteredSuggestions.length > 0"
                class="border border-gray-300 mt-2 bg-white rounded-lg"
            >
                <li
                    v-for="suggestion in filteredSuggestions"
                    :key="suggestion"
                    @click="selectSuggestion(suggestion)"
                    class="p-2 cursor-pointer hover:bg-gray-100"
                >
                    {{ suggestion }}
                </li>
            </ul>
        </div>
    </div>

    <!-- Restaurant Logos Grid -->
    <div class="grid grid-cols-4 gap-4 mt-8 max-w-4xl mx-auto">
        <router-link
            v-for="(restaurant, index) in restaurants"
            :key="index"
            :to="restaurant.route"
            class="block"
        >
            <img
                :src="restaurant.logo"
                :alt="restaurant.name"
                class="w-full h-auto rounded-lg shadow-lg hover:opacity-80 transition-opacity"
            />
        </router-link>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import mcdonaldsLogo from '../images/mcdonalds.jpg'
import kfcLogo from '../images/kfc.jpg'
import buffaloBurgerLogo from '../images/buffalo_burger.jpg'
import bazookaLogo from '../images/bazooka.jpg'
import wendysLogo from '../images/wendys.jpg'
import dominosLogo from '../images/dominos.jpg'
import tacobellLogo from '../images/tacobell.jpg'
import subwayLogo from '../images/Subway.png'

const query = ref('')
const suggestions = ref([
    'McDonalds',
    'Kentucky Fried Chicken (KFC)',
    'Buffalo Burger',
    'Bazooka',
    'Wendys',
    'Dominos Pizza',
    'Taco Bell',
    'Pizza Hut',
    'Subway',
])
const filteredSuggestions = ref([])

// Restaurants data with logos and routes
const restaurants = ref([
    { name: 'McDonalds', logo: mcdonaldsLogo, route: '/menu/mcdonalds' },
    { name: 'KFC', logo: kfcLogo, route: '/menu/kfc' },
    {
        name: 'Buffalo Burger',
        logo: buffaloBurgerLogo,
        route: '/menu/buffalo_burger',
    },
    { name: 'Bazooka', logo: bazookaLogo, route: '/menu/bazooka' },
    { name: 'Wendys', logo: wendysLogo, route: '/menu/wendys' },
    { name: 'Dominos Pizza', logo: dominosLogo, route: '/menu/dominos' },
    { name: 'Taco Bell', logo: tacobellLogo, route: '/menu/tacobell' },
    { name: 'Subway', logo: subwayLogo, route: '/menu/subway' },
])

const filterSuggestions = () => {
    if (query.value.trim() === '') {
        filteredSuggestions.value = []
    } else {
        filteredSuggestions.value = suggestions.value.filter((suggestion) =>
            suggestion.toLowerCase().includes(query.value.toLowerCase())
        )
    }
}

const selectSuggestion = (suggestion) => {
    query.value = suggestion
    filteredSuggestions.value = []
}

const handleSubmit = () => {
    if (query.value.trim()) {
        alert(`Searching for: ${query.value}`)
        query.value = ''
        filteredSuggestions.value = []
    }
}
</script>

<style scoped>
/* Add any additional custom styles here if needed */
</style>
