import React from 'react';

class Logout extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onLogout}>Logout</button>
      </div>
    );
  }
}

export default Logout;
