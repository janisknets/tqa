import API from 'helpers/API'
import SHA256 from 'crypto-js/sha256'

export const login = (username, password) => {
  const hashed = SHA256(password).toString()
  const cfg = {
    method: 'post',
    url: `auth/login`,
    data: {
      username,
      hashedPassword: hashed
    }
  }
  return {
    type: 'POST_LOGIN',
    payload: API.call(cfg)
  }
}

export const register = (payload) => {
  if (!payload) {
    return
  }
  const hashed =  SHA256(payload.password).toString()
  payload.hashedPassword = hashed
  delete payload.password

  payload.dateOfBirth = payload.dateOfBirth.toISOString()

  const cfg = {
    method: 'post',
    url: 'auth/register',
    data: {
      ...payload
      // level: 'admin'
    }
  }
  return {
    type: 'POST_REGISTER',
    payload: API.call(cfg)
  }
}
