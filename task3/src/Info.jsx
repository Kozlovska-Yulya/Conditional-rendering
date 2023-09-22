import React from 'react';

const Info = ({ info }) => {
  if (!info) {
    return null;
  }

  return (
    <div className="info">
      <div className="message">{info}</div>
    </div>
  );
};

export default Info;
