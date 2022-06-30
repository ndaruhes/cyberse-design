<template>
    <div class="benefit">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="col-md-12 border-card">
                        <img src="@/assets/images/agenda/future.png" alt="future" class="img-fluid w-50 float-start px-4 mb-1" />
                        <h3>Perkenalan Metaverse</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel molestiae sapiente vitae! Voluptate laborum incidunt eius fugiat. Cum, excepturi pariatur?</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="col-md-12 border-card">
                        <img src="@/assets/images/agenda/technology.png" alt="future" class="img-fluid w-50 float-start px-4 mb-1" />
                        <h3>Perkenalan Metaverse</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel molestiae sapiente vitae! Voluptate laborum incidunt eius fugiat. Cum, excepturi pariatur?</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="col-md-12 border-card">
                        <img src="@/assets/images/agenda/3.png" alt="future" class="img-fluid w-50 float-start px-4 mb-1" />
                        <h3>Perkenalan Metaverse</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel molestiae sapiente vitae! Voluptate laborum incidunt eius fugiat. Cum, excepturi pariatur?</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="col-md-12 border-card">
                        <img src="@/assets/images/agenda/future.png" alt="future" class="img-fluid w-50 float-start px-4 mb-1" />
                        <h3>Perkenalan Metaverse</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel molestiae sapiente vitae! Voluptate laborum incidunt eius fugiat. Cum, excepturi pariatur?</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="col-md-12 border-card">
                        <img src="@/assets/images/agenda/future.png" alt="future" class="img-fluid w-50 float-start px-4 mb-1" />
                        <h3>Perkenalan Metaverse</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel molestiae sapiente vitae! Voluptate laborum incidunt eius fugiat. Cum, excepturi pariatur?</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="col-md-12 border-card">
                        <img src="@/assets/images/agenda/future.png" alt="future" class="img-fluid w-50 float-start px-4 mb-1" />
                        <h3>Perkenalan Metaverse</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel molestiae sapiente vitae! Voluptate laborum incidunt eius fugiat. Cum, excepturi pariatur?</p>
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
        padding: 25px;
        // margin-bottom: 20px;
        h3,
        p {
            color: whoite;
            text-align: justify;
            color: $white;
        }
        h3 {
            font-size: 20px;
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

@keyframes rotation {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>