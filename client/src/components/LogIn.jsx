var Login = (props) => (
  <div className="loginPage">
  <form onSubmit={props.login}>
  <label htmlFor="username">Username:  </label>
      <input id="username" type="text" name="username"/>


      <label htmlFor="password">Password:</label>
      <input id="password" type="password" name="password"/>
      <input type="submit" value="Login"/>
  </form>
  </div>
);


window.Login = Login;
