import config from '~/app/config'
const { API_ENDPOINT } = config

const getToken = (token = '') => {
  if (typeof window !== 'undefined') {
    token = localStorage.getItem(token)
  }
  return token
}

const TOKEN = getToken('token') || ''
const httpConfig = {
  method: `GET`,
  headers: {
    Authorization: TOKEN,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
}

class ApiService {
  fetch(url, httpRequest) {
    const pattern = /^((http|https):\/\/)/

    if (!pattern.test(url)) {
      url = `${API_ENDPOINT}/${url}`
    }

    return fetch(url, httpRequest)
      .then((resp) => resp.json())
      .catch(function (error) {
        // eslint-disable-next-line no-console
        console.log(error)
      })
  }

  get(path) {
    return this.fetch(path, {
      ...httpConfig,
      method: 'GET',
    })
  }

  post(path, params) {
    return this.fetch(path, {
      ...httpConfig,
      body: JSON.stringify(params),
      method: 'POST',
    })
  }

  put(path, params = {}) {
    return this.fetch(path, {
      ...httpConfig,
      body: JSON.stringify(params),
      method: 'PUT',
    })
  }

  patch(path, params = {}) {
    return this.fetch(path, {
      ...httpConfig,
      body: JSON.stringify(params),
      method: 'PATCH',
    })
  }

  delete(path) {
    return this.fetch(path, {
      ...httpConfig,
      method: 'DELETE',
    })
  }
}

export default new ApiService()
