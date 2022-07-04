<template>
    <div class="activities">
        <div class="container">
            <div class="back-section" data-aos="zoom-in-up">
                <button type="button" @click="checkHistory() ? $router.go(-1) : $router.push('/')" class="btn text-greenGradient">
                    &laquo; Kembali
                </button>
            </div>
            <div class="row align-items-center">
                <div class="col-md-7 examples">
                    <div class="heading" data-aos="zoom-in-down">
                        <span class="title text-greenGradient">Kegiatan yang Bisa Dilakukan di Metaverse</span>
                        <span class="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis porro eos corrupti.</span>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-md-6 activity">
                            <div class="col-md-12 border-card">
                                <div class="row align-items-center">
                                    <div class="col-4 image">
                                        <img src="@/assets/images/activities/discussion.png" alt="activity" />
                                    </div>
                                    <div class="col-8 text">
                                        <h3>Berdiskusi Bersama Rekan</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 activity">
                            <div class="col-md-12 border-card">
                                <div class="row align-items-center">
                                    <div class="col-4 image">
                                        <img src="@/assets/images/activities/games.png" alt="activity" />
                                    </div>
                                    <div class="col-8 text">
                                        <h3>Bermain Game</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 activity">
                            <div class="col-md-12 border-card">
                                <div class="row align-items-center">
                                    <div class="col-4 image">
                                        <img src="@/assets/images/activities/party.png" alt="activity" />
                                    </div>
                                    <div class="col-8 text">
                                        <h3>Konser Virtual</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 activity">
                            <div class="col-md-12 border-card">
                                <div class="row align-items-center">
                                    <div class="col-4 image">
                                        <img src="@/assets/images/activities/travelling.png" alt="activity" />
                                    </div>
                                    <div class="col-8 text">
                                        <h3>Melakukan Perjalanan Online</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 activity">
                            <div class="col-md-12 border-card">
                                <div class="row align-items-center">
                                    <div class="col-4 image">
                                        <img src="@/assets/images/activities/nft.png" alt="activity" />
                                    </div>
                                    <div class="col-8 text">
                                        <h3>Melihat Karya Seni</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-5 act-image">
                    <img src="@/assets/images/2.png" alt="activity" class="w-100" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/variables";
.activities {
    padding: 20px 0;

    .back-section {
        margin-bottom: 10px;
        button {
            position: relative;
        }
    }
    .act-image {
        background: url("@/assets/images/backgrounds/1.png");
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        img {
            animation: sky 12s linear infinite;
        }
    }
    .examples {
        .heading {
            margin-bottom: 20px;
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
        .activity {
            position: relative;
            .border-card {
                z-index: 1000;
                position: relative;
                border-radius: 1rem;
                overflow: hidden;
                padding: 10px 20px;
                margin-bottom: 20px;
                .image {
                    min-height: 90px;
                    img {
                        width: 100%;
                    }
                }
                .text {
                    h3,
                    p {
                        color: whoite;
                        text-align: center;
                        color: $white;
                    }
                    h3 {
                        font-size: 18px;
                        margin: 0;
                    }
                    p {
                        margin: 0;
                        font-size: 15px;
                    }
                }
                &::before {
                    content: "";
                    top: 25%;
                    position: absolute;
                    height: 40%;
                    width: 100%;
                    background-color: rgb(227, 53, 225);
                    filter: blur(10px);
                    border-radius: 1rem;
                    z-index: -2;
                    animation: 5s rotation infinite forwards;
                    animation-delay: -2s;
                }
                &::after {
                    content: "";
                    position: absolute;
                    inset: 5px;
                    z-index: -1;
                    background-color: rgba(10, 11, 14, 1);
                    border-radius: 1rem;
                }
            }
        }
    }
}
</style>