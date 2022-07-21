<template>
    <div class="kinds">
        <div class="container">
            <div class="back-section" data-aos="zoom-in-up">
                <button type="button" @click="checkHistory() ? $router.go(-1) : $router.push('/')" class="btn text-greenGradient">
                    &laquo; Kembali
                </button>
            </div>
            <div class="row align-items-center">
                <div class="col-md-5 image">
                    <img src="@/assets/images/3.png" alt="">
                </div>
                <div class="col-md-7 text">
                    <h1>
                        SEMUA HAL UNTUK <br>
                        <span class="text-main">KEGIATAN METAVERSE</span>
                    </h1>
                    <div class="row justify-content-center">
                        <div class="col-4 kind" data-aos="zoom-in-up">
                            <div class="kind-image">
                                <img class="background" src="@/assets/images/backgrounds/1.png" alt="asset">
                                <img class="icon" src="@/assets/images/activities/discussion.png" alt="asset">
                            </div>
                            <span>Ngobrol & Berdiskusi</span>
                        </div>
                        <div class="col-4 kind" data-aos="zoom-in-up">
                            <div class="kind-image">
                                <img class="background" src="@/assets/images/backgrounds/1.png" alt="asset">
                                <img class="icon" src="@/assets/images/activities/games.png" alt="asset">
                            </div>
                            <span>Bermain Game</span>
                        </div>
                        <div class="col-4 kind" data-aos="zoom-in-up">
                            <div class="kind-image">
                                <img class="background" src="@/assets/images/backgrounds/1.png" alt="asset">
                                <img class="icon" src="@/assets/images/activities/nft.png" alt="asset">
                            </div>
                            <span>Pameran Karya Seni</span>
                        </div>
                        <div class="col-4 kind" data-aos="zoom-in-up">
                            <div class="kind-image">
                                <img class="background" src="@/assets/images/backgrounds/1.png" alt="asset">
                                <img class="icon" src="@/assets/images/activities/party.png" alt="asset">
                            </div>
                            <span>Konser Virtual</span>
                        </div>
                        <div class="col-4 kind" data-aos="zoom-in-up">
                            <div class="kind-image">
                                <img class="background" src="@/assets/images/backgrounds/1.png" alt="asset">
                                <img class="icon" src="@/assets/images/activities/travelling.png" alt="asset">
                            </div>
                            <span>Virtual Travelling</span>
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
.kinds {
    .image {
        background: url("@/assets/images/backgrounds/1.png");
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        position: relative;

        img {
            width: 80%;
            margin: 0 10%;
        }
    }
    .text {
        h1 {
            color: $white;
            margin: 40px 0;
            text-align: center;
        }
        .kind {
            text-align: center;
            margin-bottom: 40px;
            .kind-image {
                min-height: 160px;
                position: relative;
                .background {
                    width: 70%;
                    position: absolute;
                    top: 0;
                    z-index: 998;
                    -webkit-animation: spin 10s linear infinite;
                    -moz-animation: spin 10s linear infinite;
                    animation: spin 10s linear infinite;
                }
                .icon {
                    width: 70%;
                    z-index: 1000;
                    position: relative;
                }
            }
            span {
                display: block;
                text-align: center;
                font-size: 20px;
                margin-top: 10px;
                color: $white;
            }
        }
    }
}

@media screen and (max-width: 768px) {
    .kinds {
        padding: 0 0 80px 0;
        .image {
            img {
                width: 70%;
                margin: 0 15%;
            }
        }
        .text {
            h1 {
                margin: 20px 0;
                font-size: 20px;
            }
            .kind {
                margin-bottom: 20px;
                .kind-image {
                    min-height: 100px;
                    .background {
                        width: 100%;
                    }
                    .icon {
                        width: 100%;
                    }
                }
                span {
                    font-size: 15px;
                    margin-top: 5px;
                }
            }
        }
    }
}
</style>