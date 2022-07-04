<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-none">
            <div class="container">
                <router-link class="navbar-brand" to="/" exact>
                    <img src="@/assets/images/logo.png" alt="logo" width="30" class="me-2">Cyberse
                </router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link exact class="nav-link" to="/"><i class="uil uil-estate me-1"></i>Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/explore"><i class="uil uil-rocket me-2"></i>Explore</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/community"><i class="uil uil-users-alt me-1"></i>Community</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/about"><i class="uil uil-lightbulb-alt me-1"></i>About</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/contact"><i class="uil uil-headphones-alt me-1"></i>Contact</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="nav-mobile">
            <div class="row align-items-center">
                <router-link exact to="/" class="col-2 nav-logo">
                    <img src="@/assets/images/logo.png" alt="logo" class="w-100">
                </router-link>
                <router-link exact to="/" class="col-2 nav-menu">
                    <span class="icon"><i class="uil uil-estate"></i></span>
                    <span class="text">Home</span>
                </router-link>
                <router-link to="/explore" class="col-2 nav-menu">
                    <span class="icon"><i class="uil uil-rocket"></i></span>
                    <span class="text">Explore</span>
                </router-link>
                <router-link to="/community" class="col-2 nav-menu">
                    <span class="icon"><i class="uil uil-users-alt"></i></span>
                    <span class="text">Community</span>
                </router-link>
                <router-link to="/about" class="col-2 nav-menu">
                    <span class="icon"><i class="uil uil-lightbulb-alt"></i></span>
                    <span class="text">About</span>
                </router-link>
                <router-link to="/contact" class="col-2 nav-menu">
                    <span class="icon"><i class="uil uil-headphones-alt"></i></span>
                    <span class="text">Contact</span>
                </router-link>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@import "@/assets/sass/variables.scss";
.navbar {
    padding: 10px 0;
    z-index: 1001;
}
.navbar-brand {
    font-size: 20px;
}
.nav-link {
    font-size: 18px;
    color: $white !important;
}
.nav-mobile {
    display: none;
}
.active {
    background: linear-gradient(90deg, #762db6 0%, #9352d6 67%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

@media screen and (max-width: 768px) {
    .navbar {
        display: none;
    }
    .nav-mobile {
        display: block;
        background: rgba(0, 0, 0, 0.9);
        position: fixed;
        bottom: 0;
        z-index: 1001;
        padding: 5px 20px;

        .nav-logo {
        }
        .nav-menu {
            text-align: center;
            padding: 0;
            display: block;
            text-decoration: none;

            span {
                display: block;
                text-align: center;
                width: 100%;
                color: $white;
            }
            .icon {
                font-size: 18px;
            }
            .text {
                font-size: 12px;
            }
        }
    }
}
</style>
