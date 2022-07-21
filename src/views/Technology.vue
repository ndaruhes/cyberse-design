<template>
    <div class="technology">
        <img src="@/assets/images/backgrounds/2.png" alt="background" class="background">
        <div class="container">
            <div class="back-section">
                <button type="button" @click="checkHistory() ? $router.go(-1) : $router.push('/')" class="btn text-greenGradient">
                    &laquo; Kembali
                </button>
            </div>
            <div class="row">
                <div class="col-md-3 tools">
                    <div class="row align-items-center">
                        <div class="col-md-12 item">
                            <div class="image">
                                <img src="@/assets/images/technology/1.png" alt="image">
                            </div>
                            <span class="title text-main">Virtual Reality</span>
                            <span class="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit</span>
                        </div>
                        <div class="col-md-12 item">
                            <div class="image">
                                <img src="@/assets/images/technology/2.png" alt="image">
                            </div>
                            <span class="title text-main">Internet Connection</span>
                            <span class="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 content-image">
                    <h1 class="heading">
                        Apa Sih <span class="text-main fw-bold">Metaverse</span>
                    </h1>
                    <img src="@/assets/images/intro/asset2.png" alt="image" class="w-100">
                </div>
                <div class="col-md-3 tools">
                    <div class="row">
                        <div class="col-md-12 item">
                            <div class="image">
                                <img src="@/assets/images/technology/3.png" alt="image">
                            </div>
                            <span class="title text-main">Artificial Intelligence</span>
                            <span class="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit</span>
                        </div>
                        <div class="col-md-12 item">
                            <div class="image">
                                <img src="@/assets/images/technology/4.png" alt="image">
                            </div>
                            <span class="title text-main">Cryptocurrency</span>
                            <span class="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Mixins from "@/mixins";
export default {
    mixins: [Mixins],
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/variables";

.technology {
    .background {
        width: 90%;
        position: absolute;
        left: 5%;
        bottom: 0;
        z-index: 999;
        opacity: 0.1;
    }
    .back-section {
        margin-bottom: 35px;
        button {
            z-index: 1000;
            position: relative;
        }
    }
    .tools {
        .item {
            margin-bottom: 50px;
            color: $white;
            .image {
                position: relative;
                z-index: 1000;
                img {
                    width: 50%;
                    margin-left: 25%;
                }
            }
            span {
                position: relative;
                display: block;
                text-align: center;
                z-index: 1000;
            }
            .title {
                font-size: 18px;
                text-transform: uppercase;
                margin: 15px 0 5px 0;
                font-weight: bold;
            }
            .subtitle {
                font-size: 18px;
            }
        }
    }
    .content-image {
        z-index: 1000;
        .heading {
            text-align: center;
            position: relative;
            margin-bottom: 40px;
            text-transform: uppercase;
            color: $white;
        }
        img {
            position: relative;
        }
    }
}

@media screen and (max-width: 768px) {
    .technology {
        .back-section {
            margin-bottom: 35px;
        }
    }
}
</style>