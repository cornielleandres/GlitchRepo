const React = require('react');

// redux
const { createStore, combineReducers } = require('redux');

// reducers
const { namesReducer } = require('./reducers/namesReducer');
const { votesReducer } = require('./reducers/votesReducer');


const store = createStore(combineReducers({ namesReducer, votesReducer }));

module.exports = { store }