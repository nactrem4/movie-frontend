<template>
  <div>
    <img
      :src="movie.imagePath"
      class="img-fluid" alt="Responsive image">
  </div>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ movie.filmName }}</h5>
      <p class="card-text"><small class="">{{ movie.schauSpielerNamen }}</small></p>
    </div>
    <div>
      <h4>Bewertungen</h4>
    </div>
    <div style="display:flex" class="flex-row flex-wrap">
      <div class="col-4" v-for="review in this.reviews" :key="review.id">
        <h5>{{ review.nutzerBewertung }}</h5>
      </div>
    </div>
    <div class="flex-row">
      <textarea class="flex-column" v-model="reviewText"> </textarea>
    </div>
    <div class="flex-row">
      <button class="accordion-button align-middle flex-column" @click="onSaveClick">Save</button>
    </div>
  </div>

</template>

<script>
export default {
  name: 'MovieReviewView',
  data () {
    return {
      reviews: [],
      movie: Object,
      reviewText: String
    }
  },
  mounted () {
    this.reviewText = ''
    const movieID = this.$route.params.id
    const reviewEndpoint = ('http://localhost:8080/api/v1/reviews/movie/' + movieID)
    const requestOption = {
      method: 'GET'
    }
    fetch(reviewEndpoint, requestOption)
      .then(response => response.json())
      .then(result => {
        this.reviews = result
      })

    const movieEndpoint = ('http://localhost:8080/api/v1/movies/' + movieID)
    fetch(movieEndpoint, requestOption)
      .then(response => response.json())
      .then(result => {
        this.movie = result
      })
  },
  methods: {
    onSaveClick () {
      if (this.reviewText !== '' || this.reviewText !== null) {
        const createReviewEndpoint = ('http://localhost:8080/api/v1/create-review')
        const requestOption = {
          method: 'POST',
          body: JSON.stringify({
            benutzerBewertung: this.reviewText,
            punktZahl: 5,
            movieEntity: this.movie
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
        }

        fetch(createReviewEndpoint, requestOption)
          .then(result => {
            console.log(result)
            const reviewEndpoint = ('http://localhost:8080/api/v1/reviews/movie/' + this.movie.id)
            const requestOption = {
              method: 'GET'
            }
            fetch(reviewEndpoint, requestOption)
              .then(response => response.json())
              .then(result => {
                this.reviews = result
                this.reviewText = ''
              })
          })
          .catch(error => {
            console.log(error)
          })
      }
    }
  }
}
</script>

<style>
</style>
