<script setup>
import { ref } from 'vue'
import movieAPI from '@/lib/axios'
const movies = ref([])
const searchWord = ref('')
const searchMovies = async () => {
  if (!searchWord.value) return
  try {
    const res = await movieAPI.get('', {
      params: {
        apikey: 'ab23f732',
        s: searchWord.value, // 검색어
      },
    })
    movies.value = res.data.Search || []
  } catch (err) {
    console.error('검색 실패', err)
    movies.value = []
  }
}
const handleSubmit = (e) => {
  e.preventDefault()
  searchMovies()
}
const handleReset = () => {
  movies.value = []
  searchWord.value = ''
}
</script>

<template>
  <main>
    <form @submit="handleSubmit">
      <input type="text" v-model="searchWord" placeholder="영화 제목을 입력하세요" />
      <button type="submit">검색하기</button>
      <button type="button" @click="handleReset">초기화 하기</button>
    </form>
    <ul>
      <li v-for="movie in movies" :key="movie.imdbID">
        <input type="checkbox" :id="movie.imdbID" />
        <label :for="movie.imdbID">{{ movie.Title }}, {{ movie.Year }}</label>
      </li>
    </ul>
    <p v-if="!movies.length">검색 결과가 없어요..</p>
  </main>
</template>
