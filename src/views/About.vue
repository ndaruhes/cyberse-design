<template>
  <section class="about">
    <Navbar />
    <!-- about isi -->
    <div class="container">
      <div class="row">
        <div class="col-md-6 p-0 py-md-4 px-md-2">
          <h1 class="display-1 text-main my-4">Cyberse</h1>
          <p class="fsd text-white lh-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae rerum fugiat sequi perferendis exercitationem excepturi rem incidunt.</p>
          <p class="fsd text-white lh-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In dolore earum quia, fuga alias sapiente! Placeat quidem distinctio aut vitae deleniti autem dolor accusamus voluptatibus esse, tempora nam quia eos.
          </p>
          <p class="fsd text-white lh-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. In dolore earum quia, fuga alias sapiente! Placeat quidem distinctio aut vitae deleniti autem dolor accusamus.</p>
          <div class="row align-items-md-start align-items-center">
            <!-- ndaru -->
            <div class="col-md-6">
              <div class="row">
                <div class="col-4">
                  <img src="@/assets/images/about/ndaru.png" alt="" class="w-100 img-fluid" />
                </div>
                <div class="col-8 py-2 text-white">
                  <h6>Muhammad Ndaru</h6>
                  <div>
                    <i class="uil uil-linkedin"></i>
                    <span>ndaru hes</span>
                  </div>
                  <div>
                    <i class="uil uil-github"></i>
                    <span>ndaru hes</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- galvin -->
            <div class="col-md-6">
              <div class="row">
                <div class="col-4">
                  <img src="@/assets/images/about/galvin.png" alt="" class="img-fluid w-100" />
                </div>
                <div class="col-8 text-white py-2">
                  <h6>Galvin Santoso</h6>
                  <div>
                    <i class="uil uil-linkedin"></i>
                    <span>Galvin Santoso</span>
                  </div>
                  <div>
                    <i class="uil uil-github"></i>
                    <span>GalvinSantoso</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 p-4 d-none align-items-center d-md-flex">
          <img src="@/assets/images/about/bg.png" alt="" class="w-100" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from '@/components/layouts/Navbar.vue';
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
  .fsd {
    font-size: 1rem;
    text-align: justify;
  }
  i {
    color: rgb(227, 53, 225);
  }
  span {
    margin-left: 10px;
  }
}

@media screen and (max-width: 768px) {
  .about {
    overflow: visible;

    .fsd {
      font-size: 0.8rem;
    }
  }
}
</style>
