import React from 'react'

export default class ContactDetails extends React.Component {
  constructor() { super() }
  render() {
    return (
      <div className="lg:order-3 w-full lg:w-3/12 px-4 mt-10 md:mt-16 lg:mt-0">
        <div className="py-6 px-8 mb-4 bg-blue-500 rounded-lg shadow">
          <div className="flex items-center">
            <span className="flex items-center justify-center w-12 h-12 mr-8 bg-blue-400 rounded-lg">
              <i className="fa fa-phone-alt text-white"></i>
            </span>
            <p className="text-lg font-bold text-white">+44 20457523 00 01</p>
          </div>
        </div>
        <div className="py-6 px-8 mb-10 bg-gray-400 rounded-lg shadow">
          <div className="flex items-center">
            <span className="flex items-center justify-center w-12 h-12 mr-8 bg-gray-500 rounded-lg shadow-lg">
              <i className="fa fa-envelope text-white"></i>
            </span>
            <p className="text-lg font-bold text-white">support@shuffle.dev</p>
          </div>
        </div>
        <div className="py-0 md:py-6 px-8">
          <div className="flex">
            <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 mr-8 bg-blue-500 rounded-lg">
              <i className="fa fa-globe text-white"></i>
            </span>
            <div>
              <div className="pb-4 pr-16 mb-6 border-b border-gray-300">
                <p className="text-lg font-bold text-gray-400">Bayswater, London</p>
                <p className="text-lg font-bold text-gray-400">W16EG, UK</p>
              </div>
              <p className="text-lg text-gray-600">The one est bad, semper six. At sem quis, congue</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}