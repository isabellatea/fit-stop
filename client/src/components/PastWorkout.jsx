var PastWorkout = (props) => (
  <div className="pastWorkout">
    <p> <span className="dateAndTime">{props.date}</span> | <span>{props.lengthOfWorkout} minutes</span> </p>
  </div>
);


window.PastWorkout = PastWorkout;

