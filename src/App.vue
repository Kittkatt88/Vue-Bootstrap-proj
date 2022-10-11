<template>
  <div id="app">
    <NavBar />
    <JumboTron />
    <CallToAction />
    <CardsTemp />
    <FooterTemp />
  </div>  
</template>

<script>
import NavBar from './components/NavBar.vue';
import JumboTron from './components/JumboTron.vue';
import CallToAction from './components/CallToAction.vue';
import CardsTemp from './components/CardsTemp.vue';
import FooterTemp from './components/FooterTemp.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    JumboTron,
    CallToAction,
    CardsTemp,
    FooterTemp
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
