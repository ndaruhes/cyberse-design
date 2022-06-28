<template>
    <section class="about">
        <Navbar />
        <!-- about isi -->
        <div class="container">
            <div class="row">
                <div class="col-md-6 py-4">
                    <h3 class="text-white display-6">Website Metaverse terbaik sepanjang tahun</h3>
                    <h1 class="display-1 text-main my-4">Cyberse</h1>
                    <p class="lead-4 desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vel consequuntur, veniam officiis sint quos maiores magnam et nihil natus!</p>
                    <router-link to="/" class="btn">Eksplor Metaverse</router-link>
                    <div class="creator w-100 d-flex">
                        <figure class="flex-grow-1">
                            <img src="/src/assets/images/about/ndaru.png" class="img-fluid rounded-cicle w-50" alt="">
                            <figcaption>Muhamad Ndaru</figcaption>
                        </figure>
                        <figure class="flex-grow-1">
                            <img src="/src/assets/images/about/galvin.png" class="img-fluid rounded-cicle w-50" alt="">
                            <figcaption>Galvin Santoso</figcaption>
                        </figure>
                    </div>

                </div>
                <div class="col-md-6 bg-img">

                </div>
            </div>
        </div>

    </section>
</template>

<script>
import Navbar from "@/components/layouts/Navbar.vue";
export default {
    components: { Navbar },
};
</script>

<style scoped lang="scss">
.about {
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
    .desc {
        color: rgba(255, 255, 255, 0.6);
    }
}
</style>