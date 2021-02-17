import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadContacts } from '../../../redux/actions';
import ContactCard from './contact-card';
import SkeletonCard from '../skeleton';

export default function Contacts() {
  const dispatch = useDispatch();

  //Загрузка контактов
  const contactsLoading = useSelector((state) => state.contacts.loading);

  //Реализация отображения контактов
  const contacts = useSelector((state) => {
    const { contactFilter } = state.application;
    const lowerCaseFilterText = contactFilter.toLowerCase();
    return state.contacts.contacts.filter((contact) => {
      const fullname = contact.fullname.toLowerCase();
      return fullname.indexOf(lowerCaseFilterText) !== -1;
    });
  });

  useEffect(() => {
    dispatch(loadContacts());
  }, []);

  return (
    <div>
      <div className="contacts-block">
        {contactsLoading && <SkeletonCard />}
      </div>
      <div className="contacts">
        {contacts
          .filter(
            (contact) =>
              contact._id !== '5f444c47a00c98053c489d5d' &&
              contact._id !== '5f31422e9418570bc43fcbb4' &&
              contact._id !== '5f3142b62ddb170be0851b4b' &&
              contact._id !== '5f444aeaa00c98053c489d5c',
          )
          .map((contact) => {
            return (
              <div key={contact._id} className="link">
                <ContactCard contact={contact} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
