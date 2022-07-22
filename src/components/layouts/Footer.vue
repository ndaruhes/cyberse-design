<template>
    <div class="footer">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-md-4 text">
                    <p>Copyright &copy; {{ year }} | All rights reserved.</p>
                </div>
                <div class="col-md-4 socmed">
                    <div class="socmed-content">
                        <a href="https://discord.com/" target="_blank"><img src="@/assets/images/socmed/discord.png" alt="socmed" class="me-3"></a>
                        <a href="https://www.linkedin.com/" target="_blank"><img src="@/assets/images/socmed/linkedin.png" alt="socmed" class="me-3"></a>
                        <a href="https://slack.com/" target="_blank"><img src="@/assets/images/socmed/slack.png" alt="socmed" class="me-3"></a>
                        <a href="https://twitter.com/" target="_blank"><img src="@/assets/images/socmed/twitter.png" alt="socmed"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            year: new Date().getFullYear(),
        };
    },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/variables";
.footer {
    .text {
        position: relative;
        color: $white;
        font-size: 17px;
    }
    .socmed {
        display: flex;
        justify-content: end;
        a {
            img {
                position: relative;
                width: 25px;
            }
        }
    }
}

@media screen and (max-width: 768px) {
    .footer {
        margin: 30px 0 70px 0;
        text-align: center;
        .text {
            font-size: 15px;
        }
        .socmed {
            display: block;

            a {
                img {
                    width: 20px;
                }
            }
        }
    }
}
</style>