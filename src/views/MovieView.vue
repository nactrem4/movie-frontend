<template>
  <div class="movie">
    <MovieCards></MovieCards>
  </div>
</template>

<script>
import MovieCards from '@/components/MovieCards'
export default {
  name: 'MoviesView',
  components: { MovieCards }
}
</script>

<style scoped>
</style>
