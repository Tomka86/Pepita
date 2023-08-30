<script>
export default {
  name: "HamburgerMenu",
  data() {
    return {
      menuOpen: false,
    };
  },
};
</script>
<template>
  <div class="container-fluid" id="app">
    <nav class="row navbar">
      <div class="col-xs-6">
        <div class="logo">
          <p class="logo1">The</p><br>
          <p class="logo2">Art</p><br>
          <p class="logo2">Museum</p>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="hamburger-wrap">
          <button class="hamburger" type="button" @click="menuOpen = !menuOpen">
            <span class="hamburger__line"></span>
            <span class="hamburger__middle"></span>
            <span class="icon-bar hamburger__line"></span>
          </button>
        </div>
      </div>
    </nav>
    <div class="row dropdown" :class="{ 'dropdown-after': menuOpen }">
      <ul class="navlist">
        <li class="navlistitem">
          <a href="#">Exhibitions & Events</a>
        </li>
        <li class="navlistitem">
          <a href="#">Artists & Artworks</a>
        </li>
        <li class="navlistitem">
          <a href="#">Collections</a>
        </li>
        <li class="navlistitem">
          <a href="#">Plan Your Visit</a>
        </li>
        <li class="navlistitem">
          <a href="#">Become a Member</a>
        </li>
        <li class="navlistitem">
          <a href="#">Shop</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.navbar {
  height: 50px;
  background-color: white;
  display: flex;
  border-radius: 10px;
}

.logo1 {
  color: red;
}

.logo2 {
  color: grey;
}

.logo,
.hamburger-wrap {
  width: 100px;
  height: 100%;
  margin-left: 50px;
  margin-right: 50px;
  display: flex;
  align-items: center;
}

.hamburger-wrap {
  float: right;
  justify-content: flex-end;
}

.hamburger {
  width: 45px;
  height: 45px;
  /* background-color: black; */
  border-radius: 4px;
}

.hamburger:focus {
  outline: none;
}

.hamburger__line,
.hamburger__middle {
  display: block;
  width: 30px;
  height: 2px;
  border-radius: 2px;
  background-color: black;
  margin-top: 7px;
  margin-bottom: 7px;
}

.hamburger__middle {
  width: 30px;
  /* margin-left: 10px; */
}

.dropdown {
  margin-top: -20px;
  height: 0px;
  background-color: rgb(255, 71, 58);
  transition: height 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.dropdown-after {
  height: calc(100vh - 50px);
  transition: height 0.2s ease;
}

.navlist {
  list-style: none;
}

.navlistitem {
  text-transform: uppercase;
  text-align: center;
  padding: 20px;
}

.navlistitem a {
  color: #ffffff;
}
</style>
