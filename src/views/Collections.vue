<script>
 import HamburgerMenu from "../components/Navbar.vue";

export default {
  name: "collections",
   components: {
     HamburgerMenu,
   },
  data(){
    return{
      collections:[],
    }
  },
  methods: {
    getData() {
      let div = document.querySelector(".container");

      const URL_ROOT = `https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=Auguste Renoir`;
      fetch(URL_ROOT)
        .then((response) => response.json())
        .then((data) => {
          console.log(data.objectIDs);

          for (let i = 0; i < data.objectIDs.length; i++) {
            console.log(data.objectIDs[i]);
            let id = data.objectIDs[i];
            fetch(
              `https://collectionapi.metmuseum.org/public/collection/v1/objects/${[
                id,
              ]}`
            )
              .then((response) => response.json())
              .then((data) => {
                console.log(data.primaryImage);
                let item = document.createElement("img");
                item.src = data.primaryImage;
                div.append(item);
              });
          }
        });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
<template>
  <HamburgerMenu></HamburgerMenu>
  <h1>Collections</h1>
  <div class="container"></div>
</template>
