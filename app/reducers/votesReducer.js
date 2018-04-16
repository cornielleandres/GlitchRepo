/* votesReducer */

// actions for the votesReducer
const { UPVOTE, DOWNVOTE } = require('../actions/votesActions');

const votesInitialState = {
  voteScore: 0,
  voteCount: 0,
  upvoteText: 0,
  downvoteText: 0,
}

function votesReducer(state = votesInitialState, action) {
  switch (action.type) {
    case UPVOTE: 
      return Object.assign({}, state, {
        voteScore: ( state.voteScore ) ? state.voteScore + 1 : 1,
        voteCount: ( state.voteCount ) ? state.voteCount + 1 : 1,
        upvoteText: state.upvoteText + 1
      });
    case DOWNVOTE:
       return Object.assign({}, state, {
         voteScore: ( state.voteScore ) ? state.voteScore - 1 : -1,
         voteCount: ( state.voteCount ) ? state.voteCount + 1 : 1,
         downvoteText: state.downvoteText + 1
      });
    default:
      return state;
  }
}


module.exports = { votesReducer }