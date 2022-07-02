<template>
    <!-- PARTICLES -->
    <Particles />

    <!-- NAVBAR -->
    <Navbar />

    <!-- ROUTER VIEW -->
    <router-view v-slot="{Component}">
        <transition name="route" mode="out-in">
            <component :is='Component'></component>
        </transition>
    </router-view>
</template>

<script>
import Particles from "@/components/layouts/Particles.vue";
import Navbar from "@/components/layouts/Navbar.vue";
export default {
    components: { Particles, Navbar },
};
</script>

<style lang="scss">
@import "@/assets/sass/app.scss";
</style>