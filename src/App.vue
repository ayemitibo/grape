<template>
  <div>
    <base-loader v-if="loading"></base-loader>
    <div v-else>
      <!-- header begins -->
      <base-header> </base-header>
      <div class="body">
        <!-- banner begins -->
        <base-banner :slides="data" />

        <!-- banner ends -->
        <!-- product begins -->
        <section class="product">
          <h3 class="section-title">ALL PRODUCT</h3>
          <div class="container section-body">
            <div
              class="
                mt-6
                grid grid-cols-1
                gap-y-10 gap-x-6
                sm:grid-cols-2
                lg:grid-cols-4
                xl:gap-x-8
              "
            >
              <template
                class="flex w-full"
                v-for="(item, index) in data"
                :key="index"
              >
                <base-product-card :item="item" @showModal="showModal" />
              </template>
            </div>
          </div>
        </section>

        <!-- product ends -->

        <!-- newsletter begins  -->
        <section class="newsletter">
          <div class="section-body">
            <h3 class="title">Subscribe to our newsletter</h3>
            <p class="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium voluptatem sed possimus modi aliquam nobis veniam at
              nulla necessitatibus commodi.
            </p>
            <div class="search">
              <input type="text" placeholder="Enter a valid email address" />
              <label>Search</label>
            </div>
          </div>
        </section>
        <!-- newsletter ends  -->

        <!-- footer begins  -->
        <footer class="footer">
          <div class="footer-body">
            <div>
              <div class="title">Company</div>
              <div class="item-body">
                <ul>
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>Terms of use</li>
                  <li>Privacy policy</li>
                </ul>
              </div>
            </div>
            <div>
              <div class="title">Company</div>
              <div class="item-body">
                <ul>
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>Terms of use</li>
                  <li>Privacy policy</li>
                </ul>
              </div>
            </div>
            <div>
              <div class="title">Company</div>
              <div class="item-body">
                <ul>
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>Terms of use</li>
                  <li>Privacy policy</li>
                </ul>
              </div>
            </div>
            <div>
              <div class="title">Company</div>
              <div class="item-body">
                <ul>
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>Terms of use</li>
                  <li>Privacy policy</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        <!-- footer ends  -->

        <!-- modal -->
        <base-popover ref="modal" />
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from "@/assets/components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
  },
  data() {
    return {
      data: [],
      loading: false,
    };
  },
  methods: {
    showModal(item) {
      this.$refs.modal.show(item);
    },
  },
  mounted() {
    this.loading = true;
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        this.data = json;
        this.loading = false;
      });
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

:root {
  --primary-text: #000;
  --black: #192a56;
  --light-color: #666;
  --box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  outline: none;
  border: none;
  text-transform: capitalize;
  transition: all 0.2s linear;
}

html {
  font-size: 62.5%;
  overflow-x: hidden;
  scroll-padding-top: 5.5rem;
  scroll-behavior: smooth;
}

body {
  font-size: 1.6rem;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  background: var(--primary-text);
  color: white;
  box-shadow: var(--box-shadow);
}

header .navbar {
  padding: 2rem 0;
}

header .navbar a {
  font-size: 1.7rem;
  font-weight: bold;
  color: #fff;
  border-right: 1px solid #fff;
  padding: 2rem;
}

header .logo {
  font-size: 3rem;
  color: white;
  font-weight: bold;
}

header .icons a,
header .icons i {
  cursor: pointer;
  margin-left: 0.5rem;
  height: 4.5rem;
  line-height: 4.5rem;
  width: 4.5rem;
  text-align: center;
  font-size: 1.7rem;
  color: white;
}

header .icons {
  display: flex;
  align-items: center;
}

header .icons form input {
  padding: 1rem 0.8rem;
  border-radius: 1.7rem;
  width: 20rem;
}

.body {
  padding-top: 6rem;
}
section {
  padding: 2rem 4%;
  padding-bottom: 0;
}
footer {
  padding: 2rem 8%;
  padding-bottom: 0;
}

.sub-nav {
  color: var(--primary-text);
  display: flex;
  justify-content: center;
}
.sub-nav {
  padding-bottom: 0;
}
.sub-nav .nav {
  color: var(--primary-text);
  display: flex;
  gap: 4rem;
}
.sub-nav .nav a {
  font-weight: bold;
  text-transform: uppercase;
  color: var(--primary-text);
  font-size: 110%;
}
.banner img {
  object-fit: contain;
  width: 100%;
  height: 100%;
}

.section-body {
  margin-top: 2rem;
}
.product .section-body {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.product-item {
  flex: 0 1 auto;
  width: 25%;
  margin-top: 2rem;
}

.item-img {
  display: flex;
  justify-content: center;
}

.item-img img {
  object-fit: cover;
  width: 80%;
}

.item-content {
  margin: 1rem auto;
}
.item-content div {
  text-align: center;
}
.item-content .content-desc {
  color: rgb(145, 143, 143);
}
.item-content .content-price {
  font-weight: bold;
}

.newsletter {
  background-color: rgb(223 222 222 / 38%);
  margin-top: 4rem;
}

.newsletter .section-body {
  padding: 0 3rem;
  padding-bottom: 4rem;
}
.newsletter .section-body .title {
  font-size: 120%;
  text-transform: lowercase;
  margin-bottom: 1rem;
  width: 60%;
}
.newsletter .section-body .desc {
  text-transform: lowercase;
  margin-bottom: 1rem;
  width: 60%;
  font-size: 90%;
  color: #686868;
}
.newsletter .section-body .search input {
  display: inline-block;
  padding: 1rem;
  width: 50rem;
}
.newsletter .section-body .search label {
  display: inline-block;
  padding: 1rem;
  color: white;
  background: red;
  cursor: pointer;
}
.newsletter .section-body .search {
  display: flex;
}

.footer {
  padding-bottom: 4rem;
  padding-top: 4rem;
  background-color: black;
  color: white;
}

.footer-body {
  display: flex;
  justify-content: space-between;
}
.footer-body .title {
  font-weight: bold;
  margin-bottom: 2rem;
  letter-spacing: 2px;
}
.footer-body .item-body ul li {
  list-style-type: none;
  font-size: 95%;
  display: block;
  padding: 0.5rem 0;
}
</style>
