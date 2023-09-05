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

<style>
.input-container {
  display: flex;
  align-items: center;
}

#search {
  border-top: 2px solid #ff3333;
  border-right: 0;
  border-bottom: 2px solid #ff3333;
  border-left: 2px solid #ff3333;
  width: 100%;
  height: 40px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  max-width: 100%;
  flex: 1;
}

#search-button {
  background: transparent;
  border: none;
  cursor: pointer;
  display: inline-block;
  font-size: 20px;
  border-top: 2px solid #ff3333;
  border-right: 2px solid #ff3333;
  border-bottom: 2px solid #ff3333;
  top: 0;
  right: 0;
  margin-right: 10px;
}

i {
  margin-bottom: 0.33em;
  margin-top: 0.34em;
  font-size: 1.2em;
  transform: rotate(90deg);
  font-weight: lighter;
  color: #ff3333;
}

::placeholder {
  font-family: "Poppins", sans-serif;
  color: #ff3333;
  font-size: 1.3em;
  padding-left: 10px;
}

#search-label {
  font-family: "Poppins", sans-serif;
  color: #ff3333;
  font-size: 0.65em;
  position: relative;
  top: -10px;
  margin-left: 10px;
}

.title {
  font-size: 1.1em;
  font-family: "Poppins", sans-serif;
  color: #ff3333;
  position: absolute;
  top: 15px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.container {
  display: grid;
  gap: 20px;
  text-align: center;
  margin: 10px;
}

.collection-item {
  max-width: 100%;
  height: auto;
}

figure {
  text-align: left;
  font-size: 0.8em;
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
  color: #ff3333;
}

figcaption {
  margin-top: 5px;
}

@media screen and (max-width: 374px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (min-width: 375px) {
  .container {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}
</style>
