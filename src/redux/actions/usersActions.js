import DynamicRedux from 'helpers/dynamicRedux'

const dynamicRedux = new DynamicRedux('users')

export const getUsers = () => dynamicRedux.get()
export const getUser = (id) => dynamicRedux.getOne(id)
export const getSelf = () => dynamicRedux.getOne('self')
export const patchUser = (id, payload) => dynamicRedux.patch(id, payload)
export const deleteUser = (id) => dynamicRedux.delete(id)
