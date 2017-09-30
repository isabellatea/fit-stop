var Summary = (props) => (
  <div className="summary">
    <h1>Workout Summary</h1>
    <span className="summaryCongrats congratulations">All Done! Congratulations! 🎉</span> <br />
    {!props.loggedIn && (<span className="alert">⚠️  You are currently not logged in. Workout Summary data will not be saved.</span>)}
    <div className="summaryStats">
      <h3 className="summaryTitle"> Date: </h3> {props.workoutDate}
      <h3 className="summaryTitle"> Length of Workout: </h3> {props.workoutLengthInMins} minutes
      <h3 className="summaryTitle"> Warmup: </h3>{props.currentWorkout[0].name}, {props.currentWorkout[1].name}, {props.currentWorkout[2].name}
      <h3 className="summaryTitle"> Workout: </h3>{props.currentWorkout[3].name}, {props.currentWorkout[4].name}, {props.currentWorkout[5].name}, {props.currentWorkout[6].name}, {props.currentWorkout[7].name}, {props.currentWorkout[8].name}, {props.currentWorkout[9].name}, {props.currentWorkout[10].name}, {props.currentWorkout[11].name}
      <h3 className="summaryTitle"> Cooldown: </h3>{props.currentWorkout[12].name}, {props.currentWorkout[13].name}, {props.currentWorkout[14].name}
    </div>
    <span className="summaryQuote">"Good things come to those who sweat."</span>
    <button onClick={props.goToDashboard} className="blackButton">Back To Dashboard</button>
  </div>

);


window.Summary = Summary;
