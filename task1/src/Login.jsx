import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onLogin}>Login</button>
      </div>
    );
  }
}

export default Login;
