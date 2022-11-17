<template>
  <div>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-purple">
      <div class="container-fluid">
        <a class="navbar-brand text-white" href="#" style="font-weight: 900"><i class="fa fa-rocket "></i> CmC</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active text-white" aria-current="page" href="#"><i class="fa fa-home"></i> Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#"><i class="fas fa-briefcase"></i> Offering</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#"><i class="fas fa-handshake"></i> Partnership</a>
            </li>
          </ul>
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active text-white" aria-current="page" href="#"><i class="fas fa-headset"></i> Support Center</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#"><i class="fa fa-user"></i> Sign In</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>  
    <!-- End Navigation -->

    <!-- Banner Section -->
    <section class="container">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-12">
          <img :src="headerImage" class="img-fluid"/>
        </div>
        <div class="col-lg-6 col-md-6 col-12 d-flex">
          <div class="align-self-center">
            <h1
              style="font-size: 3.5em; font-weight: 700"><span class="text-purple">Coder</span><span class="text-danger">Maniac</span> Course</h1>
            <h5>Start Your Journey To Learn Programming Here. It's Free! <i class="fas fa-rocket text-danger"></i></h5>
            <div class="mt-5">
              <span class="p-input-icon-left" style="display: inline">
                <i class="pi pi-search" />
                <InputText type="text" placeholder="Try to search: ReactJS Course" class="input-text-rounded" style="width: 100%"/>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Banner -->
  </div>
</template>
<script>
import HeaderImage from "../assets/images/data-analysis-case-study.svg"
export default {
  name: 'HeaderComponent',
  data: function() {
    return {
      headerImage: HeaderImage
    }
  }
}
</script>
<style scoped>
  .input-text-rounded {
    border-radius: 30px;
  }
  .navbar-purple {
    background-color: #8B5CF6;
  }
  .text-purple {
    color: #8B5CF6;
  }
</style>
