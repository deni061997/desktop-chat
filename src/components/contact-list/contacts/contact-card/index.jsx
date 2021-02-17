import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { chosenCard } from '../../../../redux/actions';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import cx from 'classnames';
import { useHistory } from 'react-router-dom';
import dayjs from 'dayjs';
import { cutMessage } from '../../../../utils/text';

export default function ContactCard({ contact }) {
  const dispatch = useDispatch();

  const id = useParams().id;

  const styles = cx('contact-card', {
    'checked-contact-card': contact.checked,
  });
  const history = useHistory();

  useEffect(() => {
    dispatch(chosenCard(id));
  }, [id]);

  const handleChosen = (id) => {
    dispatch(chosenCard(id));
    history.push(id);
  };

  return (
    <div onClick={() => handleChosen(contact._id)} className={styles}>
      <div className="logo">
        <p>{contact.fullname[0]}</p>
        {contact?.online && <div className="online online-for-card" />}
      </div>
      <div>
        <div className="fullname">{contact.fullname}</div>
        <div className="message">
          {contact.lastMessage && cutMessage(contact)}
        </div>
      </div>
      <div className="time">
        {dayjs(contact.lastMessage?.time).format('hh:mm')}
      </div>
    </div>
  );
}

ContactCard.propTypes = {
  contact: PropTypes.object.isRequired,
};
