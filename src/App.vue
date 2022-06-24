<template>
    <!-- NAVBAR -->
    <Navbar />

    <!-- PARTICLE -->
    <Particles />

    <!-- ROUTER VIEW -->
    <router-view v-slot="{Component}">
        <transition name="route" mode="out-in">
            <component :is='Component'></component>
        </transition>
    </router-view>
</template>

<script>
import Navbar from "@/components/layouts/Navbar.vue";
import Footer from "@/components/layouts/Footer.vue";
import Particles from "@/components/layouts/Particles.vue";
export default {
    components: { Navbar, Footer, Particles },
};
</script>

<style lang="scss">
@import "@/assets/sass/app.scss";
</style>