<template>
  <section class="mt-4 bg-purple p-5">
    <div class="container-fluid">
      <h1 class="text-white" style="font-weight: 700" align="center">OUR BELOVED PARTNER <i class="fa fa-heart"></i></h1>
      <div class="row mt-5 g-0">
        <div class="col-lg-3 col-md-6">
          <div align="center" class="text-white">
            <div class="img-container bg-light" :style="`background-image: url(${google})`"></div>
            <h5 class="mt-3">Google</h5>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div align="center" class="text-white">
            <div class="img-container bg-light" :style="`background-image: url(${github})`"></div>
            <h5 class="mt-3">Github</h5>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div align="center" class="text-white">
            <div class="img-container bg-light" :style="`background-image: url(${meta})`"></div>
            <h5 class="mt-3">Meta</h5>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div align="center" class="text-white">
            <div class="img-container bg-light" :style="`background-image: url(${microsoft})`"></div>
            <h5 class="mt-3">Microsoft</h5>
          </div>
        </div>
        <div class="col-lg-4 mt-5 col-md-6">
          <div align="center" class="text-white">
            <div class="img-container bg-light" :style="`background-image: url(${hackerrank})`"></div>
            <h5 class="mt-3">Hacker Rank</h5>
          </div>
        </div>
        <div class="col-lg-4 mt-5 col-md-6">
          <div align="center" class="text-white">
            <div class="img-container bg-light" :style="`background-image: url(${apple})`"></div>
            <h5 class="mt-3">Apple</h5>
          </div>
        </div>
        <div class="col-lg-4 mt-5 col-md-6">
          <div align="center" class="text-white">
            <div class="img-container bg-light" :style="`background-image: url(${linux})`"></div>
            <h5 class="mt-3">Linux</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Google from "../assets/images/google.png"
import Github from "../assets/images/github.png"
import Meta from "../assets/images/meta.png"
import Microsoft from "../assets/images/microsoft.png"
import Hackerrank from "../assets/images/hackerrank.png"
import Apple from "../assets/images/apple.png"
import Linux from "../assets/images/linux.png"

export default {
  name: 'PartnerPage',
  data: function() {
    return {
      google: Google,
      github: Github,
      meta: Meta,
      microsoft: Microsoft,
      hackerrank: Hackerrank,
      apple: Apple,
      linux: Linux
    }
  }
}
</script>
<style scoped>
  .img-container {
    background-repeat: no-repeat;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-size: contain;
    background-position: center;
    background-origin: content-box;
    padding-left: 20px;
    padding-right: 20px;
    max-width: 100%;
    max-height: 100%;
  }
  .text-purple {
    color: #8B5CF6;
  }
  .bg-purple {
    background-color: #8B5CF6;
  }
</style>
