import React from 'react'
import ContactForm from '../ContactForm'

export default class Contact extends React.Component {
  constructor() { super() }
  render() {
    return (
      <section id="contact" className="w-full relative md:py-12 lg:py-0 bg-gray-100">
        <img className="hidden lg:block absolute top-0 left-0 w-2/5" src="zospace-assets/images/map.svg" alt="" />
        <img className="hidden lg:block absolute top-0 left-0 mt-40 ml-40" src="zospace-assets/images/office-tag.svg" alt="" />
        <div className="relative container px-4 mx-auto">
          {/* <div className="text-center mb-20">
            <span className="text-lg text-blue-400 font-bold">Have a question?</span>
            <h2 className="mt-10 text-5xl font-bold font-heading text-white">Contact with us</h2>
          </div> */}
          <div className="px-2 md:px-20 w-full mx-auto">
            <div className="flex w-full flex-wrap justify-center md:-mx-4 mb-4 lg:mb-20">
              <ContactForm />
              
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
              
              <div className="lg:order-1 w-full lg:w-3/12 px-2 md:px-4 mb-4 lg:mb-0 mt-10 lg:mt-0">
                <div className="bg-white rounded-b-lg shadow">
                  <img className="h-64 w-full rounded-lg object-cover" src="https://image.freepik.com/free-photo/contacting-with-friends-via-computer_329181-14587.jpg" alt="" />
                  <div className="px-8 py-8">
                    <div className="mb-6 py-px bg-gray-300"></div>
                    <h3 className="mb-8 lg:mb-4 text-xl text-gray-400 font-bold">Have any question? Send a message!</h3>
                    <div className="md:text-right"><a className="inline-block px-12 py-4 border border-gray-300 hover:border-gray-200 rounded-full font-bold text-gray-400" href="#">Message</a></div>
                  </div>
                </div>
              </div>
              
            </div>
            <div className="text-center">
              <p className="mb-4 text-xl text-gray-500">The brown fox jumps over the lazy dog.</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}