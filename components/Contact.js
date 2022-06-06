import React from 'react'
import ContactDetails from './ContactDetails'
import ContactForm from './ContactForm'
import ContactInquiryCard from './ContactInquiryCard'

export default class Contact extends React.Component {
  constructor() { super() }
  render() {
    return (
      <section id="contact" className="w-full relative md:py-12 lg:py-0">
        <img className="hidden lg:block absolute top-0 left-0 w-2/5" src="./images/svg/map.svg" alt="" />
        <img className="hidden lg:block absolute top-0 left-0 mt-40 ml-40" src="./images/svg/office-tag.svg" alt="" />
        <div className="relative px-5 mx-auto">
          <div className="px-2 md:px-4 lg:px-10 xl:px-20 w-full mx-auto">
            <div className="flex w-full flex-wrap justify-center mb-4 lg:mb-0">
              <ContactForm />              
              <ContactDetails />
              <ContactInquiryCard />
            </div>
            <div className="text-center">
              <p className="mb-4 md:mb-0 py-10 text-xl text-gray-500">
                The brown fox jumps over the lazy dog.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}