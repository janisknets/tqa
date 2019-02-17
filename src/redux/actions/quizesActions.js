import DynamicRedux from 'helpers/dynamicRedux'

const dynamicRedux = new DynamicRedux('quizes', 'quiz', 'quizes')

export const getQuizes = () => dynamicRedux.get()
export const getQuiz = (id) => dynamicRedux.getOne(id)
export const patchQuiz = (id, payload) => dynamicRedux.patch(id, payload)
export const postQuiz = (payload) => dynamicRedux.patch(payload)
export const deleteQuiz = (id) => dynamicRedux.delete(id)
