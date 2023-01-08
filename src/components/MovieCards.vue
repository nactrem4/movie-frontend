<template>
  <div class="card-group">
    <div class="col" v-for="movie in movies" :key="movie.id">
      <div class="card" @click="this.handleClickEvent(movie)">
        <img class="card-img-top" :src="movie.imagePath"
             :alt="movie.filmName + '  ' +movie.schauSpielerNamen">
        <div class="card-body">
          <h5 class="card-title">{{ movie.filmName }}</h5>
          <h5 class="card-title">{{ movie.schauSpielerNamen }}</h5>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieCards',
  data () {
    return {
      movies: []
    }
  },
  mounted () {
    const endpoint = ('http://localhost:8080/api/v1/movies')
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
  },
  methods: {
    handleClickEvent (movie) {
      this.$router.push('/reviews/movie/' + movie.id)
    }
    // redirect to review page for movie with id
    // movies/1/reviews
  }
}
</script>

<style scoped>

</style>
