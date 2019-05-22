import {
  addDrink,
  removeDrink,
  addSandwich,
  removeSandwich,
  addChips,
  removeChips
} from './lunchActions';

const ADD_DRINK = 'ADD_DRINK';
const REMOVE_DRINK = 'REMOVE_DRINK';

const ADD_SANDWICH = 'ADD_SANDWICH';
const REMOVE_SANDWICH = 'REMOVE_SANDWICH';

const ADD_CHIPS = 'ADD_CHIPS';
const REMOVE_CHIPS = 'REMOVE_CHIPS';

describe('lunch actions', () => {
  
  it('adds drink', () => {
    const drinkRes = addDrink('turkey');

    expect(drinkRes).toEqual({
      type: ADD_DRINK,
      payload: 'turkey'
    });
  });

  it('removes drink', () => {
    const drinkRes = removeDrink('turkey');

    expect(drinkRes).toEqual({
      type: REMOVE_DRINK,
      payload: 'turkey'
    });
  });

  it('adds sandwich', () => {
    const sandwichRes = addSandwich('turkey');

    expect(sandwichRes).toEqual({
      type: ADD_SANDWICH,
      payload: 'turkey'
    });
  });

  it('removes sandwich', () => {
    const sandwichRes = removeSandwich('turkey');

    expect(sandwichRes).toEqual({
      type: REMOVE_SANDWICH,
      payload: 'turkey'
    });
  });

  it('adds chips', () => {
    const chipsRes = addChips('turkey');

    expect(chipsRes).toEqual({
      type: ADD_CHIPS,
      payload: 'turkey'
    });
  });

  it('removes chips', () => {
    const chipsRes = removeChips('turkey');

    expect(chipsRes).toEqual({
      type: REMOVE_CHIPS,
      payload: 'turkey'
    });
  });
});


