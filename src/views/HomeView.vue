<script setup>
import { ref, onMounted } from 'vue'
import movieAPI from '@/lib/axios'
const movies = ref([])
const searchWord = ref(null)
onMounted(() => {
  movieAPI
    .get('', {
      params: {
        apikey: 'ab23f732',
        s: 'parasite', // 검색어
      },
    })
    .then((res) => {
      console.log(res.data)
      movies.value = res.data.Search
      console.log(movies)
    })
    .catch((err) => {
      console.error('오류 발생!', err)
    })
})
</script>

<template>
  <main>
    {{ movies }}
  </main>
</template>
