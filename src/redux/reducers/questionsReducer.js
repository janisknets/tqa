export default (state = {
  values: {},
  working: 0,
  length: 0,
  err: null
}, action) => {
  switch (action.type) {
    case 'GET_QUESTIONS_PENDING':
      return {
        ...state,
        status: (state.working + 1)
      }
    case 'GET_QUESTIONS_REJECTED':
      return {
        ...state,
        status: (state.working > 0 ? state.working - 1 : 0),
        err: action.payload
      }
    case 'GET_QUESTIONS_FULFILLED':
      let questions = {...state.values}
      let inputs = action.payload.data
      let normalized = {}
      for (let question of inputs) {
        normalized[question._id] = question
      }
      return {
        ...state,
        status: (state.working > 0 ? state.working - 1 : 0),
        values: {
          ...questions,
          ...normalized
        }
      }
    default:
      return state
  }
};
