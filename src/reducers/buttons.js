import {ADD_ELEMENT} from '../actions/addElement'
import {CLEAR_ELEMENT} from '../actions/clearElement'

const initialState = {
  value: 0
}

export default (state=initialState, {type,payload} = {}) => {
  switch (type) {
    case ADD_ELEMENT:
      return {
        ...state,
        value: state.value ===  0 ? (payload) : (state.value + payload)
      }
    case CLEAR_ELEMENT:
      return {
        ...state, value: 0
      }

    default :
      return state
     }
 }
