import React from 'react';
import Online from './Online';

class Status extends React.Component {
  render() {
    const { isOffline } = this.props;
    if (isOffline === false) {
      return <Offline />;
    } else {
      return <Online />;
    }
  }
}

export default Status;
