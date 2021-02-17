import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteMessage } from '../../../../../../redux/actions';
import PropTypes from 'prop-types';
import cx from 'classnames';

export default function MessageSetting({ id }) {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  //Функция выпадающего окна настроек
  const handleSetShow = () => {
    setShow(!show);
  };

  //Функция удаления сообщения
  const handleDeleteMessage = (id) => {
    dispatch(deleteMessage(id));
  };

  //Стили для скрытия-раскрытия кнопки удаления
  const styles = cx(
    { expand_more_button_visible: show },
    { 'expand_more_button_not-visible': !show },
  );

  return (
    <div className="expand_more">
      <div className="expand_more_setting">
        <i onClick={handleSetShow} className="material-icons">
          expand_more
        </i>
      </div>
      <div className={styles}>
        <button onClick={() => handleDeleteMessage(id)}>Delete</button>
      </div>
    </div>
  );
}

MessageSetting.propTypes = {
  id: PropTypes.string.isRequired,
};
