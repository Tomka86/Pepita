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
