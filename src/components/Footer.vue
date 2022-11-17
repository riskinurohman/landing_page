<template>
  <div>
    <footer class="bg-dark text-white p-3">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-4 mb-3">
            <h3 style="font-weight: 700">CoderManiac Course <i class="fa fa-rocket"></i></h3>
            <p style="text-align: justify"><i class="fa fa-map"></i> Tifa Arum Realty, Jl. Kuningan Bar. 1 No.26, RT.6/RW.1, Kuningan Bar., Kec. Mampang Prpt., Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12710</p>
            <span>Copyright {{new Date().getFullYear()}}&copy;All rights reserved</span>
            <div class="mt-3">
              <h5 style="font-weight: 600">Follow Our Social Media</h5>
              <div class="d-flex">
                <a href="javascript:void(0)">
                  <img :src="twitter" class="img-fluid" style="width: 35px"/>
                </a>
                <a href="javascript:void(0)" class="ms-3">
                  <img :src="facebook" class="img-fluid" style="width: 35px"/>
                </a>
                <a href="javascript:void(0)" class="ms-3">
                  <img :src="ig" class="img-fluid" style="width: 35px"/>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mb-3">
            <h3 style="font-weight: 700">Related Links <i class="fa fa-link"></i></h3>
            <ul style="list-style-type: none; padding: 0">
              <li><a href="javascript:void(0)" class="text-white">About Us</a></li>
              <li class="pt-2"><a href="javascript:void(0)" class="text-white">Download Our Brochure</a></li>
              <li class="pt-2"><a href="javascript:void(0)" class="text-white">FAQ</a></li>
              <li class="pt-2"><a href="javascript:void(0)" class="text-white">Become Our Partner</a></li>
              <li class="pt-2"><a href="javascript:void(0)" class="text-white">Subscribe</a></li>
              <li class="pt-2"><a href="javascript:void(0)" class="text-white">Supprt & Community</a></li>
            </ul>
          </div>
          <div class="col-lg-4">
            <h3 style="font-weight: 700" class="mb-3">Get In Touch <i class="fas fa-phone-volume"></i></h3>
            <form>
              <div class="form-group">
                <span class="p-input-icon-left d-inline">
                  <i class="pi pi-user" />
                  <InputText type="text" placeholder="Your name" class="p-inputtext-sm w-100"/>
                </span>
              </div>
              <div class="form-group mt-2">
                <span class="p-input-icon-left d-inline">
                  <i class="pi pi-envelope" />
                  <InputText type="email" placeholder="Your email" class="p-inputtext-sm w-100"/>
                </span>
              </div>
              <div class="form-group mt-2 mb-2">
                <textarea class="form-control" placeholder="Your message" rows="1"></textarea>
              </div>
              <Button label="Submit" class="p-button-rounded p-button-sm" />
            </form>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import Twitter from "../assets/images/twitter.png"
import Facebook from "../assets/images/fb.png"
import IG from "../assets/images/ig.png"

export default {
  name: 'FooterComponent',
  data: function() {
    return {
      twitter: Twitter,
      facebook: Facebook,
      ig: IG
    }
  }
}
</script>
