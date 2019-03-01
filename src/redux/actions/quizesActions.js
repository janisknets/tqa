import DynamicRedux from 'helpers/dynamicRedux'

const dynamicRedux = new DynamicRedux('quizzes')

export const getQuizes = () => dynamicRedux.get()
export const getQuiz = (id) => dynamicRedux.getOne(id)
export const patchQuiz = (id, payload) => dynamicRedux.patch(id, payload)
export const postQuiz = (payload) => dynamicRedux.post(payload)
export const deleteQuiz = (id) => dynamicRedux.delete(id)
