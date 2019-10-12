<template>
  <div class="header-content auto-init height-is-based-on-content use-loading mode-scroll" style="">
    <div class="container space-2 space-md-3">
      <div class="text-center w-lg-80 mx-auto">
        <h1 class="rocky-dashed animate-pop-in text-white display-1 font-size-md-down-5 font-weight-semi-bold">Welcome to the <span class="library-green">DevOps Library</span></h1>
      </div>

      <div class="text-center w-lg-40 mx-auto">
        <p class="lead header-subtitle animate-pop-in">We're glad you found yourself here!  Enjoy our free video courses, articles, and tools for the DevOps Community.</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "HeroSection.vue"
    }
</script>

<style scoped>
  .header-content {
    align-items: center;
    display: flex;
    font-size: 18px;
    height: 100vh;
    justify-content: center;
    overflow: hidden;
    position: relative;
    text-align: center;
    transform-style: preserve-3d;
    perspective: 100px;
  }

  .header-content:before {
    animation: fade-slide-down 2s .5s cubic-bezier(0, 0.5, 0, 1) forwards;
    background: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.8)),
    url(lib3.jpg) no-repeat bottom;
    background-size: cover;
    content: "";
    opacity: 0;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  }

  .header-content:after {
    animation: rotate-up .5s .5s cubic-bezier(0, 0.5, 0, 1) forwards;
    background: #F9FCFF;
    content: "";
    height: 40rem;
    position: absolute;
    top: 90%;
    transform-origin: 0 0;
    z-index: 0;
  }

  .header-subtitle {
    margin-bottom: 5rem;
  }

  .animate-pop-in {
    animation: pop-in .6s cubic-bezier(0, 0.9, 0.3, 1.2) forwards;
    opacity: 0;
  }

  .rocky-dashed {
    animation-delay: .6s;
  }

  .header-subtitle {
    animation-delay: 1s;
  }

  /* Animations */

  @keyframes fade-slide-down {
    0% {
      opacity: 0;
      transform: translateY(-4rem);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }

  @keyframes pop-in {
    0% {
      opacity: 0;
      transform: translateY(-4rem) scale(.8);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }

  @keyframes rotate-up {
    100% {
      transform: rotateZ(-4deg);
    }
  }
</style>
