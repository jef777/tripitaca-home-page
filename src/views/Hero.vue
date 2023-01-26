<template>
  <div class="hero-banner-area hero-background-section d-flex">
    <div
      class="container-fluid d-flex justify-content-start container-position"
    >
      <div class="row align-items-center w-100">
        <div class="col-lg-6 banner-section">
          <div class="banner-content mb-30">
            <span class="thin">visit Amazing Places</span>

            <div class="section-title mb-40">
              <h1 class="">
                <span class="thin drop-shadow"
                  >LET'S GET<span class="normal"> TRIPPY</span></span
                >
                <br />
              </h1>
              <span class="thin fw-bold"
                >Start paying for your trips in installments Today!</span
              >
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-xl-5">
          <BookingForm />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BookingForm from '../components/BookingForm.vue'
export default {
  components: { BookingForm },
  name: 'Hero',
}
</script>
<style scoped>
.hero-banner-area {
  background-color: rgb(229, 244, 244);
  height: 100vh;
}
.container-position {
  align-self: center !important;
}
.hero-background-section:before {
  content: '';
  background-image: url('@/assets/hero-bg-image.jpg');
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  position: absolute;
  opacity: 15%;
  /* -webkit-animation: zoom-in-zoom-out-data-v-046fb5ba 50s ease-out infinite;
  animation: zoom-in-zoom-out-data-v-046fb5ba 50s ease-out infinite; */
}

.banner-section {
  padding-left: 49px;
}

img {
  max-width: 100%;
  height: auto;
}

.hero-banner-area {
  position: relative;
  overflow: hidden;
  height: 100vh;
}
.hero-banner-area .banner-content {
  max-width: 600px;
  margin-left: auto;
}

.hero-banner-area .banner-content h1 {
  font-size: 70px;
  color: #090031;
  margin-top: 0px;
  margin-bottom: 20px;
  line-height: 1;
}
.hero-banner-area .banner-content p {
  font-size: 18px;
  color: #39325a;
  margin-bottom: 35px;
}
@media only screen and (max-width: 767px) {
  .container-position {
    align-self: end !important;
    padding-bottom: 35px;
  }
}
</style>
