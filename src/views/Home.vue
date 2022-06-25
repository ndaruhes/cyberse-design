<template>
    <full-page ref="fullpage" :options="options" id="fullpage">
        <!-- NAVBAR & HERO -->
        <div class="section"><Navbar/><Hero/></div>

        <!-- AGENDA -->
        <div class="section"><Agenda/></div>

        <!-- INTRO -->
        <div class="section"><Intro/></div>

        <!-- KIND -->
        <div class="section"><Kind/></div>
    </full-page>
</template>

<script>
import Navbar from "@/components/layouts/Navbar.vue";
import Hero from "@/components/home/Hero.vue";
import Agenda from "@/components/home/Agenda.vue";
import Intro from "@/components/home/Intro.vue";
import Kind from "@/components/home/Kind.vue";
export default {
    components: { Navbar, Hero, Agenda, Intro, Kind },
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