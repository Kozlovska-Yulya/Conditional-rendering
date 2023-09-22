import React from 'react';
import Online from './Online';
import Offline from './Offline';

class Status extends React.Component {
  render() {
    const { isOnline } = this.props;
    if (isOnline) {
      return <Online />;
    } else {
      return <Offline />;
    }
  }
}

export default Status;
