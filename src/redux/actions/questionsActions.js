import API from 'helpers/API'

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
