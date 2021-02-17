import React, { useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { sendMessage } from '../../../redux/actions';
import InputIcons from './input-icons';

export default function MessageInput() {
  //Создание стейта для хранения сообщения
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  const id = useParams().id;

  //Функция для отправки сообщения контакту
  const handleSendMessage = () => {
    if (message.length) {
      dispatch(sendMessage(message, id));
      setMessage('');
    }
  };

  //Функция для изменения стейта сообщения
  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  //Функция для отправки сообщения нажатием Enter
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSendMessage();
    }
  };

  useHotkeys('shift + enter', (e) => {
    e.preventDefault();
    setMessage((message) => message + '\n');
  });

  return (
    <div className="messageInput-block">
      <div className="messageInput">
        <div className="input-parent">
          <input
            type="text"
            placeholder="Write message"
            value={message}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            id="our-input"
          />
        </div>
        <InputIcons sendMessage={handleSendMessage} message={message} />
      </div>
    </div>
  );
}
