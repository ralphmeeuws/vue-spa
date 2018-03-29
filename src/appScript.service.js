import axios from 'axios'

axios.defaults.baseURL = 'https://api.fullstackweekly.com'

axios.interceptors.request.use(function (objConfig) {
  if (typeof window === 'undefined') {
    return objConfig
  }

  const strToken = window.localStorage.getItem('token')

  if (strToken) {
    objConfig.headers.Authorization = `Bearer ${strToken}`
  }

  return objConfig
})

const appService = {
  getPosts (numCategoryId) {
    return new Promise((resolve) => {
      axios.get(`/wp-json/wp/v2/posts?categories=${numCategoryId}&per_page=6`)
        .then(response => {
          resolve(response.data)
        })
    })
  },
  getProfile () {
    return new Promise((resolve) => {
      axios.get('/services/profile.php')
        .then(response => {
          resolve(response.data)
        })
    })
  },
  login (objCredentials) {
    return new Promise((resolve, reject) => {
      axios.post('/services/auth.php', objCredentials)
        .then(response => {
          resolve(response.data)
        }).catch(response => {
          reject(response.status)
        })
    })
  }
}

export default appService
