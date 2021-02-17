import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import MessageSetting from '../message-setting';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

export default function InBoxMessage({ message }) {
  const id = useParams().id;
  const contact = useSelector((state) => {
    const contacts = state.contacts.contacts;
    return contacts.find((item) => item._id === id);
  });

  return (
    <div className="inbox-message margin">
      <div className="avatar">{contact.fullname[0]}</div>
      <div className="single-message">
        <div className="text">{message.content}</div>
        <div className="notMessage">
          <div className="time-of-message">
            {dayjs(message.time).format('hh:mm')}
          </div>
        </div>
        <MessageSetting id={message._id} />
      </div>
    </div>
  );
}

InBoxMessage.propTypes = {
  message: PropTypes.object.isRequired,
};
