<template>
  <div class="home">
    <Karusel  :movies="this.movies"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Karusel from '@/components/Karusel'

export default {
  name: 'HomeView',
  components: { Karusel },
  data () {
    return {
      movies: []
    }
  },
  mounted () {
    const endpoint = ('http://localhost:8080/api/v1/movies/getthreelatest')
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => {
        this.movies = result
      })
      .catch(error => console.log('error', error))
  }
}
</script>

<style>
</style>
