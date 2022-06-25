<template>
    <div class="kind">
        <div class="container">
            <div class="row">
                <div class="col-md-4 kind-wrapper">
                    <div class="kind-content col-md-12">
                        <div class="header">
                            <span>Bitcoin</span>
                            <img src="@/assets/images/kinds/asset1.png" alt="image">
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, odio dolores! Ea quibusdam voluptas facere eligendi possimus deleniti quisquam molestiae ullam, autem, sed, adipisci explicabo placeat.</p>
                    </div>
                </div>
                <div class="col-md-4 kind-wrapper">
                    <div class="kind-content col-md-12">
                        <div class="header">
                            <span>Virtual Reality</span>
                            <img src="@/assets/images/kinds/asset2.png" alt="image">
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, odio dolores! Ea quibusdam voluptas facere eligendi possimus deleniti quisquam molestiae ullam, autem, sed, adipisci explicabo placeat.</p>
                    </div>
                </div>
                <div class="col-md-4 kind-wrapper">
                    <div class="kind-content col-md-12">
                        <div class="header">
                            <span>Communication</span>
                            <img src="@/assets/images/kinds/asset3.png" alt="image">
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, odio dolores! Ea quibusdam voluptas facere eligendi possimus deleniti quisquam molestiae ullam, autem, sed, adipisci explicabo placeat.</p>
                    </div>
                </div>

                <div class="col-md-4 kind-wrapper">
                    <div class="kind-content col-md-12">
                        <div class="header">
                            <span>Shopping</span>
                            <img src="@/assets/images/kinds/asset4.png" alt="image">
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, odio dolores! Ea quibusdam voluptas facere eligendi possimus deleniti quisquam molestiae ullam, autem, sed, adipisci explicabo placeat.</p>
                    </div>
                </div>
                <div class="col-md-4 kind-wrapper img-center">
                    <!-- <div class="kind-content col-md-12">
                        <div class="header">
                            <span>Bitcoin</span>
                            <img src="@/assets/images/kinds/asset1.png" alt="image">
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, odio dolores! Ea quibusdam voluptas facere eligendi possimus deleniti quisquam molestiae ullam, autem, sed, adipisci explicabo placeat.</p>
                    </div> -->
                </div>
                <div class="col-md-4 kind-wrapper">
                    <div class="kind-content col-md-12">
                        <div class="header">
                            <span>Chatting</span>
                            <img src="@/assets/images/kinds/asset5.png" alt="image">
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, odio dolores! Ea quibusdam voluptas facere eligendi possimus deleniti quisquam molestiae ullam, autem, sed, adipisci explicabo placeat.</p>
                    </div>
                </div>

                <div class="col-md-4 kind-wrapper">
                    <div class="kind-content col-md-12">
                        <div class="header">
                            <span>Bitcoin</span>
                            <img src="@/assets/images/kinds/vr.png" alt="image">
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, odio dolores! Ea quibusdam voluptas facere eligendi possimus deleniti quisquam molestiae ullam, autem, sed, adipisci explicabo placeat.</p>
                    </div>
                </div>
                <div class="col-md-4 kind-wrapper">
                    <div class="kind-content col-md-12">
                        <div class="header">
                            <span>Bitcoin</span>
                            <img src="@/assets/images/kinds/vr.png" alt="image">
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, odio dolores! Ea quibusdam voluptas facere eligendi possimus deleniti quisquam molestiae ullam, autem, sed, adipisci explicabo placeat.</p>
                    </div>
                </div>
                <div class="col-md-4 kind-wrapper">
                    <div class="kind-content col-md-12">
                        <div class="header">
                            <span>Bitcoin</span>
                            <img src="@/assets/images/kinds/vr.png" alt="image">
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, odio dolores! Ea quibusdam voluptas facere eligendi possimus deleniti quisquam molestiae ullam, autem, sed, adipisci explicabo placeat.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.kind {
    .kind-wrapper {
        margin: 10px 0;
        .kind-content {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(4px);
            padding: 20px;
            border-radius: 10px;
            color: white;

            .header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                span {
                    font-size: 20px;
                }
                img {
                    width: 40px;
                    // margin-right: 10px;
                    margin-bottom: 10px;
                }
            }

            p {
                margin: 0;
                text-align: justify;
            }
        }
    }
    .img-center {
        background-size: contain;
        background: url("@/assets/images/intro/square.png");
        background-repeat: no-repeat;
        background-position: center;
    }
}
</style>