<template>
  <navbar></navbar>
  <searchbar></searchbar>
  <karusel></karusel>
  <router-view></router-view>
</template>

<script>
import Searchbar from '@/components/Searchbar'
import Navbar from '@/components/Navbar'
export default {
  name: 'App',
  components: { Navbar, Searchbar }
}
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black !important;
  background: lightcyan !important;
  width:  100%;
  height: 100%;
}

.card {
  --bs-card-bg: #0000 !important;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

</style>
