<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faCube,
  faCalendarDays,
  faAddressCard,
  faGift,
  faTicketSimple,
  faShapes,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faCube,
  faCalendarDays,
  faAddressCard,
  faGift,
  faTicketSimple,
  faShapes,
  faMagnifyingGlass
);

export default {
  components: {
    FontAwesomeIcon,
  },
  name: "HamburgerMenu",
  data() {
    return {
      isMobileMenuOpen: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
  },
};
</script>

<template>
  <div class="navbar">
    <div class="logo">
      <p>THE</p>
      <p>ART</p>
      <p>MUSEUM</p>
    </div>
    <button class="hamburger-button" @click="toggleMobileMenu">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </button>
    <nav :class="['menu', { active: isMobileMenuOpen }]">
      <label for="searchbar">
        <font-awesome-icon class="icon" icon="fa-solid fa-magnifying-glass" />
        <input
          type="text"
          name="searchbar"
          id="searchbar"
          placeholder="Search"
        />
      </label>
      <a href="#events" class="menu-link">
        <font-awesome-icon class="icon" icon="fa-solid fa-calendar-days" />
        Exhibitions & Events
      </a>
      <a href="#artworks" class="menu-link">
        <font-awesome-icon class="icon" icon="fa-solid fa-shapes" />
        Artists & Artworks
      </a>
      <a href="#collections" class="menu-link">
        <font-awesome-icon class="icon" icon="fa-solid fa-cube" />
        Collections
      </a>
      <a href="#visit" class="menu-link">
        <font-awesome-icon class="icon" icon="fa-solid fa-ticket-simple" />
        Plan Your Visit
      </a>
      <a href="#member" class="menu-link">
        <font-awesome-icon class="icon" icon="fa-solid fa-address-card" />
        Become a Member
      </a>
      <a href="#shop" class="menu-link">
        <font-awesome-icon class="icon" icon="fa-solid fa-gift" />
        Shop
      </a>
    </nav>
  </div>
</template>
