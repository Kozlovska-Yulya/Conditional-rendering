import React from 'react';
import Greeting from './Greeting';
import Login from './Login';
import Logout from './Logout';

class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  onLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  onLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    // let button = this.state.isLoggedIn ? (
    //   <button onClick={this.handleLogout}>Logout</button>
    // ) : (
    //   <button onClick={this.handleLogin}>Login</button>
    // );

    // if (this.state.isLoggedIn) {
    //   <button onClick={this.handleLogout}>Logout</button>;
    // } else {
    //   <button onClick={this.handleLogin}>Login</button>;
    // }
    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {this.state.isLoggedIn ? (
          <button onClick={this.onLogout}>Logout</button>
        ) : (
          <button onClick={this.onLogin}>Login</button>
        )}
      </div>
    );
  }
}

export default Auth;
