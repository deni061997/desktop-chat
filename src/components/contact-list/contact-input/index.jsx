import React, { useState, useEffect } from 'react';
import { setFilterContact } from '../../../redux/actions';
import { useDispatch } from 'react-redux';

export default function ContactInput() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  //Фильтрация контакта
  useEffect(() => {
    dispatch(setFilterContact(text));
  }, [text]);

  return (
    <div className="contact-list-input">
      <div>
        <a href="#">
          <i className="material-icons">search</i>
        </a>
        <input
          type="text"
          placeholder="Search contact"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        {text && (
          <button onClick={() => setText('')}>
            <i className="material-icons">clear</i>
          </button>
        )}
      </div>
    </div>
  );
}
