const Header = ({ header }) => {
  return <h1>{header.name}</h1>;
};

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

const Total = ({ total }) => {
  const totalExcercises = total.reduce(
    (accumulator, currentValue) => accumulator + currentValue.exercises,
    0
  );
  return <b>total of {totalExcercises} exercises</b>;
};

const Course = ({ course }) => {
  const parts = course.parts;

  return (
    <div>
      <Header header={course} />
      <div>
        {parts.map((part) => (
          <Part key={part.id} part={part} />
        ))}
        <Total total={parts} />
      </div>
    </div>
  );
};

export default Course;
