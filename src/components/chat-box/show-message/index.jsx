import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadMessages } from '../../../redux/actions';
import { useParams } from 'react-router-dom';
import Message from './message';

export default function ShowMessage() {
  const dispatch = useDispatch();
  const id = useParams().id;

  // Загрузка сообщений и их фильтрация
  const messages = useSelector((state) => {
    const messages = state.messages.messages;
    const filterMessages = state.application.filterMessages.toLowerCase();
    return messages.filter((message) => {
      const messageContent = message.content.toLowerCase();
      return messageContent.indexOf(filterMessages) !== -1;
    });
  });

  // Флаг для отлавливания изменения загрузки сообщений
  const messagesLoading = useSelector((state) => state.messages.loading);

  // Загрузка id пользователя открытого чата
  const myId = useSelector((state) => state.profile.myId);

  // Загрузка id пользователя открытого чата

  useEffect(() => {
    if (id) {
      dispatch(loadMessages(myId, id));
    }
  }, [id, myId]);

  //Прокрутка чата до конца при вводе нового сообщения
  useEffect(() => {
    const node = document.querySelector('.box-messages');
    node.scrollTop = node.scrollHeight;
  }, [messages]);

  return (
    <div className="box-messages">
      {!messagesLoading &&
        messages.map((message) => {
          return <Message key={message._id} message={message} />;
        })}
    </div>
  );
}
