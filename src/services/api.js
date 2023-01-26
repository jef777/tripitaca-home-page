import axios from 'axios'
const baseURL = `${import.meta.env.VITE_APP_DUMMY_SERVER}`

// This section of code will handle the setting of headers and the baseURL for Tripitaka
const instance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default instance
