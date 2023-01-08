<template>
  <div class="input-group">
    <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
    <button type="button" class="btn btn-outline-primary">search</button>
  </div>
</template>

<script>
export default {
  name: 'SearchBar'
}
</script>

<style scoped>
.searchbar{
  height: 500px;
  padding: 40px;
  margin-top: 40px;
  margin-right: 30px;
  margin-bottom: 40px;
  margin-left: 30em;
}
</style>
