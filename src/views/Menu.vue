<template>
    <div class="menu">
        <div class="container">
            <div class="back-section">
                <button type="button" @click="hasHistory() ? $router.go(-1) : $router.push('/')" class="btn text-greenGradient">
                    &laquo; Kembali
                </button>
            </div>
            <div class="heading">
                <span class="title text-greenGradient">Mau Yang Mana Dulu Nih</span>
                <span class="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis porro eos corrupti.</span>
            </div>
            <div class="row">
                <router-link to="/intro" class="col-md-3 option">
                    <img src="@/assets/images/menu/1.png" alt="menu">
                    <span class="title text-main">Perkenalan Metaverse</span>
                    <span class="subtitle">Pilih menu ini untuk mengetahui apa itu metaverse</span>
                </router-link>
                <router-link to="/technology" class="col-md-3 option">
                    <img src="@/assets/images/menu/2.png" alt="menu">
                    <span class="title text-main">Perkenalan Metaverse</span>
                    <span class="subtitle">Pilih menu ini untuk mengetahui apa itu metaverse</span>
                </router-link>
                <router-link to="/benefit" class="col-md-3 option">
                    <img src="@/assets/images/menu/3.png" alt="menu">
                    <span class="title text-main">Perkenalan Metaverse</span>
                    <span class="subtitle">Pilih menu ini untuk mengetahui apa itu metaverse</span>
                </router-link>
                <router-link to="/" class="col-md-3 option">
                    <img src="@/assets/images/menu/4.png" alt="menu">
                    <span class="title text-main">Perkenalan Metaverse</span>
                    <span class="subtitle">Pilih menu ini untuk mengetahui apa itu metaverse</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        hasHistory() {
            return window.history.length > 2;
        },
    },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/variables";

.menu {
    padding: 40px 0 70px 0;
    .back-section {
        margin-bottom: 35px;
        button {
            position: relative;
        }
    }
    .heading {
        margin-bottom: 40px;
        span {
            display: block;
            text-align: center;
            position: relative;
        }
        .title {
            font-size: 25px;
        }
        .subtitle {
            color: $white;
            font-size: 18px;
        }
    }

    .option {
        padding: 20px;
        display: block;
        text-decoration: none;
        img {
            width: 100%;
            position: relative;
            margin-bottom: 20px;
        }

        span {
            display: block;
            text-align: center;
            position: relative;
            color: $white;
        }

        .title {
            font-size: 20px;
        }
    }
}
</style>