/* container which maps state and dispatches to its props 
  so it can be referenced in the Names component */
const { connect } = require('react-redux');

// actions
const namesActions = require('../actions/namesActions');

// presentational component
const Names = require('../components/Names');


const mapStateToProps = function(state) {
  return {
    inputValue: state.namesReducer.inputValue,
    names: state.namesReducer.names
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    onInputChange: (e) => {
      dispatch(namesActions.onInputChange(e))
    },
    onSubmitName: () => {
      dispatch(namesActions.onSubmitName())
    }
  }
}

const NamesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Names);

module.exports = NamesContainer;