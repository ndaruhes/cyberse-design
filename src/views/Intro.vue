<template>
    <div class="intro">
        <div class="container">
            <div class="back-section">
                <button type="button" @click="checkHistory() ? $router.go(-1) : $router.push('/')" class="btn text-greenGradient">
                    &laquo; Kembali
                </button>
            </div>

            <div class="heading">
                <h1 class="text-main">Apa Sih Metaverse</h1>
                <div class="line bg-main"></div>
            </div>
            <div class="row">
                <div class="col-md-4 text text-1">
                    <h3 class="text-greenGradient">Perkenalan</h3>
                    <div class="line"></div>
                    <p>Metaverse merupakan dunia virtual 3D yang diciptakan menggunakan teknologi augmented reality, virtual reality, dan video. Pengguna dapat merasakan hidup dalam dunia virtual secara realistis.</p>
                    <p>Pengguna atau para penghuni dunia ini dapat melakukan beragam aktivitas pada platform tersebut, mulai dari investasi hingga melaksanaan pekerjaan secara remote layaknya di dunia nyata.</p>
                    <button class="btn bg-main">Jenis Metaverse</button>
                </div>
                <div class="col-md-4 image">
                    <img src="@/assets/images/intro/intro.png" class="w-100" alt="image">
                </div>
                <div class="col-md-4 text text-2">
                    <h3 class="text-greenGradient">Kenapa Metaverse</h3>
                    <div class="line"></div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum minus iusto molestiae accusamus excepturi ab aut aperiam ipsam recusandae, suscipit incidunt libero amet eveniet praesentium iste, autem repellat reprehenderit eum!</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum minus iusto molestiae accusamus excepturi ab aut aperiam ipsam recusandae, suscipit incidunt libero amet eveniet praesentium iste, autem repellat reprehenderit eum!</p>
                    <button class="btn bg-main">Jenis Metaverse</button>
                </div>
            </div>
        </div>
        <div class="network-wave">
            <img src="@/assets/backgrounds/2.png" alt="image">
        </div>
        <div class="assets">
            <img src="@/assets/images/kinds/asset1.png" alt="asset" class="img1">
            <img src="@/assets/images/kinds/asset2.png" alt="asset" class="img2">
            <img src="@/assets/images/kinds/asset3.png" alt="asset" class="img3">
            <img src="@/assets/images/kinds/asset4.png" alt="asset" class="img4">
            <img src="@/assets/images/kinds/asset5.png" alt="asset" class="img5">
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
.intro {
    width: 100%;
    padding: 30px 0 70px 0;
    position: relative;

    .back-section {
        margin-bottom: 35px;
        button {
            z-index: 1000;
            position: relative;
        }
    }

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
    .image {
        position: relative;
        z-index: 1000;
    }
    .text {
        z-index: 1000;
        position: relative;
        h3 {
            font-size: 25px;
        }
        .line {
            width: 150px;
            height: 2px;
            background: #27ae60;
            background: linear-gradient(to right, #27ae60 0%, #2ecc71 81%);
            margin-bottom: 10px;
        }
        p {
            padding: 0;
            font-size: 17px;
            color: $white;
        }
    }

    .text-2 {
        text-align: right;

        .line {
            margin-left: auto;
        }
    }

    .network-wave {
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 999;
        width: 100%;
        opacity: 0.1;
        img {
            width: 100%;
        }
    }

    .assets {
        img {
            width: 100px;
            position: absolute;
            z-index: 999;
            opacity: 0.4;
        }
        .img1 {
            top: 60px;
            left: 70px;
            animation: sky 7s linear infinite;
        }
        .img2 {
            bottom: 200px;
            left: 350px;
            animation: sky 10s linear infinite;
        }
        .img3 {
            top: 50px;
            right: 200px;
            animation: sky 9s linear infinite;
        }
        .img4 {
            bottom: 180px;
            right: 450px;
            animation: sky 11s linear infinite;
        }
        .img5 {
            top: 0;
            left: 700px;
            animation: sky 7s linear infinite;
        }
    }
}

@media screen and (max-width: 768px) {
    .intro {
        width: 100%;
        padding: 30px 0 70px 0;
        position: relative;

        .back-section {
            margin-bottom: 35px;
        }

        .heading {
            margin-bottom: 20px;
            h1 {
                font-size: 20px;
                margin-bottom: 5px;
            }
        }
        .image {
            margin: 20px 0;
        }
        .text {
            h3 {
                font-size: 18px;
            }
            p {
                font-size: 15px;
            }
        }

        .text-2 {
            text-align: left;

            .line {
                margin-left: 0;
            }
        }

        .network-wave {
            top: 200px;
        }

        .assets {
            img {
                width: 60px;
                opacity: 0.3;
            }
            .img1 {
                top: 400px;
                left: 0;
            }
            .img2 {
                top: 400px;
                left: 280px;
            }
            .img3 {
                top: 700px;
                left: 0;
            }
            .img4 {
                top: 700px;
                right: 30px;
            }
            .img5 {
                top: 750px;
                left: 150px;
            }
        }
    }
}
</style>