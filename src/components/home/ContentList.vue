<template>
    <div class="timeline">
        <div class="container">
            <!-- <h1 class="text-center text-main pb-4">Explore Our Timeline</h1> -->
            <div class="timeline-content">
                <div class="timeline-container left" v-animate-onscroll="{ down: 'zoomInUp' }">
                    <div class="content">
                        <img src="@/assets/images/kinds/asset1.png" alt="contentlist">
                        <span class="title">Perkenalan Metaverse</span>
                        <span class="subtitle">Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto.</span>
                    </div>
                </div>
                <div class="timeline-container right" v-animate-onscroll="{ down: 'zoomInUp' }">
                    <div class="content">
                        <img src="@/assets/images/kinds/asset1.png" alt="contentlist">
                        <span class="title">Teknologi Metaverse</span>
                        <span class="subtitle">Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto.</span>
                    </div>
                </div>
                <div class="timeline-container left" v-animate-onscroll="{ down: 'zoomInUp' }">
                    <div class="content">
                        <img src="@/assets/images/kinds/asset1.png" alt="contentlist">
                        <span class="title">Keuntungan Metaverse</span>
                        <span class="subtitle">Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto.</span>
                    </div>
                </div>
                <div class="timeline-container right" v-animate-onscroll="{ down: 'zoomInUp' }">
                    <div class="content">
                        <img src="@/assets/images/kinds/asset1.png" alt="contentlist">
                        <span class="title">Perkenalan Metaverse</span>
                        <span class="subtitle">Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto.</span>
                    </div>
                </div>
                <div class="timeline-container left" v-animate-onscroll="{ down: 'zoomInUp' }">
                    <div class="content">
                        <img src="@/assets/images/kinds/asset1.png" alt="contentlist">
                        <span class="title">Teknologi Metaverse</span>
                        <span class="subtitle">Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto.</span>
                    </div>
                </div>
                <div class="timeline-container right" v-animate-onscroll="{ down: 'zoomInUp' }">
                    <div class="content">
                        <img src="@/assets/images/kinds/asset1.png" alt="contentlist">
                        <span class="title">Keuntungan Metaverse</span>
                        <span class="subtitle">Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto.</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.timeline {
    padding: 50px 0;
    .timeline-content {
        position: relative;

        &::after {
            content: "";
            position: absolute;
            width: 6px;
            background-color: white;
            top: 0;
            bottom: 0;
            left: 50%;
            margin-left: -3px;
        }

        .timeline-container {
            padding: 10px 40px;
            position: relative;
            background-color: inherit;
            width: 50%;

            &::after {
                content: "";
                position: absolute;
                width: 25px;
                height: 25px;
                border-radius: 50%;
                right: -12px;
                top: 15px;
                z-index: 1;
                background: rgb(118, 45, 182);
                background: linear-gradient(
                    103deg,
                    rgba(118, 45, 182, 1) 47%,
                    rgba(147, 82, 214, 1) 100%
                );
            }

            .content {
                position: relative;
                border-radius: 6px;
                color: white;
                img {
                    width: 25%;
                    margin-bottom: 20px;
                }
                span {
                    display: block;
                }
                .title {
                    font-size: 20px;
                }
                .subtitle {
                    font-size: 17px;
                }
            }
        }

        .left {
            left: 0;
            .content {
                text-align: right;
            }
        }

        .right {
            left: 50%;
            &::after {
                left: -12px;
            }
        }
    }
}
@media screen and (max-width: 600px) {
    .timeline {
        &::after {
            left: 31px;
        }
        .timeline-container {
            width: 100%;
            padding-left: 70px;
            padding-right: 25px;

            &::before {
                left: 60px;
                border: medium solid white;
                border-width: 10px 10px 10px 0;
                border-color: transparent white transparent transparent;
            }
        }
        .left,
        .right {
            &::after {
                left: 15px;
            }
        }
        .right {
            left: 0%;
        }
    }
}
</style>
