<template>
  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
              aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
              aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
              aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" v-for="movie in movies" :key="movie.id">
        <img src="https://picsum.photos/200/300?grayscale"
             alt="movie.filmName + ' ' + movie.schauSpielerName + '' + movie.releaseDate">
        <div class="carousel-caption d-none d-md-block">
          <h5>Whats New</h5>
          <div class="card-body">
            <p> {{ movie.filmName }}</p>
            <p> {{ movie.schauSpielerNamen }} </p>
            <p>{{ new Date(movie.releaseDate).toDateString() }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Karusel',
  props: {
    movies: Array
  }
}

</script>

<style scoped>
.carousel {
  box-sizing: border-box;
}

.carousel-caption {
  color: black !important;
}
</style>
