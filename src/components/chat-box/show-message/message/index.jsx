import React from 'react';
import { useParams } from 'react-router-dom';
import CallMessage from './call-message';
import TextMessage from './text-message';
import PropTypes from 'prop-types';

export default function Message({ message }) {
  const id = useParams().id;
  if (message.type === 'text') {
    return <TextMessage id={id} message={message} />;
  }
  return <CallMessage message={message} />;
}

Message.propTypes = {
  message: PropTypes.object.isRequired,
};
