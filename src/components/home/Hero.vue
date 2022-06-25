<template>
    <div class="hero">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-6 text">
                    <span id="typed" class="text-greenGradient"></span>
                    <span class="title">
                        Jelajahi Dunia Metaverse Bersama <b class="text-main">Cyberse</b>
                    </span>
                    <span class="subtitle">Cyberse akan mengajak kamu berkeliling untuk menjelajah dan mengetahui dunia metaverse dengan cara yang berbeda</span>
                    <div class="action">
                        <a href="#about" class="btn bg-main me-2">Yuk, Gas Eksplor</a>
                        <router-link to="/" class="btn outline-main"><i class="uil uil-play-circle me-1"></i>Lihat Trailer</router-link>
                    </div>
                </div>
                <div class="col-md-6 image">
                    <img src="@/assets/images/hero.png" alt="hero.png" class="w-100">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        new Typed("#typed", {
            strings: [
                "A New Different Way to Explore A New World",
                "Simple & Clear Will Make You Understand Better",
            ],
            smartBackspace: true,
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
            startDelay: 1000,
        });
    },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/variables";
.hero {
    padding: 80px 0;
    .text {
        position: relative;
        span {
            color: white;
        }
        #typed {
            font-size: 23px;
        }
        .title {
            margin-top: 5px;
            display: block;
            font-size: 45px;
            line-height: 60px;
            margin-bottom: 20px;
        }
        .subtitle {
            display: block;
            font-size: 20px;
            margin-bottom: 40px;
        }
    }
    .image {
        position: relative;
        background: url("@/assets/images/hero-background.png");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;

        img {
            animation: sky 12s linear infinite;
        }
    }
}

@media screen and (max-width: 768px) {
}
</style>