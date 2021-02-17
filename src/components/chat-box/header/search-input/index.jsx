import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buttonChanged } from '../../../../redux/actions';
import { filterMessage } from '../../../../redux/actions';
import cx from 'classnames';

export default function SearchInput() {
  const dispatch = useDispatch();

  //Получение флага для подключения стилей в зависимости от кнопки
  const buttonChange = useSelector((state) => state.application.buttonChange);

  const style = cx(
    { 'header-search': buttonChange },
    { 'header-search-open': !buttonChange },
  );

  const [messageSearch, setMessageSearch] = useState('');

  //Функция для изменения кнопки
  const buttonHandleChange = () => {
    dispatch(buttonChanged());
  };

  useEffect(() => {
    dispatch(filterMessage(messageSearch));
  }, [messageSearch]);

  return (
    <div>
      <div className={style}>
        <button className="search-button" onClick={buttonHandleChange} href="#">
          <i className="material-icons">search</i>
        </button>
        <input
          placeholder="Search message"
          type="text"
          value={messageSearch}
          onChange={(e) => setMessageSearch(e.target.value)}
        />
        {messageSearch && (
          <button
            className="delete-button"
            onClick={() => setMessageSearch('')}
          >
            <i className="material-icons">clear</i>
          </button>
        )}
      </div>
    </div>
  );
}
