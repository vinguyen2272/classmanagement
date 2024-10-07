import axios from 'axios'

const axiosAPI = axios.create({
  baseURL: 'https://6698b84c2069c438cd6faaf9.mockapi.io/api/v1', // Replace with your API base URL
})

// Request interceptor
axiosAPI.interceptors.request.use(
  config => {
    // Do something before request is sent
    // For example, add an authorization token

    return config
  },
  error => {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Response interceptor
axiosAPI.interceptors.response.use(
  response => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  error => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response && error.response.status === 401) {
      // Handle unauthorized access, maybe redirect to login page
      console.error('Unauthorized access - Redirecting to login')
    }
    return Promise.reject(error)
  }
)

export default axiosAPI
