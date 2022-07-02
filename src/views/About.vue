<template>
    <section class="about">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="heading">
                        <h1 class="text-main">Tentang Cyberse</h1>
                        <div class="line bg-main"></div>
                    </div>

                    <p class="fsd text-white lh-lg">Cyberse merupakan sebuah website yang menampilkan berbagai bentuk dan informasi tentang teknologi metaverse dengan cara yang unik.</p>
                    <p class="fsd text-white lh-lg">
                        Judul "Cyberse" terdiri dari dua gabungan kata yaitu "Cyber" dan "Metaverse". Cyber berkaitan dengan berbagai teknologi dunia digital atau komputer, dan "Metaverse" yang berarti ruang virtual yang dimana user dapat berinteraksi dengan lingkungan yang dibentuk oleh teknologi digital.
                    </p>
                    <p class="fsd text-white lh-lg">Bentuk informasi yang ditampilkan berbeda dengan website yang lain, dimana cyberse mengajak user untuk berpetualang ke dalam dunia fantasi teknologi Metaverse yang gokil dan luar biasa.</p>
                    <div class="authors row align-items-md-start align-items-center">
                        <!-- ndaru -->
                        <div class="col-md-6">
                            <div class="row">
                                <div class="col-4">
                                    <img src="@/assets/images/about/ndaru.png" alt="" class="w-100 img-fluid" />
                                </div>
                                <div class="col-8 py-2 text-white">
                                    <h6>Muhamad Ndaru</h6>
                                    <div>
                                        <i class="uil uil-linkedin"></i>
                                        <span>ndaru_hestiafin</span>
                                    </div>
                                    <div>
                                        <i class="uil uil-github"></i>
                                        <span>ndaruhes</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- galvin -->
                        <div class="col-md-6">
                            <div class="row">
                                <div class="col-4">
                                    <img src="@/assets/images/about/galvin.png" alt="" class="img-fluid w-100" />
                                </div>
                                <div class="col-8 text-white py-2">
                                    <h6>Galvin Santoso</h6>
                                    <div>
                                        <i class="uil uil-linkedin"></i>
                                        <span>Galvin Santoso</span>
                                    </div>
                                    <div>
                                        <i class="uil uil-github"></i>
                                        <span>GalvinSantoso</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 p-4 d-none align-items-center d-md-flex">
                    <img src="@/assets/images/about/bg.png" alt="" class="w-100" />
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.about {
    width: 100%;
    height: 91vh;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden !important;
    .heading {
        margin-bottom: 20px;
        h1 {
            font-size: 30px;
            margin-bottom: 15px;
        }
        .line {
            width: 150px;
            height: 2px;
        }
    }
    .fsd {
        font-size: 1rem;
        text-align: justify;
    }
    i {
        color: rgb(227, 53, 225);
    }
    span {
        margin-left: 10px;
    }

    .authors {
        margin-top: 30px;
    }
}

@media screen and (max-width: 768px) {
    .about {
        overflow: visible;

        .fsd {
            font-size: 0.8rem;
        }
    }
}
</style>
