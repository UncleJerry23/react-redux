const ADD_DRINK = 'ADD_DRINK';
const REMOVE_DRINK = 'REMOVE_DRINK';

const ADD_SANDWICH = 'ADD_SANDWICH';
const REMOVE_SANDWICH = 'REMOVE_SANDWICH';

const ADD_CHIPS = 'ADD_CHIPS';
const REMOVE_CHIPS = 'REMOVE_CHIPS';

const addDrink = drink => ({
  type: ADD_DRINK,
  payload: drink
});

const removeDrink = drink => ({
  type: REMOVE_DRINK,
  payload: drink
});

const addSandwich = sandwich => ({
  type: ADD_SANDWICH,
  payload: sandwich
});

const removeSandwich = sandwich => ({
  type: REMOVE_SANDWICH,
  payload: sandwich
});

const addChips = chips => ({
  type: ADD_CHIPS,
  payload: chips
});

const removeChips = chips => ({
  type: REMOVE_CHIPS,
  payload: chips
});


export {
  addDrink,
  removeDrink,
  addSandwich,
  removeSandwich,
  addChips,
  removeChips
};
