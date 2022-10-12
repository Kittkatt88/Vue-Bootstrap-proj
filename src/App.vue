<template>
  <div id="app">
    <NavbarTemp />
    <DataTable />
    <FooterTemp />
  </div>  
</template>

<script>
import NavbarTemp from './components/NavbarTemp.vue';
import DataTable from './components/DataTable.vue';
import FooterTemp from './components/FooterTemp.vue';
import image from "./assets/qmLogo.jpg";

export default {
  name: 'App',
  components: {
    NavbarTemp,
    DataTable,    
    FooterTemp,
  },
  data() {
    return {
      image
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

@import './assets/style.css';


</style>
