<template>
  <footer>
    <div class="container p-4">
      <div class="row">
        <!-- cyrberse info -->
        <div class="col-md-3">
          <h2 class="text-main py-4 fs-1">Cyberse</h2>
          <p class="text-white text-justify lh-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque explicabo corrupti officiis cupiditate exercitationem? Maiores dolorum animi amet quas suscipit natus. Tempore similique asperiores explicabo?
          </p>
        </div>
        <div class="col-md-3">
          <h4 class="text-white p-4 fs-3">Metaverse</h4>
          <ul class="list-style list-unstyled px-4">
            <li class="d-flex">
              <div>
                <img src="@/assets/images/footer/2.png" width="40px" alt="" />
              </div>
              <a href="">Beranda</a>
            </li>
            <li class="d-flex">
              <div>
                <img src="@/assets/images/footer/2.png" width="40px" alt="" />
              </div>
              <a href="">Timeline</a>
            </li>
            <li class="d-flex">
              <div>
                <img src="@/assets/images/footer/2.png" width="40px" alt="" />
              </div>
              <a href="">Jelajahi Metaverse</a>
            </li>
            <li class="d-flex">
              <div>
                <img src="@/assets/images/footer/2.png" width="40px" alt="" />
              </div>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div class="col-md-3">
          <h4 class="text-white p-4 fs-3">Find Us</h4>
          <ul class="list-style list-unstyled px-4">
            <li class="d-flex">
              <div>
                <i class="uil uil-map"></i>
              </div>
              <span class="mt-1" style="font-size: 0.9rem">Rukan Taman Harapan Indah Jl. Letda Abdul Rozak No. B3 & B5 Palembang Sumatera Selatan 30163, Indonesia</span>
            </li>
            <li class="d-flex">
              <div>
                <i class="uil uil-envelope"></i>
              </div>
              <span class="py-2">Cyberse@gmail.com</span>
            </li>
            <li class="d-flex">
              <div>
                <i class="uil uil-phone"></i>
              </div>
              <span class="py-2">+62883374832</span>
            </li>
          </ul>
        </div>
        <div class="col-md-3">
          <h4 class="text-white p-4 fs-3">Follow Us</h4>
          <ul class="list-style list-unstyled px-4">
            <li>
              <i class="uil uil-instagram"></i>
              <span>Cyberse</span>
            </li>
            <li>
              <i class="uil uil-twitter-alt"></i>
              <span>Cyberse</span>
            </li>
            <li>
              <i class="uil uil-youtube"></i>
              <span>Cyberse Metaverse</span>
            </li>
            <li>
              <i class="uil uil-linkedin-alt"></i>
              <span>Cyberse.inc</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="copyright d-flex justify-content-center p-3 bd text-white lead-4">&Copy 2022 Cyberse Metaver Company. All rights reserved.</div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.text-justify {
  text-align: justify;
}

ul {
  li {
    margin: 10px 0;
    padding: 0.4rem;
    font-size: 1.2rem;
    a {
      text-decoration: none;
      color: rgba($color: white, $alpha: 0.8);
      transition: 0.5s;
      margin: 0 10px;

      &:hover {
        color: rgb(227, 53, 225);
      }
    }
    i {
      font-size: 1.5rem;
      color: rgb(227, 53, 225);
    }
    span {
      color: rgba($color: white, $alpha: 0.8);
      margin: 0 10px;
    }
  }
}
.bd {
  border-top: 1px solid rgb(227, 53, 225);
}
</style>
