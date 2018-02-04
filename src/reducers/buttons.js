import {ADD_ELEMENT} from '../actions/addElement'

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

    default :
      return state
     }
 }
