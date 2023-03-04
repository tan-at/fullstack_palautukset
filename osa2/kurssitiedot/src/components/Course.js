const Header = ({ header }) => {
  return <h1>{header.name}</h1>;
};

const Part = ({ part }) => {
  //console.log("Part-osassa: ", part);
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

const Course = ({ course }) => {
  //console.log(course);
  //console.log("Course-osassa: ", course.parts);
  const parts = course.parts;

  return (
    <div>
      <Header header={course} />
      <div>
        {parts.map((part) => (
          <Part key={part.id} part={part} />
        ))}
      </div>
    </div>
  );
};

export default Course;
