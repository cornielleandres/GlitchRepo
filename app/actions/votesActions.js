/* actions & action creators for votes */

module.exports = {
  
  // actions
  DOWNVOTE: 'DOWNVOTE',
  
  UPVOTE: 'UPVOTE',
  
  
  // action creators
  downvote: function() {
    return {
      type: this.DOWNVOTE,
    }
  },
  
  upvote: function() {
    return {
      type: this.UPVOTE,
    }
  }
}
