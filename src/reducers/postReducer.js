import { createStore } from 'redux';

const initialState = {
  posts: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'CREATE_POST':
      return { state: [...initialState.posts, action.payload] };
    case 'DELETE_POST':
      return { state: [...initialState.posts].filter(post => post !== action.payload) };
    default:
      return state;
  }
}

const store = createStore(reducer);

store.dispatch({
  type: 'CREATE_POST',
  payload: 'blog about a thing'
});
 
console.log(store.getState());
