<template>
  <div class="explore">
    <div class="container">
      <div class="back-section" data-aos="zoom-in-up">
        <button type="button" @click="checkHistory() ? $router.go(-1) : $router.push('/')" class="btn text-greenGradient">&laquo; Kembali</button>
      </div>
      <div class="heading" data-aos="zoom-in-down">
        <span class="title text-greenGradient">Mau Yang Mana Dulu Nih</span>
        <span class="subtitle">Siap Berpetualang? Pilihlah informasi dunia metaverse untuk memulainya</span>
      </div>
      <div class="row">
        <router-link to="/intro" class="col-md-3 col-6 option" data-aos="zoom-in">
          <div class="col-md-12 option-content">
            <img src="@/assets/images/menu/1.png" alt="explore" />
            <span class="title text-main">Perkenalan Metaverse</span>
            <span class="subtitle">Pilih menu ini untuk mengetahui apa itu metaverse</span>
          </div>
        </router-link>
        <router-link to="/history" class="col-md-3 col-6 option" data-aos="zoom-in">
          <div class="col-md-12 option-content">
            <img src="@/assets/images/menu/2.png" alt="explore" />
            <span class="title text-main">Sejarah Metaverse</span>
            <span class="subtitle">Pilih menu ini untuk menjelajahi sejarah metaverse</span>
          </div>
        </router-link>
        <router-link to="/technology" class="col-md-3 col-6 option" data-aos="zoom-in">
          <div class="col-md-12 option-content">
            <img src="@/assets/images/menu/3.png" alt="explore" />
            <span class="title text-main">Teknologi Metaverse</span>
            <span class="subtitle">Pilih menu ini untuk mengetahui teknologi metaverse</span>
          </div>
        </router-link>
        <router-link to="/activities" class="col-md-3 col-6 option" data-aos="zoom-in">
          <div class="col-md-12 option-content">
            <img src="@/assets/images/menu/4.png" alt="explore" />
            <span class="title text-main">Kegiatan Metaverse</span>
            <span class="subtitle">Pilih menu ini untuk mengetahui berbagai kegiatan metaverse</span>
          </div>
        </router-link>
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
@import '@/assets/sass/variables';
.explore {
  padding: 40px 0 70px 0;
  .back-section {
    margin-bottom: 35px;
    button {
      position: relative;
    }
  }
  .heading {
    margin-bottom: 40px;
    span {
      display: block;
      text-align: center;
      position: relative;
    }
    .title {
      font-size: 35px;
    }
    .subtitle {
      color: $white;
      font-size: 23px;
    }
  }

  .option {
    display: block;
    text-decoration: none;
    .option-content {
      padding: 20px;
      overflow: hidden;
      position: relative;
      border-radius: 1rem;
      img {
        width: 100%;
        position: relative;
        margin-bottom: 20px;
      }

      span {
        display: block;
        text-align: center;
        position: relative;
        color: $white;
      }

      .title {
        font-size: 20px;
      }

      &::before {
        content: '';
        top: 25%;
        position: absolute;
        height: 65%;
        width: 100%;
        background-color: rgb(227, 53, 225);
        filter: blur(10px);
        border-radius: 1rem;
        z-index: -2;
        animation: 5s rotation infinite forwards;
        animation-delay: -2s;
      }
      &::after {
        content: '';
        position: absolute;
        inset: 5px;
        z-index: -1;
        background-color: rgba(10, 11, 14, 1);
        border-radius: 1rem;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .explore {
    padding: 10px 0 55px 0;
    .back-section {
      margin-bottom: 25px;
    }
    .heading {
      margin-bottom: 20px;
      .title {
        font-size: 18px;
      }
      .subtitle {
        font-size: 13px;
      }
    }

    .option {
      padding: 0;
      .option-content {
        padding: 10px;
        img {
          margin-bottom: 10px;
        }
        .title {
          font-size: 14px;
          margin-bottom: 5px;
        }
        .subtitle {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
