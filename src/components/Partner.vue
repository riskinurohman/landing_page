<template>
  <section class="mt-4 bg-purple p-5">
    <div class="container-fluid">
      <h1 class="text-white" style="font-weight: 700" align="center">OUR BELOVED PARTNER <i class="fa fa-heart"></i></h1>
      <div class="row mt-5 g-0">
        <div :class="partner.colSize" v-for="(partner, index) in partners" :key="index">
          <div align="center" class="text-white">
            <div class="img-container bg-light" :style="`background-image: url(${partner.image})`"></div>
            <h5 class="mt-3">{{ partner.name }}</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Partners from "../json/partners.json"

export default {
  name: 'PartnerPage',
  data: function() {
    return {
      partners: Partners
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
