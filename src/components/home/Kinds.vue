<template>
    <div class="kinds">
        <div class="container">
            <div class="row">
                <div class="col-md-4 kind-wrapper">
                    <div class="kind-content col-md-12">
                        <img src="@/assets/images/kinds/asset1.png" alt="image">
                    </div>
                </div>
                <div class="col-md-4 kind-wrapper">
                    <div class="kind-content col-md-12">
                        <img src="@/assets/images/kinds/asset2.png" alt="image">
                    </div>
                </div>
                <div class="col-md-4 kind-wrapper">
                    <div class="kind-content col-md-12">
                        <img src="@/assets/images/kinds/asset3.png" alt="image">
                    </div>
                </div>

                <div class="col-md-4 kind-wrapper">
                    <div class="kind-content col-md-12 diff1">
                        <img src="@/assets/images/kinds/asset4.png" alt="image">
                    </div>
                </div>
                <div class="col-md-4 kind-wrapper img-oke"></div>
                <div class="col-md-4 kind-wrapper">
                    <div class="kind-content col-md-12 diff2">
                        <img src="@/assets/images/kinds/asset5.png" alt="image">
                    </div>
                </div>

                <div class="col-md-4 kind-wrapper">
                    <div class="kind-content col-md-12">
                        <img src="@/assets/images/kinds/asset2.png" alt="image">
                    </div>
                </div>
                <div class="col-md-4 kind-wrapper">
                    <div class="kind-content col-md-12">
                        <img src="@/assets/images/kinds/asset1.png" alt="image">
                    </div>
                </div>
                <div class="col-md-4 kind-wrapper">
                    <div class="kind-content col-md-12">
                        <img src="@/assets/images/kinds/asset4.png" alt="image">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.kinds {
    padding-top: 20px;
    // height: 100vh;
    .kind-wrapper {
        margin: 10px 0;
        display: flex;
        align-items: center;
        .kind-content {
            text-align: center;
            img {
                width: 45%;
            }
        }
        .diff1 {
            text-align: left;
        }
        .diff2 {
            text-align: right;
        }
    }
    .img-oke {
        // background-size: contain !important;
        // background: url("@/assets/images/kinds/neuron.png");
        // background-repeat: no-repeat !important;
        // background-position: center !important;
    }
}
</style>