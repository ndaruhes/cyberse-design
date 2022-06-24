<template>
    <full-page ref="fullpage" :options="options" id="fullpage">
        <!-- NAVBAR & HERO -->
        <div class="section">
            <Navbar />
            <Hero />
        </div>

        <!-- ABOUT -->
        <div class="section"></div>
    </full-page>
</template>

<script>
import Navbar from "@/components/layouts/Navbar.vue";
import Hero from "@/components/home/Hero.vue";
import About from "@/components/home/About.vue";
export default {
    components: { Navbar, Hero, About },
    data() {
        return {
            options: {
                menu: "#menu",
                navigation: true,
            },
        };
    },
    methods: {},
};
</script>