import React from 'react';

import ContactInquiryCard from './ContactInquiryCard';
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="w-full 2xl:w-8/12 2xl:mx-auto relative md:py-12 lg:py-0">
      <div className="relative px-5 mx-auto">
        <div className="px-2 md:px-4 lg:px-10 xl:px-20 w-full mx-auto">
          <div className="flex w-full flex-wrap justify-center mb-4 lg:mb-0">
            <ContactForm />
            <ContactDetails />
            <ContactInquiryCard />
          </div>
          <div className="text-center">
            <p className="mb-4 md:mb-8 py-10 text-xl dark:text text-gray-500">
              If you need any support or assistance, do not hesitate to send us a message.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;