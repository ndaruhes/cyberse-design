<template>
    <div class="kinds">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-5 image">
                    <img src="@/assets/images/3.png" alt="">
                </div>
                <div class="col-md-7 text">
                    <h1>
                        TECHNOLOGY NEEDED TO
                        <span class="text-main">OPERATE METAVERSE</span>
                    </h1>
                    <div class="row justify-content-center">
                        <div class="col-4 kind">
                            <img src="@/assets/images/kinds/asset1.png" alt="asset">
                            <span>Cryptocurrency</span>
                        </div>
                        <div class="col-4 kind">
                            <img src="@/assets/images/kinds/asset1.png" alt="asset">
                            <span>Games Online</span>
                        </div>
                        <div class="col-4 kind">
                            <img src="@/assets/images/kinds/asset1.png" alt="asset">
                            <span>Virtual Reality</span>
                        </div>
                        <div class="col-4 kind">
                            <img src="@/assets/images/kinds/asset1.png" alt="asset">
                            <span>Blockchain</span>
                        </div>
                        <div class="col-4 kind">
                            <img src="@/assets/images/kinds/asset1.png" alt="asset">
                            <span>Hologram</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <div class="col-md-12 border-card">
                        <div class="image">
                            <img src="@/assets/images/agenda/future.png" alt="" />
                        </div>
                        <h3>Perkenalan Metaverse</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="col-md-12 border-card">
                        <div class="image">
                            <img src="@/assets/images/agenda/technology.png" alt="" />
                        </div>
                        <h3>Perkenalan Metaverse</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="col-md-12 border-card">
                        <div class="image">
                            <img src="@/assets/images/agenda/3.png" alt="" />
                        </div>
                        <h3>Perkenalan Metaverse</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="col-md-12 border-card">
                        <div class="image">
                            <img src="@/assets/images/agenda/future.png" alt="" />
                        </div>
                        <h3>Perkenalan Metaverse</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/variables";
.kinds {
    // padding: 50px 0;
    .image {
        background: url("@/assets/images/backgrounds/1.png");
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        img {
            width: 80%;
            margin: 0 auto;
        }
    }
    .text {
        h1 {
            color: $white;
            margin: 40px 0;
            text-align: center;
            span {
            }
        }
        .kind {
            text-align: center;
            margin-bottom: 40px;
            img {
                width: 70%;
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
    // .border-card {
    //     position: relative;
    //     border-radius: 1rem;
    //     overflow: hidden;
    //     padding: 20px;
    //     margin-bottom: 20px;
    //     .image {
    //         display: flex;
    //         align-items: center;
    //         justify-content: center;
    //         min-height: 100px;
    //         margin-bottom: 10px;
    //         img {
    //             width: 40%;
    //         }
    //     }
    //     h3,
    //     p {
    //         color: whoite;
    //         text-align: center;
    //         color: $white;
    //     }
    //     h3 {
    //         font-size: 18px;
    //         margin: 0;
    //     }
    //     p {
    //         margin: 0;
    //         font-size: 15px;
    //     }

    //     &::before {
    //         content: "";
    //         top: 25%;
    //         position: absolute;
    //         height: 40%;
    //         width: 100%;
    //         background-color: rgb(227, 53, 225);
    //         filter: blur(10px);
    //         border-radius: 1rem;
    //         z-index: -2;
    //         animation: 5s rotation infinite forwards;
    //         animation-delay: -2s;
    //     }
    //     &::after {
    //         content: "";
    //         position: absolute;
    //         inset: 5px;
    //         z-index: -1;
    //         background-color: rgba(10, 11, 14, 1);
    //         border-radius: 1rem;
    //     }
}

@media screen and (max-width: 768px) {
}
</style>