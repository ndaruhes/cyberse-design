<template>
    <div class="technology">
        <img src="@/assets/images/backgrounds/2.png" alt="background" class="background">
        <div class="container">
            <div class="back-section">
                <button type="button" @click="checkHistory() ? $router.go(-1) : $router.push('/')" class="btn text-greenGradient">
                    &laquo; Kembali
                </button>
            </div>

            <h1 class="heading-mobile">
                Teknologi Penggunaan <span class="text-main fw-bold">Metaverse</span>
            </h1>

            <div class="row">
                <div class="col-md-3 tools">
                    <div class="row align-items-center">
                        <div class="col-md-12 col-6 item">
                            <div class="image">
                                <img src="@/assets/images/technology/1.png" alt="image">
                            </div>
                            <span class="title text-main">Virtual Reality</span>
                            <span class="subtitle">Berinteraksi satu sama lain dalam ruang lingkup tiga dimensi</span>
                        </div>
                        <div class="col-md-12 col-6 item">
                            <div class="image">
                                <img src="@/assets/images/technology/2.png" alt="image">
                            </div>
                            <span class="title text-main">Internet Connection</span>
                            <span class="subtitle">Metaverse membawa pengguna menjelajahi secara langsung internet digital</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 content-image">
                    <h1 class="heading-desktop">
                        Teknologi Penggunaan <span class="text-main fw-bold">Metaverse</span>
                    </h1>
                    <img src="@/assets/images/image-shape/asset2.png" alt="image" class="w-100">
                </div>
                <div class="col-md-3 tools">
                    <div class="row">
                        <div class="col-md-12 col-6 item">
                            <div class="image">
                                <img src="@/assets/images/technology/3.png" alt="image">
                            </div>
                            <span class="title text-main">Artificial Intelligence</span>
                            <span class="subtitle">Berbagai karakter dunia metaverse berperilaku sesuai dunia nyata</span>
                        </div>
                        <div class="col-md-12 col-6 item">
                            <div class="image">
                                <img src="@/assets/images/technology/4.png" alt="image">
                            </div>
                            <span class="title text-main">Crypto currency</span>
                            <span class="subtitle">Adalah mata uang digital mendukung perekonomian masa depan.</span>
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
    .heading-mobile {
        display: none;
    }
    .tools {
        .item {
            margin-bottom: 50px;
            color: $white;
            .image {
                position: relative;
                z-index: 1000;
                display: flex;
                align-items: center;
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
        .heading-desktop {
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
        padding: 0 0 0 0;
        .back-section {
            margin-bottom: 25px;
        }
        .heading-mobile {
            display: block;
            text-align: center;
            color: $white;
            margin-bottom: 30px;
        }
        .tools {
            .item {
                margin-bottom: 0;
                .image {
                    min-height: 80px;
                }
                .title {
                    font-size: 18px;
                    margin: 10px 0 5px 0;
                }
                .subtitle {
                    font-size: 14px;
                }
            }
        }
        .content-image {
            margin: 30px 0;
            .heading-desktop {
                display: none;
            }
        }
    }
}
</style>