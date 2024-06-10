const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  );
};

const Header = (props) => {
  console.log(props);

  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0].partName} exercises={props.parts[0].exercisesCount}/>
      <Part part={props.parts[1].partName} exercises={props.parts[1].exercisesCount}/>
      <Part part={props.parts[2].partName} exercises={props.parts[2].exercisesCount}/>
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  );
};

const App = () => {
  const course = { 
    name: 'Half Stack application development',
    parts: [
      { partName: 'Fundamentals of React', exercisesCount: 10},
      { partName: 'Using props to pass data', exercisesCount: 7},
      { partName: 'State of a component', exercisesCount: 14}
    ],
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total 
        total={
          course.parts[0].exercisesCount + course.parts[1].exercisesCount + course.parts[2].exercisesCount
        }
      />
    </div>
  );
};

export default App;
