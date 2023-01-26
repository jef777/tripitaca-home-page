<template>
  <section id="video-demo" class="video-demo-section pb-70 bg-light">
    <div class="container">
      <div class="row inner-header-section drop-shadow">
        <div class="col-lg-6">
          <div class="section-title mb-40 drop-shadow text-white">
            <h2 class="text-white">
              Create your <span class="thin">own packages</span>
              <br />
            </h2>
          </div>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-lg-12">
          <div class="mb-30 drop-shadow">
            <iframe
              class="drop-shadow rounded-3"
              width="100%"
              height="600px"
              src="https://www.youtube.com/embed/Zt0obAXJzS8"
              title="Tripitaca Demo"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen=""
            >
              <i class="bx bx-right-arrow"></i>
            </iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'VideoDemo',
}
</script>

<style scoped>
.video-demo-section {
  background-color: #4141a5 !important;
}
img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}
</style>
