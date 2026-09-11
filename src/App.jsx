import WorkoutItem from './components/WorkoutItem';
import WorkoutForm from './components/WorkoutForm';
import { useState } from 'react';
import './App.css';

const INITIAL_WORKOUTS = [
  { id: 'w1', title: "Morning Run", duration: 30, type: 'Cardio'},
  { id: 'w2', title: "Weight Training", duration: 45, type: 'Strength'},
];

function App() {
  const [workouts, setWorkouts] = useState(INITIAL_WORKOUTS);

  const clickHandler = (title) => {
    console.log("Workout clicked: " + title);
  };

  return (
    <div>
      <h1>Fitlog - Fitness Activity Tracker</h1>

      {/* Workout Form Mockup */}
      <WorkoutForm/>

      {/* Mock Workout List */}
      <div className="card">
        <h2>Daily Log</h2>
        { workouts.map((workout) => (
          <WorkoutItem
            key={workout.id}
            title={workout.title}
            duration={workout.duration}
            type={workout.type}
          />
        ))}
      </div>


    </div>
  )
}

export default App;
