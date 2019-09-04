import React, { Fragment, useContext } from 'react';
import ContactItem from './contact-item.component';

import ContactContext from '../../context/contact/contactContext';

const Contact = () => {
  const contactContext = useContext(ContactContext);

  const { contacts } = contactContext;

  return (
    <Fragment>
      {contacts.map(contact => {
        return <ContactItem key={contact.id} contact={contact} />;
      })}
    </Fragment>
  );
};

export default Contact;
