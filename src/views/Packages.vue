<template>
  <section id="package" class="package-section pb-70 bg-light">
    <div class="container">
      <div class="row inner-header-section drop-shadow">
        <div class="col-lg-6">
          <div class="section-title mb-40 drop-shadow">
            <h2>
              Top <span class="thin">packages</span>
              <br />
            </h2>
          </div>
        </div>
      </div>
      <div>
        <div v-if="apiLoadingState?.loading">
          <content-loader
            primaryColor="#F9F8FE"
            secondaryColor="#f1efff"
          ></content-loader>
        </div>
        <div
          class="d-flex justify-content-center align-items-center"
          v-else-if="apiLoadingState?.error"
        >
          <p class="fw-bold fs-4 text-danger">Error</p>
        </div>
        <div class="row" v-else>
          <div
            v-for="(pack, i) in getPackages"
            :key="i"
            class="col-lg-4 col-md-6"
          >
            <div class="item-single mb-30 drop-shadow">
              <div class="image">
                <img
                  class="custom-image"
                  :src="pack.hotel.photos[0]"
                  alt="Demo Image"
                />
              </div>
              <div class="content">
                <span class="location">{{ pack.hotel.location.name }}</span>
                <h3 class="fs-5">{{ pack.title }}</h3>
                <div class="review d-flex">
                  <span class="pe-2">Guests {{ pack.details.guests }}</span>
                  <span class="px-2">Days {{ pack.nights }}</span>
                </div>
                <p>
                  {{ pack.description }}
                </p>
                <p class="py-0">From: {{ formatDate(pack.startDate) }}</p>
                <p class="py-0">{{ pack.mealType }}</p>
                <hr />
                <ul class="list">
                  <li><i class="bx bx-time"></i>3 Days</li>
                  <li><i class="bx bx-group"></i>160+</li>
                  <li>${{ pack.hotel.price.amount }}</li>
                </ul>
              </div>
              <div class="spacer"></div>
            </div>
          </div>
          <div class="explore-btn-sec">
            <a href="#" class="explore-btn">Explore</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { format } from 'date-fns'
import { ContentLoader } from 'vue-content-loader'
export default {
  name: 'Packages',
  components: {
    ContentLoader,
  },
  computed: {
    getPackages: function () {
      return this.$store.getters['packages/travel_packages']
    },
    apiLoadingState: function () {
      return this.$store.getters['packages/packages_res_state']
    },
  },

  methods: {
    formatDate(date) {
      console.log('date', date)
      return format(new Date(date), 'MM-dd-yyyy')
    },
  },
  mounted() {
    this.$store.dispatch('packages/get_packages', 3)
  },
}
</script>

<style scoped>
.explore-btn-sec {
  width: 100;
  text-align: end;
}
.fs-custom {
  font-size: 1.3rem;
}
.explore-btn {
  text-align: center;
  display: inline-block;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  border-radius: 10px;
  padding: 12px 30px;
  z-index: 1;
  color: #fff;
  text-decoration: none;
  background-color: #fd5056;
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
  color: #fd5056;
  background-color: transparent;
  border: 1px solid #fd5056;
}
.explore-btn:focus {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.bg-light {
  background-color: #f9f8fe !important;
}
img {
  max-width: 100%;
  max-height: 314px;
  min-height: 314px;
}
.package-section .item-single {
  position: relative;
  overflow: hidden;
}
.package-section .item-single img {
  border-radius: 5px;
  width: 100% !important;
}

.package-section .item-single .content {
  position: absolute;
  bottom: 0;
  left: 15px;
  background: #fff;
  border-radius: 7px;
  padding: 25px 16px;
  width: 100%;
  max-width: calc(100% - 30px);
  -webkit-transition: 0.5s;
  transition: 0.5s;
  -webkit-box-shadow: 0 0 30px 0 rgba(102, 102, 102, 0.09);
  box-shadow: 0 0 30px 0 rgba(102, 102, 102, 0.09);
}

.package-section .item-single .content h3 {
  margin-top: 5px;
  margin-bottom: 5px;
  color: #090031;
}

.package-section .item-single .content p {
  padding-top: 15px;
  display: none;
  font-size: 15px;
}
.package-section .item-single .content .list {
  padding: 0;
  margin-bottom: 0;
  list-style: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.package-section .item-single .content .list li {
  display: inline-block;
  margin-right: 12px;
  color: #797979;
}
.package-section .item-single .content .list li:last-child {
  font-weight: 600;
  margin-right: 0;
  color: #fd5056;
  margin-left: auto;
}
.package-section .item-single:hover .content {
  background: #4141a5;
  -webkit-animation: fadeInUp 0.5s linear 1;
  animation: fadeInUp 0.5s linear 1;
}
.package-section .item-single:hover .content i {
  color: #d6d6d6;
}
.package-section .item-single:hover .content span {
  color: #d6d6d6;
}
.package-section .item-single:hover .content h3 {
  -webkit-transition: none;
  transition: none;
  color: #fff;
}

.package-section .item-single:hover .content .list li {
  color: #d6d6d6;
}
.package-section .item-single:hover .content .list li:last-child {
  color: #fff;
}
.package-section .item-single:hover .content p {
  color: #d6d6d6;
  display: block;
}
.package-section .item-single .spacer {
  width: 100%;
  min-height: 150px;
}

@-webkit-keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
}
@keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
}
</style>
