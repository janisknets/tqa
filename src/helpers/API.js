import axios from 'axios'
import store from 'redux/store'


const getDefaultHeaders = () => {
  return {
    Authorization: `Bearer ${store.getState().auth.token}`
  }
}

class APIClass {
  constructor() {
    this.instance = axios.create({
      baseURL: process.env.REACT_APP_APIURL,
      timeout: 1000,
      headers: {
        responseType: 'application/json'
      }
    });
  }

  call (cfg) {
    return new Promise(async (resolve, reject) => {
      try {
        cfg.headers = {
          ...getDefaultHeaders(),
          ...cfg.headers
        }
        resolve(await this.instance.request(cfg))
      } catch (error) {
        reject(error)
      }
    })
  }
}

const API = new APIClass()

export default API
