import { combineReducers } from 'redux'
import {
  SELECT_DATA,  INVALIDATE_DATA,
  REQUEST_DATA,  RECEIVE_DATA, REQUEST_DATA_BY_ID
} from '../actions/index'

function selectedData(state = 'listData', action:any) {
  switch (action.type) {
    case SELECT_DATA:
      return action.param
    default:
      return state
  }
}

function data(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: [],
    item:{}
  },
  action:any
) {
  switch (action.type) {
    case INVALIDATE_DATA:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case REQUEST_DATA:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_DATA:    
    
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.data,
        lastUpdated: action.receivedAt
        
      })
      case REQUEST_DATA_BY_ID:        
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        item: action.data,
        lastUpdated: action.receivedAt
        
      })      
    default:
      return state
  }
}

function dataRecived(state = {}, action:any) {
  switch (action.type) {
    case INVALIDATE_DATA:
    case RECEIVE_DATA:
    case REQUEST_DATA:
      return Object.assign({}, state, {
        //[action.param]: data(state[action.param], action)
      })
      case REQUEST_DATA_BY_ID:
      
      return Object.assign({}, state, {
        //[action.param]: data(state[action.param], action)
      })      
    default:
      return state
  }
}

const rootReducer = combineReducers({
    dataRecived,
    selectedData    
})

export default rootReducer