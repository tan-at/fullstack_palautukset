const Header = (course) => {
  const a = Object.values(course);
  const b = Object.values(a[0]);
  return <h1> {b[0]} </h1>;
};

const Content = (course) => {
  const a = Object.values(course);
  const b = Object.values(a[0]);
  const c = b[1];
  console.log(c);

  return (
    <div>
      <p>
        {c[0].name} {c[0].exercises}
      </p>
      <p>
        {c[1].name} {c[1].exercises}
      </p>
      <p>
        {c[2].name} {c[2].exercises}
      </p>
    </div>
  );
};

const Total = (course) => {
  const a = Object.values(course);
  const b = Object.values(a[0]);
  const c = b[1];
  console.log(c);
  const d = c[0].exercises + c[1].exercises + c[2].exercises;
  console.log(d);

  return (
    <div>
      <p>Number of exercises {d}</p>
    </div>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
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
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default App;
