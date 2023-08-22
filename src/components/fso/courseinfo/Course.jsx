const Course = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          <Header course={course.name} />
          <Content parts={course.parts} />
          <Total
            total={course.parts.reduce((sum, part) => sum + part.exercises, 0)}
          />
        </div>
      ))}
    </div>
  );
};

const Header = ({ course }) => <h1>{course}</h1>;

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

const Total = ({ total }) => <p>Number of exercises {total}</p>;

export default Course;
