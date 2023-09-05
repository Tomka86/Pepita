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
      <img
        v-for="imageUrl in collections"
        :key="imageUrl"
        :src="imageUrl"
        class="collection-item"
      />
    </div>
  </div>
</template>

<script>
import HamburgerMenu from "../components/Navbar.vue";

export default {
  name: "Collections",
  components: {
    HamburgerMenu,
  },
  data() {
    return {
      collections: [],
    };
  },
  methods: {
    async fetchData() {
      const searchURL =
        "https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=Auguste Renoir";
      const response = await fetch(searchURL);
      const data = await response.json();
      const objectIDs = data.objectIDs;

      for (const id of objectIDs) {
        const itemURL = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`;
        const itemResponse = await fetch(itemURL);
        const itemData = await itemResponse.json();
        this.collections.push(itemData.primaryImage);
      }
    },
  },
  async mounted() {
    await this.fetchData();
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
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
}

.collection-item {
  max-width: 50%;
  height: auto;
  display: flex; /* Use Flexbox for centering images */
  justify-content: center; /* Center the image horizontally */
  align-items: center; /* Center the image vertically */
}

@media screen and (max-width: 375px) {
  .container {
    grid-template-columns: repeat(2, minmax(200px, 1fr)); /* Two columns */
    gap: 10px;
    margin-left: 100px;
    justify-content: center;
  }
  .title {
    display: none;
  }
}
</style>
