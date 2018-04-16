/* namesReducer */

// actions for the namesReducer
const { INPUTCHANGE, SUBMITNAME } = require('../actions/namesActions');

const namesReducerInitialState = {
  inputValue: "",
  names: [],
}

function namesFunc(state) {
  const newState = [...state.names];
  newState.push(state.inputValue);
  return newState;
}

function namesReducer(state = namesReducerInitialState, action) {
  switch (action.type) {
    case INPUTCHANGE:
      return Object.assign({}, state, {
        inputValue: action.payload
      });
    case SUBMITNAME:
      return Object.assign({}, state, {
        names: namesFunc(state),
        //names: [...state.names, state.inputValue],
        inputValue: ""
      });
    default:
      return state;
  }
}


module.exports = {namesReducer}