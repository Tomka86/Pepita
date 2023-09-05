<template>
  <div>
    <HamburgerMenu />
    <h1 class="title">Collections</h1>
    <div class="form-group fg--search">
      <div class="input-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Explore the Collection"
        />
        <button id="search-button" type="submit">
          <i class="fa fa-search"></i>
        </button>
      </div>
      <label id="search-label" for="search">Advanced Search</label>
    </div>
    <div class="container">
      <figure>
        <img
          src="../src/assets/artsAndCrafts.png"
          alt="Decorative Arts and Crafts"
          class="collection-item"
        />
        <figcaption>DECORATIVE ARTS & CRAFTS</figcaption>
      </figure>
      <figure>
        <img
          src="../src/assets/americanImpressionism.png"
          alt="American Impressionism"
          class="collection-item"
        />
        <figcaption>AMERICAN IMPRESSIONISM</figcaption>
      </figure>
      <figure>
        <img
          src="../src/assets/deStijl.png"
          alt="De Stijl"
          class="collection-item"
        />
        <figcaption>DE STIJL</figcaption>
      </figure>
      <figure>
        <img
          src="../src/assets/cubism.png"
          alt="Cubism"
          class="collection-item"
        />
        <figcaption>CUBISM</figcaption>
      </figure>
      <figure>
        <img
          src="../src/assets/american.png"
          alt="American"
          class="collection-item"
        />
        <figcaption>AMERICAN</figcaption>
      </figure>
      <figure>
        <img
          src="../src/assets/greekAntiquities.png"
          alt="Greek Antiquities"
          class="collection-item"
        />
        <figcaption>GREEK ANTIGUITIES</figcaption>
      </figure>
    </div>
  </div>
</template>

<script>
import HamburgerMenu from "../components/Navbar.vue";

export default {
  name: "Collections2",
  components: {
    HamburgerMenu,
  },
};
</script>
