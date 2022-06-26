<template>
  <div class="agenda">
    <!-- agenda title -->
    <h1 class="text-center text-main p-4">Explore Our Timeline</h1>
    <!-- end agenda title -->
    <div class="container">
      <div class="row">
        <div class="col-md-4 bg-card p-2 border-card overflow-hidden">
          <div class="px-4 py-2 w-100">
            <img src="@/assets/images/agenda/future.png" alt="future" class="img-fluid w-50 float-start px-4 mb-1" />
            <h3 class="text-white text-justify">Perkenalan Metaverse</h3>
            <p class="fs-6 text-justify text-white opacity-50">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel molestiae sapiente vitae! Voluptate laborum incidunt eius fugiat. Cum, excepturi pariatur?</p>
          </div>
        </div>
        <div class="col-md-4 bg-card p-2 border-card overflow-hidden">
          <div class="px-4 py-2 w-100">
            <img src="@/assets/images/agenda/3.png" alt="future" class="img-fluid w-50 float-start px-4 mb-1" />
            <h3 class="text-white text-justify">Keuntungan Metaverse</h3>
            <p class="fs-6 text-justify text-white opacity-50">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel molestiae sapiente vitae! Voluptate laborum incidunt eius fugiat. Cum, excepturi pariatur?</p>
          </div>
        </div>
        <div class="col-md-4 bg-card p-2 border-card overflow-hidden">
          <div class="px-4 py-2 w-100">
            <img src="@/assets/images/agenda/technology.png" alt="future" class="img-fluid w-50 float-start px-4 mb-1" />
            <h3 class="text-white text-justify">Teknologi Metaverse</h3>
            <p class="fs-6 text-justify text-white opacity-50">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel molestiae sapiente vitae! Voluptate laborum incidunt eius fugiat. Cum, excepturi pariatur?</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.agenda {
  width: 100%;
  height: 100vh;
  padding: 3rem;
  .text-justify {
    text-align: justify;
  }
  .bg-card {
    border-radius: 1rem;
  }
  .border-card {
    position: relative;
    overflow: hidden;
  }
  .border-card::before {
    content: '';
    top: 25%;
    position: absolute;
    height: 40%;
    width: 100%;
    background-color: rgb(227, 53, 225);
    filter: blur(10px);
    border-radius: 1rem;
    z-index: -2;
    animation: 5s rotation infinite forwards;
    animation-delay: -2s;
  }
  .border-card::after {
    content: '';
    position: absolute;
    inset: 5px;
    z-index: -1;
    background-color: rgba(10, 11, 14, 1);
    border-radius: 1rem;
  }
}

@keyframes rotation {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
