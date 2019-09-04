import React from 'react';
import Contact from '../contacts/contact.component';
import ContactForm from '../contacts/contact-form.component';
import ContactFilter from '../contacts/contact-filter.component';

const Home = () => {
  return (
    <div className="grid-2">
      <div>
        <ContactForm />
      </div>
      <div>
        <ContactFilter />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
