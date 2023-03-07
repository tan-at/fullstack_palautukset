import { useState } from "react";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas" },
    { name: "Ada Lovelace" },
    { name: "Dan Abramov" },
    { name: "Mary Poppendieck" },
  ]);
  const [newName, setNewName] = useState("");
  const [showAll, setShowAll] = useState(true);

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
    };
    setPersons(persons.concat(personObject));
    setNewName("");
  };

  const handlePersonChange = (event) => {
    //console.log(event.target.value);
    setNewName(event.target.value);
  };

  return (
    <div>
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={addPerson}>
          name:
          <input value={newName} onChange={handlePersonChange} />
          <div>
            <button type="submit">add</button>
          </div>
        </form>
        <h2>Phonebook2</h2>
        <h2>Numbers</h2>
        {persons.map((persons) => (
          <Persons key={persons.name} person={persons.name} />
        ))}
      </div>
    </div>
  );
};

export default App;
