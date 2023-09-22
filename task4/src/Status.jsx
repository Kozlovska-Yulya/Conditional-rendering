import React from 'react';
import Online from './Online';

class Status extends React.Component {
  render() {
    const { isOnline } = this.props;

    {
      isOnline ? <Online /> : <Offline />;
    }
  }
}

export default Status;
