import { createStore } from 'redux';

const initialState = {
  drinks: '',
  sandwiches: '',
  chips: ''
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
      return { ...state, sandwich: state.sandwiches.filter(sandwich => sandwich !== action.payload) };
    case 'ADD_CHIPS': 
      return { ...state, chips: [...state.chips, action.payload] };
    case 'REMOVE_CHIPS':
      return { ...state, chips: state.chips.filter(chips => chips !== action.payload) };
    default:
      return state;
  }
}

const store = createStore(reducer);

console.log('before anything', store.getState());

store.dispatch({
  type: 'ADD_DRINK',
  payload: 'soder'
});

console.log('add soder', store.getState());

store.dispatch({
  type: 'ADD_DRINK',
  payload: 'pop'
});

console.log('add pop', store.getState());

store.dispatch({
  type: 'ADD_SANDWICH',
  payload: 'tuna'
});

console.log('after tuna', store.getState());

store.dispatch({
  type: 'REMOVE_DRINK',
  payload: 'soder'
});
store.dispatch({
  type: 'REMOVE_DRINK',
  payload: 'soder'
});

console.log('after remove pop', store.getState());

store.dispatch({
  type: 'ADD_CHIPS',
  payload: 'fritos'
});

store.dispatch({
  type: 'ADD_CHIPS',
  payload: 'doritos'
});

console.log('after adding 2 chips', store.getState());

store.dispatch({
  type: 'REMOVE_CHIPS',
  payload: 'fritos'
});

console.log('after removing fritos', store.getState());
