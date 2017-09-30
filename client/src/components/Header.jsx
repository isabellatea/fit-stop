var Header = (props) => (
  <div className="header">

    {props.loggedIn && (<button className="blackButton" onClick={props.logOut}>Log Out</button>)}
    {!props.loggedIn && (<button className="blackButton" onClick={props.goToLogin}>Log In</button>)}

    <button className="blackButton" onClick={props.goToSignUp}>Sign Up</button>
    <div>
      <h1> FitStop </h1>
    </div>
  </div>
);


window.Header = Header;
