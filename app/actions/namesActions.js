/* actions & action creators for names */

module.exports = {
  
  // actions
  INPUTCHANGE: 'INPUTCHANGE',
  
  SUBMITNAME: 'SUBMITNAME',
  
  
  // action creators
  onInputChange: function(e) {
    return {
      type: this.INPUTCHANGE,
      payload: e.target.value
    }
  },
  
  onSubmitName: function() {
    return {
      type: this.SUBMITNAME
    }
  }
}
