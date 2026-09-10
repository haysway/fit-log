import { useState } from 'react';
import './App.css'

const INITIAL_WORKOUTS = [
  { id: 'w1', title: "Morning Run", duration: 30, type: 'Cardio'},
  { id: 'w2', title: "Weight Training", duration: 45, type: 'Strength'},
]

function App() {
  const [workouts, setWorkouts] = useState(INITIAL_WORKOUTS);

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredDuration, setEnteredDuration] = useState('');
  const [enteredType, setEnteredType] = useState('Cardio');

  const clickHandler = (title) => {
    console.log("Workou clicked: " + title);
  };

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const durationChangeHandler = (event) => {
    setEnteredDuration(event.target.value);
  };

  const typeChangeHandler = (event) => {
    setEnteredType(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const workoutData = {
      id: Math.random().toString(),
      title: enteredTitle,
      duration: enteredDuration,
      type: enteredType
    }

    console.log('Submitted: ', workoutData);

    setWorkouts((prevWorkouts) => [workoutData, ...prevWorkouts]);

    setEnteredTitle('');
    setEnteredDuration('');
    setEnteredType('Cardio');
  }

  return (
    <div>
      <h1>Fitlog - Fitness Activity Tracker</h1>

      {/* Workout Form Mockup */}
      <form className="card" onSubmit={submitHandler}>
        <div classname="form-control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
            />
        </div>

        <div classname="form-control">
          <label>Duration (mins)</label>
          <input 
            type="number"
            min="1"
            step="1"
            value={enteredDuration}
            onChange={durationChangeHandler}
          />
        </div>

        <div classname="form-control">
          <label>Type</label>
          <select onChange={typeChangeHandler} value={enteredType}>
            <option value="Cardio">Cardio</option>
            <option value="Strength">Strength</option>
            <option value="Flexibility">Flexibility</option>
          </select>
        </div>

        <button type="submit">Add Workout</button>
      </form>

      {/* Mock Workout List */}
      <div className="card">
        <h2>Daily Log</h2>
        { workouts.map((workout) => (
          <div className="card" key={workout.id}>
            <h3>{workout.title}</h3>
            <p>Duration: {workout.duration} mins</p>
            <p>Type: {workout.type}</p>
            <button onClick={() => clickHandler(workout.title)}>Log Details</button>
          </div>
        ))}
      </div>


    </div>
  )
}

export default App
