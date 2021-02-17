import React from 'react';
import PropTypes from 'prop-types';

export default function index({ message }) {
  return (
    <div className="message-status">
      {message?.sending ? (
        <i className="material-icons">timer</i>
      ) : (
        <>
          {!message?.read ? (
            <i className="material-icons">done</i>
          ) : (
            <i className="material-icons">done_all</i>
          )}
        </>
      )}
    </div>
  );
}

index.propTypes = {
  message: PropTypes.object.isRequired,
};
