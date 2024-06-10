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
  const course = 'Half Stack application development';
  const parts = [
    { partName: 'Fundamentals of React', exercisesCount: 10},
    { partName: 'Using props to pass data', exercisesCount: 7},
    { partName: 'State of a component', exercisesCount: 14}
  ];

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total 
        total={parts[0].exercisesCount + parts[1].exercisesCount + parts[2].exercisesCount}
      />
    </div>
  );
};

export default App;
