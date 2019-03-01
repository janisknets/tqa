export default (state = {
  isLoggedIn: !!localStorage.getItem('token'),
  token: localStorage.getItem('token'),
  working: 0,
  err: null
}, action) => {
  const payload = action.payload && action.payload.data && action.payload.data.payload
  if (!payload) {
    return state
  }
  switch (action.type) {
    case 'POST_LOGIN_PENDING':
    case 'POST_REGISTER_PENDING':
      return {
        ...state,
        status: (state.working + 1)
      }
    case 'POST_LOGIN_REJECTED':
    case 'POST_REGISTER_REJECTED':
      return {
        ...state,
        err: payload.response  && payload.response.data,
        status: (state.working > 0 ? state.working - 1 : 0)
      }
    case 'POST_REGISTER_FULFILLED':
      return {
        ...state,
        err: null,
        status: (state.working > 0 ? state.working - 1 : 0)
      }
    case 'POST_LOGIN_FULFILLED':
      const { token } = payload
      localStorage.setItem('token', token)
      return {
        ...state,
        isLoggedIn: true,
        token: token,
        err: null,
        status: (state.working > 0 ? state.working - 1 : 0),
      }
    default:
      return state
  }
};
