<template>
    <header>
        <div class="wrapper">
            <nav>
                <RouterLink to="/pickandgo">Pick & Go</RouterLink>
                <!-- Link to PickAndGo -->
            </nav>
        </div>
    </header>

    <RouterView />
    <!-- Ensure this is working correctly -->
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
