import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { setAlertMessage } from '../slices/alert';
import useSendMail from '../hooks/useSendMail';
import CountryInput from './CountryInput';

const ContactForm = () => {
  const [contactDetails, setContactDetails] = useState({
    customTopic: '',
    country: '',
    message: '',
    email: '',
    phone: '',
    topic: '',
    name: '',
  });

  const { status, sendMail } = useSendMail();
  const dispatch = useDispatch();

  const updateContactDetail = (key, value) => {
    const newContactDetails = {
      ...contactDetails,
      [key]: value
    };

    if (newContactDetails.topic !== 'other') {
      newContactDetails.customTopic = '';
    }

    setContactDetails(newContactDetails);
  };
  
  const handleSendMail = (e) => {
    sendMail(contactDetails);
    e.preventDefault();
  };

  const feedbackMessages = {
    error: 'An error occurred while sending your message!',
    sent: 'Your message was sent successfully!',
    sending: 'Sending...'
  };

  useEffect(() => {
    if (status) dispatch(setAlertMessage({
      message: feedbackMessages[status],
      autoHide: false
    }));
  }, [status]);

  return (
    <div className="lg:order-2 lg:w-6/12 -mt-24 md:-mt-32 lg:-mt-24 sm:px-12 lg:px-4 xl:px-12 2xl:px-4">
      <div className="mt-5 md:mt-0">
        <form onSubmit={handleSendMail} id="contact-form">
          <div className="shadow rounded-md overflow-hidden">
            <div className="px-6 py-5 sm:p-12 lg:px-6 xl:px-12 dark:bg-slate-800 bg-white space-y-6">
              <div className="grid grid-cols-4 gap-6">
                <div className="col-span-4 sm:col-span-2">
                  <label
                    className="block text-lg font-medium dark:text-gray-200 text-gray-700"
                    htmlFor="name"
                  >
                    Name <span className="text-xl text-red-400">*</span>
                  </label>

                  <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200 inline-flex items-center px-4 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-lg">
                      <i className="bi bi-person text-2xl"></i>
                    </span>

                    <input
                      className="dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200 border-l-0 focus:ring-transparent focus:border-gray-300 dark:focus:border-slate-600 flex-1 block w-full rounded-none py-3 rounded-r-md text-lg border-gray-300"
                      onChange={(e) => updateContactDetail('name', e.target.value)}
                      placeholder="e.g. John Doe"
                      value={contactDetails.name}
                      name="Name"
                      type="text"
                      id="name"
                      required
                    />
                  </div>
                </div>

                <div className="col-span-4 sm:col-span-2">
                  <label
                    className="block text-lg font-medium dark:text-gray-200 text-gray-700"
                    htmlFor="email"
                  >
                    Email <span className="text-xl text-red-400">*</span>
                  </label>

                  <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200 inline-flex items-center px-4 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-lg">
                      <i className="bi bi-at text-2xl"></i>
                    </span>

                    <input
                      className="dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200 border-l-0 focus:ring-transparent focus:border-gray-300 dark:focus:border-slate-600 flex-1 block w-full rounded-none py-3 rounded-r-md text-lg border-gray-300"
                      onChange={(e) => updateContactDetail('email', e.target.value)}
                      placeholder="e.g. johndoe@email.com"
                      value={contactDetails.email}
                      type="email"
                      name="Email"
                      id="email"
                      required
                    />
                  </div>
                </div>

                <div className="col-span-4 sm:col-span-2">
                  <CountryInput
                    updateValue={(value) => updateContactDetail('country', value)}
                    defaultValue={contactDetails.country}
                    label="Location"
                    id="country"
                    required
                  />
                </div>

                <div className="col-span-4 sm:col-span-2">
                  <label
                    className="block text-lg font-medium dark:text-gray-200 text-gray-700"
                    htmlFor="phone"
                  >
                    Phone <span className="text-xl text-red-400">*</span>
                  </label>

                  <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200 inline-flex items-center px-4 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-lg">
                      <i className="bi bi-telephone text-2xl"></i>
                    </span>

                    <input
                      className="dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200 border-l-0 focus:ring-transparent focus:border-gray-300 dark:focus:border-slate-600 flex-1 block w-full rounded-none py-3 rounded-r-md text-lg border-gray-300"
                      onChange={(e) => updateContactDetail('phone', e.target.value)}
                      placeholder="e.g. +88 9209 635"
                      value={contactDetails.phone}
                      name="Phone"
                      id="phone"
                      type="tel"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  className="block text-lg font-medium dark:text-gray-200 text-gray-700"
                  htmlFor="topic"
                >
                  Topic{' '}
                  <span className="text-md dark:text-gray-400 text-gray-500">
                    (What are you interested in?)
                  </span>
                </label>

                <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200 inline-flex items-center px-4 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                    <i className="bi bi-crosshair text-2xl"></i>
                  </span>

                  <select
                    className="dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200 border-l-0 focus:ring-transparent focus:border-gray-300 dark:focus:border-slate-600 flex-1 block w-full rounded-none py-3 rounded-r-md text-lg border-gray-300"
                    onChange={(e) => updateContactDetail("topic", e.target.value)}
                    value={contactDetails.topic}
                    name="Topic"
                    id="topic"
                  >
                    <option value="">--select--</option>
                    
                    <option value="Web Application Development">
                      Web Application Development
                    </option>

                    <option value="Artificial Intelligence">
                      Artificial Intelligence - Want to know how to integrate AI
                      into your business?
                    </option>
                    
                    <option value="Website Revamp">
                      Website Revamp (redesign)
                    </option>
                    
                    <option value="Business Optimization">
                      Business Optimization
                    </option>
                    
                    <option value="other">Other (your topic)</option>
                  </select>
                </div>
              </div>

              {contactDetails.topic === "other" && (
                <div>
                  <label
                    className="block text-lg font-medium dark:text-gray-200 text-gray-700"
                    htmlFor="customTopic"
                  >
                    Specify your topic <span className="text-xl text-red-400">*</span>
                  </label>

                  <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200 inline-flex items-center px-4 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                      <i className="bi bi-feather text-2xl"></i>
                    </span>

                    <input
                      className="dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200 border-l-0 focus:ring-transparent focus:border-gray-300 dark:focus:border-slate-600 flex-1 block w-full rounded-none py-3 rounded-r-md text-lg border-gray-300"
                      onChange={(e) => updateContactDetail('customTopic', e.target.value)}
                      value={contactDetails.customTopic}
                      placeholder="e.g. Custom topic"
                      name="Custom Topic"
                      id="customTopic"
                      type="text"
                    />
                  </div>
                </div>
              )}

              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-medium dark:text-gray-200 text-gray-700"
                >
                  Message{' '}
                  <span className="text-md dark:text-gray-400 text-gray-500">
                    (Briefly describe your business, and include links if any.)
                  </span>{' '}
                  <span className="text-xl text-red-400">*</span>
                </label>

                <div className="mt-1">
                  <textarea
                    className="dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200 shadow-sm focus:ring-transparent focus:border-gray-300 dark:focus:border-slate-600 mt-1 block w-full text-lg border border-gray-300 rounded-md"
                    onChange={(e) => updateContactDetail('message', e.target.value)}
                    placeholder="I need a corporate website for my business"
                    value={contactDetails.message}
                    name="Message"
                    id="message"
                    rows={7}
                    required
                  />
                </div>

                <p className="mt-2 text-md dark:text-gray-400 text-gray-500">
                  Include other usefull information that will help us work
                  better.
                </p>
              </div>
            </div>

            <div className="px-4 py-3 dark:bg-slate-800 bg-gray-50 sm:p-12">
              <button
                className="inline-flex justify-center items-center py-3 px-8 border border-transparent shadow-sm text-lg font-medium rounded-md text-white dark:bg-opacity-50 bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                disabled={status === 'sending'}
                type="submit"
              >
                <i className="fa fa-paper-plane mr-4"></i>
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;