import Link from 'next/link';
import React from 'react';

const ContactInquiryCard = () => {
  return (
    <div className="lg:order-1 w-full md:w-2/4 lg:w-3/12 md:px-4 mt-10 md:mt-16">
      <div className="dark:bg-slate-800 bg-white rounded-b-lg shadow">
        <img className="filter dark:brightness-75 h-64 w-full rounded-t-lg object-cover" src="/images/contact-us/how-it-works.gif" alt="" />
        <div className="px-8 py-8">
          <h3 className="mb-8 lg:mb-4 text-xl dark:text-slate-300 text-gray-600 font-semibol">
            Do you need understanding on how our system works?
          </h3>
          <div className="md:text-right">
            <Link
              className="inline-block text-lg px-12 py-4 border border-gray-300 hover:border-gray-200 rounded-full font-semibold dark:text-slate-300 text-gray-600"
              href="/how-it-works">
              Learn Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInquiryCard;