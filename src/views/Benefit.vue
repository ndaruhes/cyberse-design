<template>
    <div class="benefit">
        <div class="container">
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
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/variables";
.benefit {
    padding: 50px 0;
    .border-card {
        position: relative;
        border-radius: 1rem;
        overflow: hidden;
        padding: 20px;
        margin-bottom: 20px;
        .image {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100px;
            margin-bottom: 10px;
            img {
                width: 40%;
            }
        }
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
</style>