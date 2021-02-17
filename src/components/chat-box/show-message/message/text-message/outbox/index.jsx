import React from 'react';
import MessageSetting from '../message-setting';
import MessageText from './message-text';
import TimeStatus from './time-status';
import PropTypes from 'prop-types';

export default function OutBoxMessage({ message }) {
  return (
    <div className="outbox-message margin">
      <div className="single-message">
        <MessageText message={message} />
        <TimeStatus message={message} />
        <MessageSetting id={message._id} />
      </div>
    </div>
  );
}

OutBoxMessage.propTypes = {
  message: PropTypes.object.isRequired,
};
