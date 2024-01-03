import Link from 'next/link';
import React from 'react';

const ContactUsCall = () => {
  return (
    <div className="relative bg-white pt-10 md:pt-16 lg:pt-24 py-24 px-2 md:px-4 lg:px-16 xl:px-28 w-full dark:bg-gray-800">
      <div className="relative overflow-hidden 2xl:w-8/12 2xl:mx-auto">
        <div className="md:flex justify-between relative mx-auto px-4 sm:px-6 lg:px-0 sm:static">
          <div className="lg:pr-28 xl:pr-32 px-2 md:px-auto">
            <h1 className="text-3xl font-semibold text-algrithYellow leading-tight sm:leading-tight">
              Looking for ways to optimize your business using technology while saving time and money?
              <br/>
              Not sure how technology can enhance your business?
              <br/>
              Looking for excellence at an affordable rate?
            </h1>
            <p className="mt-4 leading-relaxed text-xl md:leading-relaxed md:text-2xl dark:text-slate-300 text-gray-600">
              We would be glad to help.
            </p>
            <Link
              className="mt-6 md:mt-8 lg:mt-10 inline-block text-center dark:bg-opacity-50 bg-teal-500 border border-transparent rounded-md py-3 px-8 text-2xl text-white hover:bg-indigo-700"
              href="/products">
              Get a Session
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-3 inline h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </Link>
          </div>

          <div className="sm:max-w-lg mt-8 md:mt-0 px-2 md:px-auto">
            <div className="rounded-lg overflow-hidden">
              <img src="./images/illustrations/dribbble.gif" alt="" className="filter dark:brightness-75 w-full h-full object-center object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsCall;