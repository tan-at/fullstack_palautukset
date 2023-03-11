import Person from "./Person";

const Persons = (props) => {
  return (
    <div>
      {props.persons.map((person) => (
        <Person key={person.name} person={person} />
      ))}
    </div>
  );
};

export default Persons;
