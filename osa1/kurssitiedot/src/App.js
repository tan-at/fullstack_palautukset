const Header = (course) => {
  console.log(course);
  return <h1> {course.course} </h1>;
};

const Content = (parts) => {
  const x = Object.values(parts);
  const y = x[0];
  console.log(y);

  return (
    <div>
      <p>
        {y[0].name} {y[0].exercises}
      </p>
      <p>
        {y[1].name} {y[1].exercises}
      </p>
      <p>
        {y[2].name} {y[2].exercises}
      </p>
    </div>
  );
};

const Total = (parts) => {
  const x = Object.values(parts);
  const y = x[0];
  console.log(y);
  const z = y[0].exercises + y[1].exercises + y[2].exercises;
  return (
    <div>
      <p>Number of exercises {z}</p>
    </div>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
