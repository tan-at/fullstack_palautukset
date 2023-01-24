const Header = (c) => {
  console.log(c);
  return (
    <div>
      <h1>{c}</h1>
    </div>
  );
};

const Content = (n, e) => {
  console.log(n, e);
  return (
    <div>
      <p>
        {n} {e}{" "}
      </p>
    </div>
  );
};

const Total = (e1, e2, e3) => {
  console.log(e1, e2, e3);
  return (
    <div>
      <p>Number of exercises {e1 + e2 + e3}</p>
    </div>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <div>
      {Header(course)}
      {Content(part1.name, part1.exercises)}
      {Content(part2.name, part2.exercises)}
      {Content(part3.name, part3.exercises)}
      {Total(part1.exercises, part2.exercises, part3.exercises)}
    </div>
  );
};

export default App;
