import React from 'react'
import CountryInput from './CountryInput'
import useSendMail from '../hooks/useSendMail'

export default function ContactForm() {
  const { progress, sendMail } = useSendMail()

  return (
    <div className="lg:order-2 lg:w-6/12 -mt-24 md:-mt-32 lg:-mt-24 sm:px-12 lg:px-4 xl:px-12">
      <div className="mt-5 md:mt-0">
        <form onSubmit={sendMail} id="contact-form" method="POST">
          <div className="shadow rounded-md overflow-hidden">
            <div className="px-6 py-5 sm:p-12 lg:px-6 xl:px-12 bg-white space-y-6">
              <div className="grid grid-cols-4 gap-6">
                <div className="col-span-4 sm:col-span-2">
                  <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                    Fullname
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center px-4 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none py-3 rounded-r-md text-lg border-gray-300"
                      placeholder="e.g. John Doe"
                    />
                  </div>
                </div>
                <div className="col-span-4 sm:col-span-2">
                  <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                    Email
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center px-4 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                      </svg>
                    </span>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none py-3 rounded-r-md text-lg border-gray-300"
                      placeholder="e.g. johndoe@email.com"
                    />
                  </div>
                </div>
                <div className="col-span-4 sm:col-span-2">
                  <label htmlFor="location" className="block text-lg font-medium text-gray-700">
                    Location
                  </label>
                  <CountryInput />
                </div>
                <div className="col-span-4 sm:col-span-2">
                  <label htmlFor="phone" className="block text-lg font-medium text-gray-700">
                    Phone
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center px-4 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none py-3 rounded-r-md text-lg border-gray-300"
                      placeholder="e.g. +88 9209 635"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={7}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full text-lg border border-gray-300 rounded-md"
                    placeholder="I need a corporate website for my business"
                    defaultValue={''}
                  />
                </div>
                <p className="mt-2 text-lg text-gray-500">
                  Include other usefull information that will help us work better.
                </p>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 sm:p-12">
              <button type="submit" className="inline-flex justify-center items-center py-3 px-8 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <i className="fa fa-paper-plane mr-4"></i> { progress == 'idle' ? 'Send' : progress }
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}