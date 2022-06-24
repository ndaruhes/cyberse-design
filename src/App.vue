<template>
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
import Particles from "@/components/layouts/Particles.vue";
export default {
    components: { Particles },
};
</script>

<style lang="scss">
@import "@/assets/sass/app.scss";
</style>