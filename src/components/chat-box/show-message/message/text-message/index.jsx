import React from 'react';
import OutBoxMessage from './outbox';
import InBoxMessage from './inbox';
import PropTypes from 'prop-types';

export default function TextMessage({ id, message }) {
  const isOutboxMessage = message.toUserId === id;

  if (isOutboxMessage) {
    return <OutBoxMessage id={id} message={message} />;
  }

  return <InBoxMessage id={id} message={message} />;
}

TextMessage.propTypes = {
  id: PropTypes.string.isRequired,
  message: PropTypes.object.isRequired,
};
