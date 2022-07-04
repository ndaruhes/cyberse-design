<template>
    <section class="contact">
        <div class="container rounded-4 text-white p-4">
            <!-- judul -->
            <div class="text-center p-4">
                <h1 class="display-3">Get in Touch with Us</h1>
                <p class="desc">Anda punya pertanyaan ? jangan ragu buat kontak ke CS kami yang super ramah!!</p>
            </div>
            <!-- end judul -->
            <div class="row">
                <div class="col-md-4 justify-content-center d-flex">
                    <div class="ctc">
                        <span>Phone Number</span>
                        <i class="uil uil-phone"></i>
                        <span>+6283728372</span>
                    </div>
                </div>
                <div class="col-md-4 justify-content-center d-flex">
                    <div class="ctc">
                        <span>Our Location</span>
                        <i class="uil uil-map"></i>
                        <span>Jakarta, Indonesia</span>
                    </div>
                </div>
                <div class="col-md-4 justify-content-center d-flex">
                    <div class="ctc">
                        <span>Email</span>
                        <i class="uil uil-envelope"></i>
                        <span>Cyberse@gmail.com</span>
                    </div>
                </div>
            </div>
            <form action="submit">
                <div class="row">
                    <div class="col-md-6">
                        <div class="row">
                            <div class="col-md-6" style="padding:0 1rem;">
                                <label for="firstName">First Name</label>
                                <input type="email" placeholder="input your first name.." />
                            </div>
                            <div class="col-md-6" style="padding:0 1rem;">
                                <label for="lastName">Last Name</label>
                                <input type="text" placeholder="input your last name.." />
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label for="comment">Comment</label>
                        <input type="text" placeho>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <label for="email">Email</label>
                        <input type="email" id="email" placeholder="must contain @gmail.com." />
                    </div>
                    <div class="col-md-6">
                        <label for="phone">Phone</label>
                        <input type="text" id="phone" placeholder="must start with +62" />
                    </div>
                </div>
                <button>Submit</button>
            </form>
        </div>
    </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.contact {
    width: 100%;
    height: 91vh;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    z-index: 1000;
    .container {
        background-image: url("@/assets/images/contacts/2.png");
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 1rem;
        .desc {
            color: rgba($color: white, $alpha: 0.6);
        }
        .ctc {
            display: flex;
            flex-direction: column;
            align-items: center;
            background: rgba(227, 53, 225, 0.6);
            padding: 0.5rem 1rem;
            border-radius: 1rem;
            width: 200px;
            i {
                font-size: 2rem;
                margin: 5px 0;
            }
        }
        form {
            padding: 1rem 3rem;
            .col-md-6 {
                display: flex;
                flex-direction: column;
                padding: 1rem;
            }
            label {
                margin-bottom: 5px;
            }
            input {
                padding: 0.5rem;
                color: rgba(227, 53, 225, 1);
            }
            button {
                width: 100%;
                padding: 0.5rem;
                font-size: 1.2rem;
                color: white;
                background-color: rgba(227, 53, 225, 1);
                transition: 0.5s;
                cursor: pointer;
                margin-top: 10px;
                &:hover {
                    opacity: 0.8;
                }
            }
        }
    }
}

@media screen and (max-width: 568px) {
    .contact {
        overflow: visible;
        height: 100%;
        h1 {
            font-size: 1.5rem;
        }
        p {
            font-size: 0.8rem;
        }

        .container {
            background-color: none;
            .ctc {
                margin: 5px 0;
                padding: 0 1rem;
                i {
                    font-size: 1rem;
                }
            }
            form {
                .col-md-6 {
                    display: flex;
                    flex-direction: column;
                    padding: 0.2rem;
                }
                input {
                    padding: 10px;
                }
                button {
                    font-size: 1rem;
                }
            }
        }
    }
}
</style>
