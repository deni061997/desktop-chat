import React from 'react';
import Header from './header';
import MessageInput from './message-input';
import ShowMessage from './show-message';
import { useParams } from 'react-router-dom';
import NoSelectedContact from './no-selected-contact';

export default function ChatBox() {
  const idReceived = useParams().id;

  return (
    <div className="chat-box">
      {idReceived ? (
        <>
          <Header />
          <ShowMessage />
          <MessageInput />
        </>
      ) : (
        <NoSelectedContact />
      )}
    </div>
  );
}
