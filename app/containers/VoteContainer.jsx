/* container which maps state and dispatches to its props 
  so it can be referenced in the VoteButtons component */
const { connect } = require('react-redux');

// action creators
const votesActions = require('../actions/votesActions');

// presentational component
const VoteButtons = require('../components/VoteButtons');


const mapStateToProps = (state) => {
  return {
    votes: state.votesReducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUpvote: () => {
      dispatch(votesActions.upvote())
    },
    onDownvote: () => {
      dispatch(votesActions.downvote())
    }
  }
}

const VoteContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VoteButtons);

module.exports = VoteContainer;