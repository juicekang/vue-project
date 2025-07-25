import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://www.omdbapi.com/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
})
export default instance
