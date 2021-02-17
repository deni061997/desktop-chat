import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Socials from './socials';
import cx from 'classnames';

export default function DetailsShow() {
  const id = useParams().id;

  //Фильтрация сообщений по введенному тексту в поле поиска
  const selectedName = useSelector((state) => {
    const name = state.contacts.contacts;
    return name.find((contact) => contact._id === id);
  });

  const showDetailsFlag = useSelector(
    (state) => state.application.showDetailsFlag,
  );

  const styles = cx(
    { display: showDetailsFlag },
    { 'dont-display': !showDetailsFlag },
  );

  return (
    <div className={styles}>
      <div className="display-details">
        <div className="showDetails">
          <div className="profile">
            <div className="detailsLogo">{selectedName?.fullname[0]}</div>
            <div className="detailName">{selectedName?.fullname}</div>
            <div className="email">
              {selectedName?.username ? `@${selectedName.username}` : ''}
            </div>
            <div className="detail-icons">
              <i className="material-icons">call</i>
              <i className="material-icons">videocam</i>
              <i className="material-icons">email</i>
            </div>
          </div>
          <Socials selectedName={selectedName} />
        </div>
      </div>
    </div>
  );
}
