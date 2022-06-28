<template>
    <!-- <full-page ref="fullpage" :options="options" id="fullpage"> -->
    <!-- NAVBAR & HERO -->

    <!-- </full-page> -->
    <div class="section">
        <Navbar />
        <Hero />
    </div>

    <!-- CONTENT LISTS -->
    <div class="section">
        <ContentList />
    </div>

    <!-- INTRO -->
    <div class="section">
        <Intro />
    </div>

    <!-- KINDS -->
    <div class="section">
        <Kinds />
    </div>

    <!-- BENEFIT -->
    <div class="section">
        <Benefit />
    </div>

    <div class="section">
        <Footer />
    </div>
</template>

<script>
import Navbar from "@/components/layouts/Navbar.vue";
import Hero from "@/components/home/Hero.vue";
import ContentList from "@/components/home/ContentList.vue";
import Intro from "@/components/home/Intro.vue";
import Kinds from "@/components/home/Kinds.vue";
import Benefit from "@/components/home/Benefit.vue";
import Footer from "@/components/layouts/Footer.vue";
export default {
    components: { Navbar, Hero, ContentList, Intro, Kinds, Benefit, Footer },
    data() {
        return {
            options: {
                licenseKey: null,
                menu: "#menu",
                navigation: true,
                keyboardScrolling: true,
                credits: { enabled: false },
            },
        };
    },
    methods: {},
};
</script>
