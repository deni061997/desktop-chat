import React from 'react';
import PropTypes from 'prop-types';

export default function index({ message, sendMessage }) {
  return (
    <div className="message-icons">
      <a href="#">
        <i className="material-icons">attach_file</i>
      </a>
      {message ? (
        <a onClick={sendMessage} href="#">
          <i className="material-icons">send</i>
        </a>
      ) : (
        <a href="#">
          <i className="material-icons">mic</i>
        </a>
      )}
    </div>
  );
}

index.propTypes = {
  message: PropTypes.string.isRequired,
  sendMessage: PropTypes.func.isRequired,
};
