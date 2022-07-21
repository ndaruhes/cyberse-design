<template>
    <div class="contact">
        <div class="container">
            <div class="header-mobile">
                <h1 class="text-main">Hubungi Kami</h1>
                <span>
                    Ingin bertanya? jangan ragu buat kontak ke CS kami yang super ramah 😁
                </span>
            </div>
            <div class="row align-items-center">
                <div class="col-md-6 image">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15865.866899102564!2d106.7639922395508!3d-6.2019948000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f6dcc7d2c4ad%3A0x209cb1eef39be168!2sUniversitas%20Bina%20Nusantara%2C%20Kampus%20Anggrek!5e0!3m2!1sid!2sid!4v1658424939671!5m2!1sid!2sid" class="maps-iframe" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div class="col-md-6 text">
                    <div class="header-desktop">
                        <h1 class="text-main">Hubungi Kami</h1>
                        <span>
                            Ingin bertanya? jangan ragu buat kontak ke CS kami yang super ramah 😁
                        </span>
                    </div>
                    <hr class="bg-secondary">
                    <div class="row">
                        <div class="col-4 item">
                            <a href="#" class="col-md-12 item-content email">
                                <i class="uil uil-envelope"></i>
                                <span class="title">E-Mail</span>
                                <span class="subtitle">cs@cyberse.com</span>
                            </a>
                        </div>
                        <div class="col-4 item">
                            <a href="#" class="col-md-12 item-content phone">
                                <i class="uil uil-phone"></i>
                                <span class="title">Phone</span>
                                <span class="subtitle">(021) 5345830</span>
                            </a>
                        </div>
                        <div class="col-4 item">
                            <a href="#" class="col-md-12 item-content whatsapp">
                                <i class="uil uil-whatsapp"></i>
                                <span class="title">Whatsapp</span>
                                <span class="subtitle">085718492746</span>
                            </a>
                        </div>
                    </div>
                    <form action="">
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label>Nama Depan</label>
                                <input type="text" class="form-control" placeholder="Masukkan Nama Depan">
                            </div>
                            <div class="form-group col-md-6">
                                <label>Nama Belakang</label>
                                <input type="text" class="form-control" placeholder="Masukkan Nama Belakang">
                            </div>
                            <div class="form-group col-md-6">
                                <label>Alamat E-Mail</label>
                                <input type="email" class="form-control" placeholder="Masukkan Alamat E-Mail">
                            </div>
                            <div class="form-group col-md-6">
                                <label>No. Telepon</label>
                                <input type="number" class="form-control" placeholder="Masukkan No. Telepon">
                            </div>
                            <div class="form-group col-md-12">
                                <label>Pesan</label>
                                <textarea class="form-control" rows="3" placeholder="Masukkan Pesan"></textarea>
                            </div>
                        </div>
                        <button class="btn bg-main w-100">Kirim Pesan <i class="uil uil-message ms-1"></i></button>
                    </form>
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
.contact {
    .container {
        background: url("@/assets/images/backgrounds/3.png") no-repeat;
        background-position: center;
        background-size: cover;
        border-radius: 20px;
        position: relative;
        height: 90vh;
        padding: 20px;
    }
    .header-mobile {
        display: none;
    }
    .image {
        .maps-iframe {
            width: 100%;
            margin-top: 20px;
            border-radius: 10px;
            height: 590px;
        }
    }
    .text {
        .header-desktop {
            color: $white;
            h1 {
                text-transform: uppercase;
            }
        }
        .item {
            margin-bottom: 20px;
            .item-content {
                text-align: center;
                color: $white;
                border-radius: 10px;
                background: rgba(255, 255, 255, 0.2);
                backdrop-filter: blur(5px);
                padding: 10px;
                display: block;
                text-decoration: none;

                i {
                    font-size: 30px;
                }
                span {
                    display: block;
                }
                .title {
                    text-transform: uppercase;
                }
            }
            .email {
                background: rgb(187, 32, 25);
                background: linear-gradient(
                    143deg,
                    rgba(187, 32, 25, 1) 27%,
                    rgba(234, 66, 55, 1) 100%
                );
            }
            .phone {
                background: rgb(52, 152, 219);
                background: linear-gradient(
                    143deg,
                    rgba(52, 152, 219, 1) 27%,
                    rgba(127, 192, 236, 1) 100%
                );
            }

            .whatsapp {
                background: rgb(37, 202, 67);
                background: linear-gradient(
                    54deg,
                    rgba(37, 202, 67, 1) 23%,
                    rgba(93, 243, 120, 1) 100%
                );
            }
        }
        form {
            position: relative;
            label {
                color: $white;
            }

            button {
                font-size: 20px;
            }
        }
    }
}
@media screen and (max-width: 768px) {
    .contact {
        padding: 20px 0 170px 0;
        .header-mobile {
            color: $white;
            display: block;
            text-align: center;
            h1 {
                text-transform: uppercase;
            }
            span {
                font-size: 15px;
            }
        }
        .image {
            .maps-iframe {
                width: 100%;
                margin-top: 20px;
                border-radius: 10px;
                height: 170px;
            }
        }
        .text {
            .header-desktop {
                display: none;
            }
            .item {
                padding: 5px;
                .item-content {
                    padding: 5px;
                    span {
                        font-size: 11px;
                    }
                }
            }
            form {
                margin-bottom: 80px;
                button {
                    font-size: 15px;
                }
            }
        }
    }
}
</style>