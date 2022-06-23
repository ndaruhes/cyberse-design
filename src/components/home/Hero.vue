<template>
    <div class="hero">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-6 text">
                    <span class="title">
                        Jelajahi dunia metaverse bersama <b class="text-yellow">Cyberse</b>
                    </span>
                    <span class="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laborum hic harum ab ipsam ut voluptatum exercitationem.</span>
                    <div class="action">
                        <a href="#about" class="btn btn-dark me-2">Yuk, Gas Eksplor</a>
                        <router-link to="/" class="btn" style="border: 1px solid #7b61b9; color: #7b61b9">Yuk, Gas Eksplor</router-link>
                    </div>
                </div>
                <div class="col-md-6 image">
                    <img src="@/assets/images/hero.png" alt="hero.png" class="w-100">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/variables";
.hero {
    padding: 80px 0;
    .text {
        span {
            display: block;
            color: white;
        }
        .title {
            font-size: 50px;
            line-height: 60px;
            margin-bottom: 20px;
        }
        .subtitle {
            font-size: 20px;
            margin-bottom: 40px;
        }
    }
    .image {
        background: url("@/assets/images/hero-background.png");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;

        img {
            animation: sky 12s linear infinite;
        }
    }
}

@media screen and (max-width: 768px) {
}
</style>