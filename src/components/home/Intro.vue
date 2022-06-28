<template>
    <div class="intro">
        <div class="container">
            <div class="row text-white">
                <div class="col-md-4 p-4">
                    <h3 class="text-main fs-2">Apa Itu Cyberse</h3>
                    <p class="lead-4 parg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum minus iusto molestiae accusamus excepturi ab aut aperiam ipsam recusandae, suscipit incidunt libero amet eveniet praesentium iste, autem repellat reprehenderit eum!</p>
                    <p class="lead-4 parg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum minus iusto molestiae accusamus excepturi ab aut aperiam ipsam recusandae, suscipit incidunt libero amet eveniet praesentium iste, autem repellat reprehenderit eum!</p>
                </div>
                <div class="col-md-4">
                    <img src="@/assets/images/intro/intro.png" class="img-fluid" alt="">
                </div>
                <div class="col-md-4 p-4">
                    <h3 class="text-main fs-2">Apa Itu Metaverse</h3>
                    <p class="lead-4 parg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsa maxime nemo a sint dolores officia, optio omnis enim, corporis vero doloremque perspiciatis, sunt nisi est ipsum qui. Enim, reprehenderit!</p>
                    <p class="lead-4 parg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsa maxime nemo a sint dolores officia, optio omnis enim, corporis vero doloremque perspiciatis, sunt nisi est ipsum qui. Enim, reprehenderit!</p>

                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/variables";
.intro {
    width: 100%;
    height: 100vh;
    padding: 3rem;
    display: flex;
    align-items: center;
    .parg {
        color: rgba(255, 255, 255, 0.6);
        text-align: justify;
        line-height: 2rem;
    }
}

@media screen and (max-width: 768px) {
    .intro {
        h3 {
            text-align: center;
        }
        .parg {
            text-align: center;
            line-height: 1.4rem;
        }
        p:nth-child(2) {
            display: none;
        }
    }
}
</style>