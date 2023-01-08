import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import MovieView from '@/views/MovieView'
import MovieReviewView from '@/views/MovieReviewView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/movies',
    name: 'movie',
    component: MovieView
  },
  {
    path: '/reviews/movie/:id',
    name: 'movie-review',
    component: MovieReviewView
  }]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
