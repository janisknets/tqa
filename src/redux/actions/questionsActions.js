import axios from 'axios'
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
        resolve(await this.instance[cfg.method](`${cfg.url}`, cfg.config))
      } catch (error) {
        reject(error)
      }
    })
  }
}

const API = new APIClass()

export function getQuestions () {
  const cfg = {
    method: 'get',
    url: `questions`,
  }
  return {
    type: 'GET_QUESTIONS',
    payload: API.call(cfg)
  }
}
