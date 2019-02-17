import DynamicRedux from 'helpers/dynamicRedux'

const dynamicRedux = new DynamicRedux('questions')

export const getQuestions = () => dynamicRedux.get()
export const getQuestion = (id) => dynamicRedux.getOne(id)
export const patchQuestion = (id, payload) => dynamicRedux.patch(id, payload)
export const postQuestion = (payload) => dynamicRedux.post(payload)
export const deleteQuestion = (id) => dynamicRedux.delete(id)
