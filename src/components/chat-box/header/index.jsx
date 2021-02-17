import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Spinner from './spinner';
import SearchInput from './search-input';
import { showDetails } from '../../../redux/actions';
import { useHotkeys } from 'react-hotkeys-hook';

export default function Header() {
  const id = useParams().id;

  //Отображение выбранного контакта
  const dispatch = useDispatch();

  const name = useSelector((state) => {
    const contacts = state.contacts.contacts;
    return contacts.find((contact) => contact._id === id);
  });

  //Флаг отлавливания загрузки сообщений для прелоадера
  const messagesLoading = useSelector((state) => state.messages.loading);

  /*
    Открытие и закрытие окна профиля
   */

  useHotkeys('shift + P', () => dispatch(showDetails()));

  //Функция открытия профайла контакта
  const detailSwitcher = () => {
    dispatch(showDetails());
  };

  return (
    <div className="header">
      <div className="search-input">
        <SearchInput />
      </div>
      <div className="contact-name">
        <h3>{messagesLoading ? <Spinner /> : name?.fullname}</h3>
        {name?.online && <div className="online" />}
      </div>
      <div className="switcher">
        <a onClick={detailSwitcher} href="#">
          <i className="material-icons">settings</i>
        </a>
      </div>
    </div>
  );
}
