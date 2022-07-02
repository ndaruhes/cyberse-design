<template>
    <div class="intro">
        <div class="container">
            <div class="heading">
                <h1 class="text-main">Apa Sih Metaverse</h1>
                <div class="line bg-main"></div>
            </div>
            <div class="row align-items-center">
                <div class="col-md-4 text">
                    <h3 class="text-greenGradient">Perkenalan</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum minus iusto molestiae accusamus excepturi ab aut aperiam ipsam recusandae, suscipit incidunt libero amet eveniet praesentium iste, autem repellat reprehenderit eum!</p>
                </div>
                <div class="col-md-4 image">
                    <img src="@/assets/images/intro/intro.png" class="w-100" alt="image">
                </div>
                <div class="col-md-4 text">
                    <h3 class="text-greenGradient">Apa Itu Metaverse</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsa maxime nemo a sint dolores officia, optio omnis enim, corporis vero doloremque perspiciatis, sunt nisi est ipsum qui. Enim, reprehenderit!</p>
                </div>
                <!-- <div class="network-wave">
                    <img src="@/assets/images/network-wave.svg" alt="image">
                </div> -->
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/variables";
.intro {
    width: 100%;
    height: 92vh;
    display: flex;
    align-items: center;

    .heading {
        margin-bottom: 20px;
        text-align: center;
        position: relative;
        h1 {
            font-size: 30px;
            margin-bottom: 15px;
            text-transform: uppercase;
        }
        .line {
            width: 150px;
            height: 2px;
            margin: 0 auto;
        }
    }
    .network-wave {
        position: absolute;
        // z-index: 999;
        right: 0;
        top: 0;
        img {
            width: 20%;
        }
    }
    .image {
        position: relative;
    }
    .text {
        position: relative;
        h3 {
            font-size: 25px;
        }
        p {
            padding: 0;
            font-size: 17px;
            color: $white;
        }
    }
}

@media screen and (max-width: 768px) {
}
</style>