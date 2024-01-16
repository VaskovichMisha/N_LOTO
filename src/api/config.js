import axios from "axios";
// import store from '../store'
import router from "../router/index.js";

const BASE_URL = 'http://65.21.50.89'

function blockCatch(error) {
  if (error.response) {
    // store.dispatch('errors/showError', error.response.data.message)
  }
  if (error?.response?.status === 401) {
    localStorage.removeItem('token')
    router.push('/')
  }
  if (error?.response?.status === 422) {
    localStorage.removeItem('token')
    router.push('/')
  }
  console.error(error)
}

export async function postAsync(url, data, isFile) {

  const config = {
    headers: {
      "Authorization": localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : '',
      "Accept": "application/json",
      "X-XSRF-TOKEN": "eyJpdiI6Im9JeXc5OWJTQTlGTUp1ZDhCWVZzVlE9PSIsInZhbHVlIjoiNUVLSHhqVWlsNFZ6V1VGWDVFNitFQ2hGdkE5bkR4VFBmc3FtR1hWdG5HUVpmUkpybVB3VXhjUDZ1RmtFeStKWkxQbDhvL1lEbXdKNjN3a2pkcmd5S2lObENEN3lCcUtDb0hIdm1aRzZJUkE0Z0tERnVIdDVPT2c1SVQ3WUNLMHMiLCJtYWMiOiJjNmM1MjAwODA1NGVmOGZiMTI0ZGU3Yzc5MjUxODEyNjdjNTNmZDc0NjgxMzE5MDNiMmMyOTU0NTJhZDAwMjIyIiwidGFnIjoiIn0"
    }
  }

  isFile ? config.headers['Content-Type'] = "multipart/form-data" : config.headers['Content-Type'] = "application/json"

  try {
    let response = await axios.post(BASE_URL + url, data, config)

    if (response.status === 200 || response.status === 201 || response.status === 204) {
      return response.data
    }

  } catch (error) {
    blockCatch(error)
  }

  return undefined
}


export async function getAsync(url, queryParams) {
  const config = {
    headers: {
      "Authorization": localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : '',
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
  }

  queryParams ? config.params = queryParams : ''

  try {
    let response = await axios.get(BASE_URL + url, config)
    if (response.status === 200 || response.status === 201) {
      return response.data
    }
  } catch (error) {
    blockCatch(error)
  }
}

export async function deleteAsync(url) {
  const config = {
    headers: {
      "Authorization": localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : '',
      "Content-Type": "application/json",
      "Accept": "application/json",
    }
  }

  try {
    let response = await axios.delete(BASE_URL + url, config)
    if (response.status === 200) {
      return response.data
    }
  } catch (error) {
    blockCatch(error)
  }
}

export async function putAsync(url, data) {

  const config = {
    headers: {
      "Authorization": localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : '',
      "Content-Type": "application/json",
      "Accept": "application/json",
    }
  }

  try {
    let response = await axios.put(BASE_URL + url, data, config)

    if (response.status === 200 || response.status === 201 || response.status === 204) {
      return response.data
    }

  } catch (error) {
    blockCatch(error)
  }

  return undefined
}