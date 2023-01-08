<template>
  <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Reviews4U</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/movies">Movies</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/login" to="Login" >login</a></li>
              <li><a class="dropdown-item" href="/signup" to="Signup">register</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="/forgot-password" to="Forgot-Password">forgot Password</a></li>
            </ul>
          </li>
        </ul>
    </div>
    </div>
  </nav>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Navbar',
  components: {},

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
      .then(result => result.forEach(movie => {
        this.movies.push(movie)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>

</style>
