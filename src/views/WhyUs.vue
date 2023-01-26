<template>
  <section class="w-u-section position-relative pb-70 bg-light">
    <div class="container position-relative pt-5">
      <div class="row justify-content-center drop-shadow">
        <div class="col-lg-4 col-md-12 col-sm-12 align-self-center">
          <div class="section-title mb-40">
            <h2>
              Why Get <span class="thin">Trippy?</span>
              <br />
            </h2>
            <h2 class="mb-5">
              <span class="thin"
                >Our Unique <span class="normal">Distinction</span> from Others
              </span>
            </h2>
            <span class="thin desc"
              >Don’t go looking for great deals, great deals will come looking
              for you.</span
            >
          </div>
        </div>
        <div class="col-lg-8 col-md-12 col-sm-12">
          <div class="row">
            <div class="col align-self-center">
              <div class="col d-flex">
                <div class="w-u-item item-bg-one text-center mb-40">
                  <div class="text">
                    <h4 class="title drop-shadow">Packages</h4>
                    <p class="des-1">Customized packages for you.</p>
                    <p class="des-2">
                      Our hosts and hotels can customize a package for you based
                      on your individual needs. Get a package directly from them
                      and save more than 40%. There are no travel agents or
                      middlemen, so you don't have to pay any extrCustomized
                      packages for you.a or hidden fees.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col align-self-center">
              <div class="col d-flex">
                <div class="w-u-item item-bg-two text-center mb-40">
                  <div class="text">
                    <h4 class="title">Flexible Payments</h4>
                    <p class="des-1">Pay in installments.</p>
                    <p class="des-2">
                      You don't have to break the bank to travel, you can now
                      pay for your trips in installments either before or after
                      departure at a 0% interest fee.
                    </p>
                  </div>
                </div>
              </div>
              <div class="cold-flex">
                <div class="w-u-item item-bg-three text-center mb-40">
                  <div class="text">
                    <h4 class="title">Emergency Booking</h4>
                    <p class="des-1">For tonight Only</p>
                    <p class="des-2">
                      Are you running late and in need of a place to stay at the
                      last minute? Get up to 50% off bookings made after 9 p.m.
                      For that night only!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'WhyUs',
}
</script>
<style scoped>
.w-u-section {
  position: relative;
}
.w-u-section:before {
  content: ' ';
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.8;
  background-image: url('@/assets/services-bg-2.jpg');
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-size: cover;
}

.inner-header-section {
  margin-bottom: 2em;
  width: 100%;
  padding: 10px 0px;
  border-radius: 8px;
}

.desc {
  font-weight: 300 !important;
  color: #545454;
}

.w-u-item {
  padding: 40px 35px 35px;
  border-radius: 10px;
}
.w-u-item.item-bg-one {
  background-color: #fff5e973;
  border: 1px #ddd2b4 solid;
}
.w-u-item.item-bg-one .text h4.title {
  color: #c65800;
}
.w-u-item.item-bg-two {
  background-color: #f0f7ed74;
  border: 1px #c0dcb6 solid;
}
.w-u-item.item-bg-two .text h4.title {
  color: #228600;
}
.w-u-item.item-bg-three {
  background-color: #fff1ea7b;
  border: 1px #e5cdc1 solid;
}
.w-u-item.item-bg-three .text h4.title {
  color: #a83900;
}
.w-u-item .text h4.title {
  font-size: 34px;
  font-weight: revert;
  text-align: left;
  margin-top: -27px;
  line-height: 1;
  opacity: 0.5;
  margin-bottom: 1.2em;
}
.w-u-item .text {
  text-align: start;
}
.w-u-item .des-1 {
  margin-bottom: 10px;
  text-align: start;
  font-weight: bold;
  font-size: 18px;
  color: rgb(74, 68, 68);
}
</style>
