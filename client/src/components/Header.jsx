var Header = (props) => (
  <div className="header">
    {props.showButtons && props.loggedIn && (<button className='blackButton' onClick={props.logOut}>Log Out</button>)}
    {props.showButtons && !props.loggedIn && (<button className='blackButton' onClick={props.goToLogin}>Log In</button>)}
    {!props.loggedIn && props.showButtons && (<button className='blackButton' onClick={props.goToSignUp}>Sign Up</button>)}
    <div>
      <h1> FitStop <span className='username'>{props.username}</span></h1>
    </div>
  </div>
);


window.Header = Header;
