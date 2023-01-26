<template>
  <section class="destination-section pb-70">
    <div class="container pt-5">
      <div class="row">
        <div
          class="col-md-4 d-flex justify-content-center item align-items-center"
        >
          <div class="row inner-header-section me-4">
            <div class="section-title mb-4 drop-shadow">
              <h2 class="drop-shadow mt-30">
                <span class="thin"
                  >Enjoy The
                  <span class="normal">Best Destinations</span> Across Afirca
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div v-if="apiLoadingState?.loading">
            <content-loader
              primaryColor="#ffecd3"
              secondaryColor="#FDF7EF"
            ></content-loader>
          </div>
          <div
            class="d-flex justify-content-center align-items-center"
            v-else-if="apiLoadingState?.error"
          >
            <p class="fw-bold fs-4 text-danger">Error</p>
          </div>
          <swiper
            v-else
            :effect="'cards'"
            :grabCursor="true"
            :autoplay="{
              delay: 250000,
              disableOnInteraction: true,
            }"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide v-for="(destination, i) in getDestinations" :key="i">
              <div class="destination-card drop-shadow">
                <div class="item-single custom-image mb-30">
                  <div class="image">
                    <img :src="`${destination.image}`" alt="Demo Image" />
                  </div>
                  <div class="content">
                    <div class="title">
                      <h3>
                        {{ destination.location }}
                      </h3>
                      <div class="explore-btn-sec">
                        <a href="#" class="explore-btn">Explore</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/effect-cards'

// import required modules

import { EffectCards, Autoplay } from 'swiper'
import { ContentLoader } from 'vue-content-loader'
export default {
  components: {
    Swiper,
    SwiperSlide,
    ContentLoader,
  },
  setup() {
    return {
      modules: [EffectCards, Autoplay],
    }
  },
  computed: {
    getDestinations: function () {
      return this.$store.getters['destinations/travel_destinations']
    },
    apiLoadingState: function () {
      return this.$store.getters['destinations/destinations_res_state']
    },
  },
  mounted() {
    this.$store.dispatch('destinations/get_destinations', 3)
  },
}
</script>

<style scoped>
.destination-section {
  background-color: #faebd769;
}
.inner-header-section {
  margin-bottom: 4em;
}
.explore-btn {
  text-align: center;
  display: inline-block;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  border-radius: 10px;
  padding: 12px 30px;
  z-index: 1;
  color: #fd5056;
  text-decoration: none;
  background-color: transparent;
  border: 1px solid #fd5056;
  font-size: 15px;
  font-weight: 600;
  font-family: rubik, sans-serif;
  text-transform: capitalize;
  position: relative;
  overflow: hidden;
  -webkit-box-shadow: 0 20px 20px -5px rgba(253, 80, 86, 0.2);
  box-shadow: 0 20px 20px -5px rgba(253, 80, 86, 0.2);
}
.explore-btn:hover {
  color: #fff;
  background-color: #fd5056;
  border: 1px solid #fd5056;
}
.explore-btn:focus {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.swiper {
  width: 500px;
  filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04))
    drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
}

img {
  max-width: 100%;
  height: auto;
}

.custom-image {
  min-height: 28em;
  min-width: 22em;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04))
    drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
}

.swiper-wrapper {
  margin: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
}
.destination-card {
  height: inherit;
}

.destination-section .item-single {
  border-radius: 14px;
  height: inherit;
}
.destination-section .item-single::after {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #090031;
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(#090031),
    to(rgba(9, 0, 49, 0.0508578))
  );
  background: linear-gradient(0deg, #090031 0%, rgba(9, 0, 49, 0.0508578) 100%);
}
.destination-section .item-single .content {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 25px 16px;
  width: 100%;
  z-index: 1;
}

.destination-section .item-single .content .title {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin: 12px 0;
}

.destination-section .item-single .content .title h3 {
  color: #fff;
}

@media only screen and (max-width: 767px) {
  .swiper {
    width: 380px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .swiper {
    width: 400px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .swiper {
    width: 500px;
  }
}
</style>
