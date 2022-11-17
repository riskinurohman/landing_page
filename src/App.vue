<template>
  <div>
    <Header/>
    <Offers/>
    <Testimony/>
    <Partner/>
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import Offers from "./components/Offers.vue"
import Testimony from "./components/Testimony.vue"
import Partner from "./components/Partner.vue"

export default {
  name: 'App',
  components: {
    Header,
    Offers,
    Testimony,
    Partner
  }
}
</script>
