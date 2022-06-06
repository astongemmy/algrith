import React from 'react'

export default class ContactInquiryCard extends React.Component {
  constructor() { super() }
  render() {
    return (
      <div className="lg:order-1 w-full md:w-2/4 lg:w-3/12 md:px-4 mt-10 md:mt-16">
        <div className="bg-white rounded-b-lg shadow">
          <img className="h-64 w-full rounded-lg object-cover" src="https://image.freepik.com/free-photo/contacting-with-friends-via-computer_329181-14587.jpg" alt="" />
          <div className="px-8 py-8">
            <div className="mb-6 py-px bg-gray-300"></div>
            <h3 className="mb-8 lg:mb-4 text-xl text-gray-400 font-bold">Have any question? Send a message!</h3>
            <div className="md:text-right"><a className="inline-block px-12 py-4 border border-gray-300 hover:border-gray-200 rounded-full font-bold text-gray-400" href="#">Message</a></div>
          </div>
        </div>
      </div>
    )
  }
}