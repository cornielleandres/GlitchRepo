const React = require('react');

/* takes a prop 'label' and gets the other props from store via NamesContainer */
const Names = ({ label, names, inputValue, onInputChange, onSubmitName }) => {
  return (
    <div>
      
      <h2>{label}</h2>
      
      <input type="text" value={inputValue} onChange={onInputChange} />
      
      <button alt="submit name" onClick={onSubmitName}>Submit Name</button>
      
      <p>inputValue: {inputValue}</p>
      
      <ol>
        {names.map((name, i) => <li key={name + i}>{name}</li>)}
      </ol>
      
    </div>
  );
}

module.exports = Names;