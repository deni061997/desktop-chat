import React from 'react';
import dayjs from 'dayjs';
import MessageStatus from './message-status';
import PropTypes from 'prop-types';

export default function index({ message }) {
  return (
    <div className="notMessage">
      <div className="time-of-message">
        {dayjs(message?.time).format('hh:mm')}
      </div>
      <MessageStatus message={message} />
    </div>
  );
}

index.propTypes = {
  message: PropTypes.object.isRequired,
};
