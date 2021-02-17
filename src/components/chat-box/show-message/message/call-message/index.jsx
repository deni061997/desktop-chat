import React from 'react';
import PropTypes from 'prop-types';

export default function CallMessage({ message }) {
  return <div className="call-message margin">{message.content}</div>;
}

CallMessage.propTypes = {
  message: PropTypes.object.isRequired,
};
