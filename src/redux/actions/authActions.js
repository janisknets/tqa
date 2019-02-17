import API from 'helpers/API'
import SHA256 from 'crypto-js/sha256'

export const login = (username, password) => {
  const cfg = {
    method: 'post',
    url: `auth/login`,
    data: {
      username,
      password: SHA256(password)
    }
  }
  return {
    type: 'POST_LOGIN',
    payload: API.call(cfg)
  }
}

export const register = (payload) => {
  payload.hashedPassword = SHA256(payload.password)
  delete payload.password
  const cfg = {
    method: 'post',
    url: 'auth/register',
    data: {
      ...payload
    }
  }
  return {
    type: 'POST_REGISTER',
    payload: API.call(cfg)
  }
}
