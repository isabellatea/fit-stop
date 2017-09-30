class Workout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	warmupActive: false,
    	workoutActive: false,
    	cooldownActive: false
    }
    this.highlightActiveTitle.bind(this);
  }

  componentDidMount() {
  	this.highlightActiveTitle();
  }

  highlightActiveTitle() {
  	if(this.props.exercise.type === 'warmup') {
  		this.setState({warmupActive: true, workoutActive: false, cooldownActive: false});
  	} else if (this.props.exercise.type === 'workout') {
  		this.setState({warmupActive: false, workoutActive: true, cooldownActive: false});
  	} else if (this.props.exercise.type === 'cooldown'){
  		this.setState({warmupActive: false, workoutActive: false, cooldownActive: true});
  	} else {
  		console.log('workout type does not exist')
  	}
  }

   render() {
    return (
    <div className="workout">
	  <span className={'warmupTitle ' + (this.state.warmupActive ? 'activeTitle' : null)}>Warmup</span>
	  <span className={'workoutTitle ' + (this.state.workoutActive ? 'activeTitle' : null)}>Workout</span>
	  <span className={'cooldownTitle ' + (this.state.cooldownActive ? 'activeTitle' : null)}>Cooldown</span>
	  <Timer timer= {this.props.timer} />


	  <Exercise exercise= {this.props.exercise} />

	  <button onClick={this.props.goToDashboard} className="blackButton">Quit & Back To Dashboard</button>
	  <a onClick={this.props.goToSummary} href="#">Summary</a>
	</div>
  	)
  }
};



window.Workout = Workout;

