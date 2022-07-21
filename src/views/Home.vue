<template>
    <div class="hero">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-6 image-left" data-aos="fade-up">
                    <img src="@/assets/images/hero.png" alt="hero.png" class="w-100">
                </div>
                <div class="col-md-6 text" data-aos="fade-down">
                    <span id="typed" class="text-greenGradient"></span>
                    <span class="title">
                        Jelajahi Dunia Metaverse Bersama <b class="text-main">Cyberse</b>
                    </span>
                    <span class="subtitle">Cyberse akan mengajak kamu berkeliling untuk menjelajah dan mengetahui dunia metaverse dengan cara yang berbeda</span>
                    <div class="action">
                        <router-link to="/explore" class="btn bg-main me-2">Yuk, Gas Eksplor</router-link>
                        <router-link to="/" class="btn outline-main"><i class="uil uil-users-alt me-1"></i>Gabung Komunitas</router-link>
                    </div>
                </div>
                <div class="col-md-6 image-right" data-aos="fade-up">
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
    .image-left,
    .image-right {
        position: relative;
        background: url("@/assets/images/hero-background.png");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;

        img {
            animation: sky 12s linear infinite;
        }
    }
    .image-left {
        display: none;
    }
}

@media screen and (max-width: 768px) {
    .hero {
        padding: 0;
        .text {
            margin-top: 20px;
            #typed {
                font-size: 13px;
            }
            .title {
                margin-top: 0;
                font-size: 22px;
                line-height: 30px;
                margin-bottom: 10px;
            }
            .subtitle {
                font-size: 15px;
                margin-bottom: 20px;
            }
            .action {
                display: flex;
                a {
                    font-size: 14px;
                }
            }
        }
        .image-left {
            display: block;
        }
        .image-right {
            display: none;
        }
    }
}
</style>