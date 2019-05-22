
import { createStore } from 'redux';
import {
  addDrink,
  removeDrink,
  addSandwich,
  removeSandwich,
  addChips,
  removeChips
} from './actions/lunchActions';

const initialState = {
  drinks: [],
  sandwiches: [],
  chips: []
};

function reducer(state = initialState, action) {
  
  switch(action.type) {
    case 'ADD_DRINK': 
      return { ...state, drinks: [...state.drinks, action.payload] };
    case 'REMOVE_DRINK':
      return { ...state, drinks: state.drinks.filter(drink => drink !== action.payload) };
    case 'ADD_SANDWICH': 
      return { ...state, sandwiches: [...state.sandwiches, action.payload] };
    case 'REMOVE_SANDWICH':
      return { ...state, sandwiches: state.sandwiches.filter(sandwich => sandwich !== action.payload) };
    case 'ADD_CHIPS': 
      return { ...state, chips: [...state.chips, action.payload] };
    case 'REMOVE_CHIPS':
      return { ...state, chips: state.chips.filter(chips => chips !== action.payload) };
    default:
      return state;
  }
}

const store = createStore(reducer);


store.dispatch(addDrink('pop'));
store.dispatch(addDrink('soda'));
store.dispatch(removeDrink('pop'));
console.log('drinks', store.getState());

store.dispatch(addSandwich('cheese'));
store.dispatch(addSandwich('turkey'));
store.dispatch(removeSandwich('cheese'));
console.log('sandwich', store.getState());

store.dispatch(addChips('fritos'));
store.dispatch(addChips('doritos'));
store.dispatch(removeChips('fritos'));
console.log('chips', store.getState());

