<template>
  <section id="footer" class="footer">
    <div class="footerBg"></div>
    <div class="container">
      <div class="row d-flex justify-content-between">
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <div class="contact-address btm-brdr">
            <span
              ><h4 class="title-ft">
                <span class="thin">Contact </span>
                <span class="normal">Us</span>
              </h4></span
            >
            <ul class="contacts">
              <li>
                <i class="fa fa-phone" aria-hidden="true"></i>
                <span>123456789</span>
              </li>
              <li>
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <span>121 Abc St MIB 5000, KE</span>
              </li>
              <li>
                <i class="fa fa-envelope-o" aria-hidden="true"></i
                ><span>info@site.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <div class="subscribe btm-brdr">
            <h4 class="title-ft">
              <span class="thin">Subscribe </span>
              <span class="normal">Newsletter</span>
            </h4>
            <form>
              <input type="text" placeholder="Your Email" />
              <button type="button" class="fill-btn">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div
        class="copyright-footer d-flex justify-content-center align-items-center"
      >
        <p class="text-center">© 2023 Company, Inc</p>
      </div>
    </div>
  </section>
</template>
<style scoped>
.footer {
  background-color: #353535;
  padding-top: 1.3em;
}
.copyright-footer {
  color: rgb(167, 159, 159);
}
.title-ft .thin {
  color: #ff6600;
  font-size: 32px;
}
.title-ft .normal {
  color: #f6f6f6;
}
ul.contacts {
  padding: 0px;
}
ul.contacts li {
  list-style: none;
  color: #aaa7a7;
}
.element-btn .element-fill-btn {
  background-color: #ff6600;
  border: 0;
  color: #fff;
  padding: 13px 5px;
  font-size: 16px;
  font-weight: 900;
  font-style: italic;
  text-transform: uppercase;
  width: 252px;
  margin: 0 auto;
  border-radius: 25px;
  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  box-shadow: 0px 10px 50px -10px rgba(255, 10, 120, 1);
}
.fill-btn {
  background-color: #ff6600;
  border: 0;
  color: #fff;
  padding: 13px 5px;
  font-size: 16px;
  font-weight: 900;
  font-style: italic;
  text-transform: uppercase;
  width: 252px;
  margin: 0 auto;
  border-radius: 25px;
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translate(-50%, 0);
  -webkit-transform: translate(-50%, 0);
  -moz-transform: translate(-50%, 0);
  -ms-transform: translate(-50%, 0);
  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
}

.subscribe form {
  position: relative;
  display: inline-block;
  width: 100%;
  margin-bottom: 60px;
}

.subscribe form input {
  width: 100%;
  height: 50px;
  border: 1px solid #737373;
  border-radius: 25px;
  background-color: transparent;
  padding: 5px 215px 5px 25px;
  font-size: 14px;
  color: #737373;
  font-style: italic;
}

.subscribe form .fill-btn {
  bottom: auto;
  top: 0;
  right: 0;
  left: auto;
  transform: translate(0%, 0);
  -webkit-transform: translate(0%, 0);
  -moz-transform: translate(0%, 0);
  -ms-transform: translate(0%, 0);
  width: 209px;
}
</style>
