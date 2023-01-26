<template>
  <section id="WhyList" class="pb-70 bg-light">
    <div class="container">
      <div class="row inner-header-section drop-shadow">
        <div class="col-lg-6">
          <div class="section-title drop-shadow">
            <h2>
              Why List <span class="thin">With Us</span>
              <br />
            </h2>
          </div>
        </div>
      </div>
      <div class="section-wrapper">
        <div class="row d-flex flex-column text-start">
          <div class="col-xl-6 col-lg-8 col-md-12 col-sm-12 package-card">
            <div class="d-flex justify-content-center align-items-center">
              <img
                width="50"
                height="50"
                :src="icons.icon1"
                alt=""
                loading="lazy"
                class="color-invert"
              />
            </div>
            <div class="d-flex flex-column">
              <span class="my-3 text-white fw-bold fs-5">Special Package</span>
              <span class="text-white fs-6"
                >Create your own packages and sell them directly to travelers,
                no agents, no middlemen.</span
              >
            </div>
          </div>
          <div class="col-xl-6 col-lg-8 col-md-12 col-sm-12 package-card">
            <div class="d-flex justify-content-center align-items-center">
              <img
                width="50"
                height="50"
                :src="icons.icon2"
                alt=""
                loading="lazy"
                class="color-invert"
              />
            </div>
            <div class="d-flex flex-column">
              <span class="my-3 text-white fw-bold fs-5">Special Package</span>
              <span class="text-white fs-6"
                >Create your own packages and sell them directly to travelers,
                no agents, no middlemen.</span
              >
            </div>
          </div>
          <div class="col-xl-6 col-lg-8 col-md-12 col-sm-12 package-card">
            <div class="d-flex justify-content-center align-items-center">
              <img
                width="50"
                height="50"
                :src="icons.icon3"
                alt=""
                loading="lazy"
                class="color-invert"
              />
            </div>
            <div class="d-flex flex-column">
              <span class="my-3 text-white fw-bold fs-5">Special Package</span>
              <span class="text-white fs-6"
                >Create your own packages and sell them directly to travelers,
                no agents, no middlemen.</span
              >
            </div>
          </div>
          <div class="col-xl-6 col-lg-4 col-md-12 col-sm-12 text-center">
            <a href="#" class="list-property-btn"
              >List Your Property In 60 Sec</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import iconImage from '@/assets/icon3.png'
export default {
  name: 'ListWithUs',
  data() {
    return {
      icons: {
        icon1:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAHlBMVEVMaXEAOmwAOmwAOmwAOmwAOmwAOmwAOmwAOmwAOmxG0OHdAAAACXRSTlMADB83U3yiyOpreCDNAAABuUlEQVR42o3US0/CQBAA4Km2xSPxET0uKgFuaDTGG/ER7a0GX3sDtWBvFRO1N4wa7U0F2p1/67aVsLulxkmakv3S6bAzW/h3rB12g3pmdf6w84SITJaZrfN49d053ZTWt7sBvj+c7heVLNrlo3OwMe2ty4O8emjUkcIhYwlQidexYCbqueLlSj9XPhVhH9MlahZh4WKKRA2+GSU4yoqt3wDwi6oyBAt7YGJPV6UBKxhqPrKGJcsIwMXwacQfNgRJ/3TlysehH34QXxJe2LG9gow2A88SJdIJmH2eh3U6pYIoowIB2r5FfK6s24Yo3zUC5UWeNdShPiNK3+JtNOPq21qLBIJ4lPeqkHSmemX7grRcGzQaZzvzmy1XkpCkj8BC0RbFc/FlbjwARMzWp8h2YknmSazgaxfxjXG53uRdEqsezvGX31vp1uqihAavAozkiGimtKOrAS9Li4d1r1eTpEXxm7eI/7q1XUkGJg7S7Qln5c6xkuulw9GuKnNwZ+wlszbSfEUispPc6pXMvL1BufvoECOQJKX4+C4F0yY+cs666sRP4t/i555GmhH7VwoqRJOviwzsBP6MHw/Mh+yhb5E4AAAAAElFTkSuQmCC',
        icon2:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAG1BMVEVMaXEAOmwAOmwAOmwAOmwAOmwAOmwAOmwAOmwvqFedAAAACXRSTlMA/8ojpUToZoRuSP+WAAACFElEQVR42q1Wi47DMAhbCRD+/4sP8nJJotNOukjb0gYX25B0n69HYVKqnz8Me9qg8jWCnzHoW0SNYJEA1ivrIiKZAD0Pd3pnGmFaFEzWbb+UOdlM0ScNNUB6Wg9IgBF3gkpoGBN9KWyhDGJPn5YB0TI0ZReteOYpRXpiaZD+uFiUSYpmnST8hJdCtUOOutCg0jzT5P4kNiI2hEp/8kwP2DMDtv55UL6gw7ZDcENWVnPB3Jj4V48QmRG+sIa+tBEEWthaKvUW03q09XCMXhLNJ9Ry2db0ugpO3FjDehfkxZ6yUPUIhYUMmVEkpvb72ftabCHEv1vAaq3FqE1Woy2IaFOyeiIYzDagFy9bDlA8Nuv0yNnlM000Xocc9ezdw6sOAiklQfZNz1FXJw1X1KW8IXRAqrgpWlAvV4+22/uxmNssvZR4WsxGmtkVQGg7NWo4lyFdZ3N5LxlGBUTnTHQJRIdjvHa9ByLCrocqdiRMnpgNYhvEcL/iXCrn9j3NlJ4QO8QAE7NaU5FRGPSh1L00lyIzYsYTMz1eNr+tpG2VjurEp+Q9lrKMa6yrcC5zhRq9pXGikpKk49xS0bCBj8YoS1s+wuHA+bqrM4zuiEwLhOpMYheE3F/rHNtDeVst4wi5Y/z/hpz5rwgoJ0Dw/tTXzZNBI1bGdfXMeEecA+/kxpBiiry/gWjbh78DFp2WQZX9/8h/jR+0ogp1+uA9XwAAAABJRU5ErkJggg==',
        icon3: iconImage,
      },
    }
  },
}
</script>
<style scoped>
.section-wrapper {
  height: 100%;
  background-image: url('@/assets/BecomeAHost.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  width: 100% !important;
  margin: 0px auto;
  border-radius: 25px;
}

.section-wrapper .row {
  padding: 4px 58px;
}
.package-card {
  display: flex;
  margin: 20px 0;
  background: rgba(0, 0, 0, 0.346);
  border-radius: 12px;
  padding: 20px;
}

.list-property-btn {
  text-align: center;
  display: inline-block;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  border-radius: 10px;
  padding: 12px 30px;
  z-index: 1;
  color: rgb(54, 54, 54);
  text-decoration: none;
  background-color: #e1e1e1;
  border: 1px solid #e1e1e1;
  font-size: 15px;
  font-weight: 600;
  font-family: rubik, sans-serif;
  text-transform: capitalize;
  position: relative;
  overflow: hidden;
  -webkit-box-shadow: 0 20px 20px -5px rgba(253, 80, 86, 0.2);
  box-shadow: 0 20px 20px -5px rgba(29, 29, 29, 0.2);
}
.list-property-btn:hover {
  color: #e1e1e1;
  background-color: transparent;
  border: 1px solid #e1e1e1;
}
.list-property-btn:focus {
  -webkit-box-shadow: none;
  box-shadow: none;
}

.color-invert {
  filter: brightness(0) invert(1);
  margin: 10px 10px;
}
</style>
