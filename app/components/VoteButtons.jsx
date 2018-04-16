const React = require('react');

/* takes a prop 'label' and gets the other props from store via VoteContainer 
  and returns a div containing the label, vote buttons, and vote summary */
const VoteButtons = function({ label, onUpvote, onDownvote, votes }) {
  return (
    <div>
      
      <h2>{label}</h2>
      
      <p>Upvoted { votes.upvoteText } times.</p>
      <p>Downpvoted { votes.downvoteText } times.</p>
      
      <button alt="upvote" onClick={onUpvote}>&uarr;</button> &nbsp;
      <button alt="downvote" onClick={onDownvote}>&darr;</button>
      
      <p>Score: {votes.voteScore} out of {votes.voteCount} total votes!</p>

    </div>
  );
}

module.exports = VoteButtons;