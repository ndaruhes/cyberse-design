<template>
  <div class="history">
    <img src="@/assets/images/backgrounds/2.png" alt="background" class="background" />
    <div class="container">
      <div class="back-section">
        <button type="button" @click="checkHistory() ? $router.go(-1) : $router.push('/')" class="btn text-greenGradient">&laquo; Kembali</button>
      </div>
      <div class="row align-items-center">
        <div class="col-md-6 image">
          <img src="@/assets/images/image-shape/asset1.png" alt="image" />
        </div>
        <div class="col-md-6 text">
          <h1 class="heading">Sejarah <span class="text-main fw-bold">Metaverse</span></h1>
          <p>
            Konsep Metaverse diperkenalkan pertama kali dalam novel yang berjudul "Snow Crash" karya Neal Spehenson pada tahun 1992. Novel Snow Crash membahas berbagai manusias yang berinteraksi sebagai avatar dalam ruang virtual tiga
            dimensi.
          </p>
          <p>
            Film "Ready Player One" juga menjadi aspek yang berpengaruh dalam memperkenalkan dunia metaverse. Dalam film tersebut menampilkan berbagai manusia memnggunakan teknologi VR untuk masuk dan bermain ke dalam dunia yang disebut
            OASIS. Konsep Metaverse diperkuat dengan Facebook mengganti nama menjadi "Meta" dan Mark Zuckerberg mengeluarkan platform bernama Mesh
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Mixins from '@/mixins';
export default {
  mixins: [Mixins],
};
</script>

<style lang="scss" scoped>
@import '@/assets/sass/variables.scss';
.history {
  .background {
    width: 90%;
    position: absolute;
    left: 5%;
    bottom: 0;
    z-index: 999;
    opacity: 0.1;
  }
  .back-section {
    margin-bottom: 35px;
    button {
      z-index: 1000;
      position: relative;
    }
  }
  .text {
    .heading {
      position: relative;
      margin-bottom: 20px;
      text-transform: uppercase;
      color: $white;
    }
    p {
      color: $white;
      font-size: 20px;
    }
  }
  .image {
    text-align: center;
    img {
      width: 95%;
      position: relative;
      z-index: 1000;
    }
  }
}

@media screen and (max-width: 768px) {
  .history {
    padding: 0 0 80px 0;
    .back-section {
      margin-bottom: 25px;
    }

    .text {
      .heading {
        margin-bottom: 20px;
      }
      p {
        font-size: 15px;
      }
    }
    .image {
      margin-bottom: 20px;
      img {
        width: 90%;
        margin-left: 5%;
      }
    }
  }
}
</style>
