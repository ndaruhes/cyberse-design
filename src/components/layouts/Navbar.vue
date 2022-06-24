<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-none">
        <div class="container">
            <a class="navbar-brand" href="#">Cyberse</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#"><i class="uil uil-estate me-1"></i>Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="uil uil-lightbulb-alt me-1"></i>About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="uil uil-rocket me-2"></i>Discover</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="uil uil-headphones-alt me-1"></i>Contact Us</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/variables.scss";
.navbar {
    padding: 10px 0;
}
.navbar-brand {
    font-size: 20px;
}
.nav-link {
    font-size: 18px;
    color: $white !important;
}
</style>