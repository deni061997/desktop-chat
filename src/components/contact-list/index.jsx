import React from 'react';
import Contacts from './contacts';
import ContactInput from './contact-input';

export default function SideBar() {
  return (
    <div className="contact-list">
      <ContactInput />
      <Contacts />
    </div>
  );
}
