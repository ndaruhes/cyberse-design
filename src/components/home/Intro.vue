<template>
    <div class="intro">
        <div class="container">
            <div class="row">
                <div class="col-md-4 text-left">
                    <span class="title">Apa Itu Metaverse</span>
                    <span class="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cum laudantium eum dolor! Natus porro optio maxime vel nihil illo, tenetur cum minus, ut sed ad odio recusandae, expedita laboriosam?</span>
                </div>
                <div class="col-md-4 image">
                    <img src="@/assets/images/intro/asset1.png" alt="image" class="asset asset1">
                    <img src="@/assets/images/intro/asset2.png" alt="image" class="asset asset2">
                    <img src="@/assets/images/intro/asset3.png" alt="image" class="asset asset3">
                    <img src="@/assets/images/intro/vr.png" alt="image" class="primary">
                </div>
                <div class="col-md-4 text-right">
                    <span class="title">Apa Itu Cyberse</span>
                    <span class="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cum laudantium eum dolor! Natus porro optio maxime vel nihil illo, tenetur cum minus, ut sed ad odio recusandae, expedita laboriosam?</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/variables";
.intro {
    // background: red;
    .text-left,
    .text-right {
        span {
            display: block;
        }
        .title {
            font-size: 25px;
            background: linear-gradient(90deg, #762db6 0%, #9352d6 67%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .subtitle {
            color: $white;
            font-size: 17px;
        }
    }
    .image {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        background: url("@/assets/images/intro/square.png");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        padding: 0 0 200px 0;

        .primary {
            width: 65%;
            z-index: 1000;
            display: none;
        }
        .asset {
            width: 140px;
            position: absolute;
            z-index: 999;
        }
        .asset1 {
            top: 10px;
            left: 0;
        }
        .asset2 {
            left: 70px;
            bottom: 10px;
            width: 300px;
        }
        .asset3 {
            top: 10px;
            right: 0;
        }
    }
}
</style>