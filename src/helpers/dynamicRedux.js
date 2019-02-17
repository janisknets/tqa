import API from 'helpers/API'

class DynamicRedux {
  constructor(baseURN) {
    this.baseURN = baseURN
    this.name = this.baseURN.toUpperCase()
  }

  get() {
    const cfg = {
      method: 'get',
      url: `${this.baseURN}`
    }
    return {
      type: `GET_${this.name}_ALL`,
      payload: API.call(cfg)
    }
  }

  getOne(urn) {
    const cfg = {
      method: 'get',
      url: `${this.baseURN}/${urn}`
    }
    return {
      type: `GET_${this.name}`,
      payload: API.call(cfg)
    }
  }

  patch(id, payload) {
    const cfg = {
      method: 'patch',
      url: `${this.baseURN}/${id}`,
      data: payload
    }
    return {
      type: `PATCH_${this.name}`,
      payload: API.call(cfg)
    }
  }

  post(payload) {
    const cfg = {
      method: 'post',
      url: `${this.baseURN}`,
      data: payload
    }
    return {
      type: `POST_${this.name}`,
      payload: API.call(cfg)
    }
  }

  delete(urn) {
    const cfg = {
      method: 'delete',
      url: `${this.baseURN}/${urn}`
    }
    return {
      type: `DELETE_${this.name}`,
      payload: API.call(cfg)
    }
  }

  reducer = (state = {
      values: {},
      working: 0,
      err: null
    }, action) => {
      if (action.type.indexOf(this.name) < 0 ) {
        return state
      }
      const pending = /.*_PENDING/;
      const rejected = /.*_REJECTED/;
      const fulfilled = /.*_FULFILLED/;
      if (pending.exec(action.type)) {
        return {
          ...state,
          status: (state.working + 1)
        }
      }
      if (rejected.exec(action.type)) {
        return {
          ...state,
          err: action.payload.response.data,
          status: (state.working > 0 ? state.working - 1 : 0)
        }
      }
      if (!fulfilled.exec(action.type)) {
        return state
      }
      if (action.type === `GET_${this.name}_ALL_FULFILLED`) {
        // let values = {}
        // state.values.forEach(x => values[x._id = {...x}])
        let values = { ...state.values }
        action.payload.data.forEach(x => values[x._id] = {...x})
        return {
          ...state,
          status: (state.working > 0 ? state.working - 1 : 0),
          values
        }
      } else if (action.type === `GET_${this.name}_FULFILLED` ||
                 action.type === `POST_${this.name}_FULFILLED` ||
                 action.type === `PATCH_${this.name}_FULFILLED` ) {
        let values = Array.isArray(state.values) ? state.values[0] : { ...state.values}
        const x = action.payload.data
        values[x._id] = {...x}
        return {
          ...state,
          status: (state.working > 0 ? state.working - 1 : 0),
          values
        }
      } else if (action.type === `DELETE_${this.name}_FULFILLED`) {
        let values = { ...state.values}
        const x = action.payload.data
        delete values[x._id]
        return {
          ...state,
          status: (state.working > 0 ? state.working - 1 : 0),
          values
        }
      }
      return state
  }

}

export default DynamicRedux
