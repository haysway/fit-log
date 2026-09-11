
function WorkoutSummary(props) {
    const totalCount = props.items.length;

    // I had to lookup how to use the reduce method again
    const totalMinutes = props.items.reduce((total, workout) => {
        return total + Number(workout.duration);
    }, 0);

    return (
        <div className="card">
            Showing {totalCount} workouts ({totalMinutes} total minutes)
        </div>
    );
}

export default WorkoutSummary;