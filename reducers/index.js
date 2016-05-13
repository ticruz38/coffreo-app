import {
  combineReducers
} from 'redux';
import datas from '../data.js';


const visibleUser = (state = 0, action) => {
  switch (action.type) {
    case 'SELECT_USER':
      return action.id;
    case 'DESELECT_USER':
      return action.id || null;
    default:
      return state
  }
}

const user = (state, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        id: Math.random().toString(36).substr(2, 9), //randomly generate an id
        ...action.user
      }
    default:
      return state
  }
}

const users = (state = state || datas, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [
        ...state,
        user(undefined, action)
      ]
      case 'UPDATE_USER':
      console.log(action.id)
      state.filter(user => user.id === action.id)[0][action.field] = action.value;
      return Object.assign([], state);
    default:
      return state
  }
}

const coffreoApp = combineReducers({
  users,
  visibleUser
})

export default coffreoApp;
