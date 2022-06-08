<template>
    <!-- ROUTER VIEW -->
    <router-view v-slot="{Component}">
        <transition name="route" mode="out-in">
            <component :is='Component'></component>
        </transition>
    </router-view>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import '@/assets/sass/app.scss';
</style>