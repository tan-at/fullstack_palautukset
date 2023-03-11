import React from "react";

const PersonForm = (props) => {
  return (
    <form onSubmit={props.addPerson}>
      name:
      <input value={props.newName} onChange={props.handleNameChange} />
      <br />
      number:
      <input value={props.newNumber} onChange={props.handleNumberChange} />
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
