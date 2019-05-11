export const LIST_DATA_URL = 'sample-data.json'

export const REQUEST_DATA = 'REQUEST_DATA'
export const REQUEST_DATA_BY_ID = 'REQUEST_DATA_BY_ID'
export const SIMILAR_ITEM_DATA = 'SIMILAR_ITEM_DATA'
export const RECEIVE_DATA = 'RECEIVE_DATA'
export const SELECT_DATA = 'SELECT_DATA'
export const INVALIDATE_DATA = 'INVALIDATE_DATA'

export function selectData(param:String) {
    return {
      type: SELECT_DATA,
      param
    }
  }

  export function invalidateData(param:String) {
    return {
      type: INVALIDATE_DATA,
      param
    }
  }
  
  function requestData(param:String) {
    return {
      type: REQUEST_DATA,
      param
    }
  }
  
  
  function receiveData(param:String, json:any, state:any) {
    return {
      type: RECEIVE_DATA,
      param,
      data: json.data,
      receivedAt: Date.now()
    }
  }
  
  function fetchData(param:String) {
    return (dispatch:any, getState:any) => {
      dispatch(requestData(param))
      return fetch(LIST_DATA_URL)
        .then(response => response.json())
        .then(json => dispatch(receiveData(param, json, getState())))
    }
  }
  
  function shouldFetchData(state:any, param:String) {
    // const data = state.dataRecived[param];
    // if (!data) {
       return true
    // } else if (data.isFetching) {
    //   return false
    // } else {
    //   return data.didInvalidate
    // }
  }
  
  export function fetchDataIfNeeded(param:String) {
    return (dispatch:any, getState:any) => {
      if (shouldFetchData(getState(), param)) {
        return dispatch(fetchData(param), param)
      }
    }
  }