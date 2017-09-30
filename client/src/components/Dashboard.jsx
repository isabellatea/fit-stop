var Dashboard = (props) => (
  <div className="dashboard">
    <h1>Start Workout</h1>
    <div className="startButton">
      <img onClick= {props.goToCountdown} src="public/images/pizzablue.png" alt="Start"/>
    </div>
    <History workoutHistory={props.workoutHistory} workoutDate={props.workoutDate} workoutLength={props.workoutLength} loggedIn={props.loggedIn}/>
  </div>
);


window.Dashboard = Dashboard;
