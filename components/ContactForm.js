import React from 'react'
import CountryInput from './CountryInput'

export default class ContactForm extends React.Component {
  constructor() { super() }
  render() {
    return (
      <div className="lg:order-2 lg:w-6/12 -mt-24 md:-mt-32 lg:-mt-52 sm:px-12">
        <div className="mt-5 md:mt-0">
          <form action="#" method="POST">
            <div className="shadow rounded-md overflow-hidden">
              <div className="px-4 py-5 sm:p-12 bg-white space-y-6">
                <div className="grid grid-cols-4 gap-6">
                  <div className="col-span-4 sm:col-span-2">
                    <label htmlFor="full_name" className="block text-lg font-medium text-gray-700">
                      Fullname
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-lg">
                        <i className="far fa-user"></i>
                      </span>
                      <input
                        type="text"
                        name="full_name"
                        id="full_name"
                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-lg border-gray-300"
                        placeholder="e.g. John Doe"
                      />
                    </div>
                  </div>
                  <div className="col-span-4 sm:col-span-2">
                    <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                      Email
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-lg">
                        <i className="fa fa-at"></i>
                      </span>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-lg border-gray-300"
                        placeholder="e.g. johndoe@email.com"
                      />
                    </div>
                  </div>
                  <div className="col-span-4 sm:col-span-2">
                    <label htmlFor="location" className="block text-lg font-medium text-gray-700">
                      Location
                    </label>
                    <CountryInput className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-lg border-gray-300" />
                  </div>
                  <div className="col-span-4 sm:col-span-2">
                    <label htmlFor="phone" className="block text-lg font-medium text-gray-700">
                      Phone
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-lg">
                        <i className="fa fa-mobile-alt"></i>
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-lg border-gray-300"
                        placeholder="e.g. +88 9209 635"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="about" className="block text-lg font-medium text-gray-700">
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="about"
                      name="about"
                      rows={7}
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-lg border border-gray-300 rounded-md"
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
                  <i className="fa fa-paper-plane mr-4"></i> Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
