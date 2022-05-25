import React from 'react'

export default class ContactDetails extends React.Component {
  constructor() { super() }
  render() {
    return (
      <div className="lg:order-3 w-full lg:w-3/12 px-4 mt-10 md:mt-16 lg:mt-0">
        <div className="py-6 px-8 mb-4 bg-blue-500 rounded-lg shadow">
          <div className="flex items-center">
            <span className="flex items-center justify-center w-12 h-12 mr-8 bg-blue-400 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
              </svg>
            </span>
            <p className="text-lg font-bold text-white">+44 20457523 00 01</p>
          </div>
        </div>
        <div className="py-6 px-8 mb-10 bg-gray-400 rounded-lg shadow">
          <div className="flex items-center">
            <span className="flex items-center justify-center w-12 h-12 mr-8 bg-gray-500 rounded-lg shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </span>
            <p className="text-lg font-bold text-white">support@shuffle.dev</p>
          </div>
        </div>
        <div className="py-0 md:py-6 px-8">
          <div className="flex">
            <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 mr-8 bg-blue-500 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
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