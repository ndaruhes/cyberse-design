<template>
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
import Navbar from "@/components/layouts/Navbar.vue";
import Footer from "@/components/layouts/Footer.vue";
export default {
    components: {Navbar, Footer},
};
</script>

<style lang="scss">
@import "@/assets/sass/app.scss";
</style>