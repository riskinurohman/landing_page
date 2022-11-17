<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col-lg-12">
        <h1 style="font-weight: 700">WHAT DO <span class="text-purple">THEY THINK? <i class="fa fa-comments"></i></span></h1>
        <carousel 
          :navigationEnabled="true" 
          class="mt-5" 
          :perPage="4" 
          :autoplay="true"
          :autoplayHoverPause="true">
          <slide>
            <div class="text-center">
              <img :src="person1" class="img-carousel"/>
              <div class="p-wrapper m-auto">
                <p class="mt-3">
                  <i>Great website for learning programming. Learn programming never be so easy like this.</i>
                </p>
              </div>
              <Rating :stars="5" :readonly="true" :cancel="false" :value="5"/>
            </div>
          </slide>
          <slide>
            <div class="text-center">
              <img :src="person2" class="img-carousel"/>
              <div class="p-wrapper m-auto">
                <p class="mt-3">
                  <i>Great website for learning programming. Learn programming never be so easy like this.</i>
                </p>
              </div>
              <Rating :stars="5" :readonly="true" :cancel="false" :value="4"/>
            </div>
          </slide>
          <slide>
            <div class="text-center">
              <img :src="person3" class="img-carousel"/>
              <div class="p-wrapper m-auto">
                <p class="mt-3">
                  <i>Great website for learning programming. Learn programming never be so easy like this.</i>
                </p>
              </div>
              <Rating :stars="5" :readonly="true" :cancel="false" :value="5"/>
            </div>
          </slide>
          <slide>
            <div class="text-center">
              <img :src="person1" class="img-carousel"/>
              <div class="p-wrapper m-auto">
                <p class="mt-3">
                  <i>Great website for learning programming. Learn programming never be so easy like this.</i>
                </p>
              </div>
              <Rating :stars="5" :readonly="true" :cancel="false" :value="4"/>
            </div>
          </slide>
          <slide>
            <div class="text-center">
              <img :src="person2" class="img-carousel"/>
              <div class="p-wrapper m-auto">
                <p class="mt-3">
                  <i>Great website for learning programming. Learn programming never be so easy like this.</i>
                </p>
              </div>
              <Rating :stars="5" :readonly="true" :cancel="false" :value="4"/>
            </div>
          </slide>
          <slide>
            <div class="text-center">
              <img :src="person3" class="img-carousel"/>
              <div class="p-wrapper m-auto">
                <p class="mt-3">
                  <i>Great website for learning programming. Learn programming never be so easy like this.</i>
                </p>
              </div>
              <Rating :stars="5" :readonly="true" :cancel="false" :value="4"/>
            </div>
          </slide>
        </carousel>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col-lg-6 d-flex">
        <div class="align-self-center">
          <h1 style="font-weight: 700">IT'S TOTALLY <span class="text-danger">FREE <i class="fas fa-fire-alt"></i></span></h1>
          <h3>Learn much course as much as you want with no pain about payment.</h3>
          <h3>Only a few step to enjoy our facilities and there you go!</h3>
          <div class="mt-4 text-center">
            <Button label="Primary" class="p-button-rounded d-block" style="width: 100%">Learn More</Button>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <img :src="freeIllustration" class="img-fluid"/>
      </div>
    </div>
  </div>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel'
import Person1 from "../assets/images/person1.jpg"
import Person2 from "../assets/images/person2.jpg"
import Person3 from "../assets/images/person3.jpg"
import FreeIllustration from "../assets/images/money-investment.svg"

export default {
  name: 'TestimonyPage',
  components: {
    Carousel,
    Slide
  },
  data: function() {
    return {
      person1: Person1,
      person2: Person2,
      person3: Person3,
      freeIllustration: FreeIllustration
    }
  }
}
</script>
<style>
  .img-carousel {
    border-radius: 50%;
    width: 210px;
    height: 200px;
  }
  .p-wrapper {
    width: 75%;
  }
  .text-purple {
    color: #8B5CF6;
  }
</style>
