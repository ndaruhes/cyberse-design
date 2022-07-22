<template>
  <div class="community">
    <div class="container">
      <div class="header">
        <h1 class="text-main">Cyberse Community</h1>
        <span>Ayo bermain dan berdikusi tentang seputar dunia metaverse dalam ruang komunitas Cyberse</span>
      </div>

      <div class="socmed">
        <div class="row">
          <div class="col-md-3 col-6 item">
            <a href="#" class="content-item discord">
              <div class="row align-items-center">
                <div class="col-4 icon">
                  <i class="uil uil-discord"></i>
                </div>
                <div class="col-8 text">
                  Discord <br />
                  Community
                </div>
              </div>
            </a>
          </div>
          <div class="col-md-3 col-6 item">
            <a href="#" class="content-item linkedin">
              <div class="row align-items-center">
                <div class="col-4 icon">
                  <i class="uil uil-linkedin"></i>
                </div>
                <div class="col-8 text">
                  LinkedIn <br />
                  Community
                </div>
              </div>
            </a>
          </div>
          <div class="col-md-3 col-6 item">
            <a href="#" class="content-item slack">
              <div class="row align-items-center">
                <div class="col-4 icon">
                  <i class="uil uil-slack"></i>
                </div>
                <div class="col-8 text">
                  Slack <br />
                  Community
                </div>
              </div>
            </a>
          </div>
          <div class="col-md-3 col-6 item">
            <a href="#" class="content-item twitter">
              <div class="row align-items-center">
                <div class="col-4 icon">
                  <i class="uil uil-twitter"></i>
                </div>
                <div class="col-8 text">
                  Twitter <br />
                  Community
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div class="video">
        <div class="row">
          <div class="col-md-6">
            <iframe
              src="https://www.youtube.com/embed/8J2M1H2GEhE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              class="iframe-left"
            ></iframe>
          </div>
          <div class="col-md-6">
            <div class="row">
              <div class="col-6">
                <iframe
                  src="https://www.youtube.com/embed/bR8HtBM6F18"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  class="iframe-right"
                ></iframe>
              </div>
              <div class="col-6">
                <iframe
                  src="https://www.youtube.com/embed/KLOcj5qvOio"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  class="iframe-right"
                ></iframe>
              </div>
              <div class="col-6">
                <iframe
                  src="https://www.youtube.com/embed/HgIwgtN7xgU"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  class="iframe-right"
                ></iframe>
              </div>
              <div class="col-6">
                <iframe
                  src="https://www.youtube.com/embed/rtLTZUaMSDQ"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  class="iframe-right"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/sass/variables';
.community {
  .container {
    height: 90vh;
    // background: url("@/assets/images/community/2.png") no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 20px;
    position: relative;
    padding: 20px;
    .header {
      color: $white;
      margin-bottom: 40px;
      text-align: center;
      h1 {
        text-transform: uppercase;
      }
      span {
        font-size: 20px;
        display: block;
      }
    }
    .socmed {
      .item {
        .content-item {
          color: $white;
          display: block;
          text-decoration: none;
          border-radius: 10px;
          .icon {
            font-size: 70px;
            text-align: center;
          }
          .text {
            font-size: 25px;
          }
        }

        .discord {
          background: #485ef4;
        }
        .linkedin {
          background: #0077b5;
        }
        .slack {
          background: #491447;
        }
        .twitter {
          background: #5d9aea;
        }
      }
    }
    .video {
      margin-top: 40px;
      iframe {
        border-radius: 10px;
        width: 100%;
      }
      .iframe-left {
        height: 360px;
      }
      .iframe-right {
        margin-bottom: 20px;
        height: 170px;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .community {
    padding: 0 0 220px 0;
    .container {
      .header {
        margin-bottom: 40px;
        h1 {
          font-size: 23px;
        }
        span {
          font-size: 15px;
        }
      }
      .socmed {
        .item {
          .content-item {
            margin-bottom: 20px;
            .icon {
              font-size: 45px;
              text-align: center;
              padding: 0 20px;
            }
            .text {
              font-size: 14px;
            }
          }
        }
      }
      .video {
        margin-top: 0;
        iframe {
          border-radius: 10px;
          width: 100%;
        }
        .iframe-left {
          height: 180px;
          margin-bottom: 10px;
        }
        .iframe-right {
          margin-bottom: 10px;
          height: 85px;
        }
      }
    }
  }
}
</style>
