<template>
    <div class="intro">
        <img src="@/assets/images/backgrounds/2.png" alt="background" class="background">
        <div class="container">
            <div class="back-section">
                <button type="button" @click="checkHistory() ? $router.go(-1) : $router.push('/')" class="btn text-greenGradient">
                    &laquo; Kembali
                </button>
            </div>

            <h1 class="heading">
                Apa Sih <span class="text-main fw-bold">Metaverse</span>
            </h1>

            <div class="row">
                <div class="col-md-4 text text-1" data-aos="fade-up">
                    <h3 class="text-greenGradient">Perkenalan</h3>
                    <div class="line"></div>
                    <p>Metaverse merupakan dunia virtual 3D yang diciptakan menggunakan teknologi augmented reality, virtual reality, dan video. Pengguna dapat merasakan hidup dalam dunia virtual secara realistis.</p>
                    <p>Pengguna atau para penghuni dunia ini dapat melakukan beragam aktivitas pada platform tersebut, mulai dari investasi hingga melaksanaan pekerjaan secara remote layaknya di dunia nyata.</p>
                </div>
                <div class="col-md-4 image" data-aos="fade-down">
                    <img src="@/assets/images/image-shape/asset3.png" class="w-100" alt="image">
                </div>
                <div class="col-md-4 text text-2" data-aos="fade-up">
                    <h3 class="text-greenGradient">Kenapa Metaverse</h3>
                    <div class="line"></div>
                    <p>Metaverse merupakan dunia virtual 3D yang diciptakan menggunakan teknologi augmented reality, virtual reality, dan video. Pengguna dapat merasakan hidup dalam dunia virtual secara realistis.</p>
                    <p>Pengguna atau para penghuni dunia ini dapat melakukan beragam aktivitas pada platform tersebut, mulai dari investasi hingga melaksanaan pekerjaan secara remote layaknya di dunia nyata.</p>
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
.intro {
    width: 100%;
    padding: 30px 0 70px 0;
    position: relative;
    .background {
        width: 90%;
        position: absolute;
        left: 5%;
        top: 0;
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
    .heading {
        text-align: center;
        position: relative;
        margin-bottom: 40px;
        text-transform: uppercase;
        color: $white;
    }
    .image {
        position: relative;
        z-index: 1000;
    }
    .text {
        z-index: 1000;
        position: relative;
        h3 {
            font-size: 30px;
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
            font-size: 19px;
            color: $white;
        }
    }

    .text-2 {
        text-align: right;

        .line {
            margin-left: auto;
        }
    }
}

@media screen and (max-width: 768px) {
    .intro {
        width: 100%;
        padding: 30px 0 0 0;
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
                font-size: 20px;
            }
            p {
                font-size: 17px;
            }
        }

        .text-2 {
            text-align: left;

            .line {
                margin-left: 0;
            }
        }
    }
}
</style>