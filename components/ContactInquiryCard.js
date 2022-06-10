import React from 'react'
import Link from 'next/link'

export default function ContactInquiryCard() {
  return (
    <div className="lg:order-1 w-full md:w-2/4 lg:w-3/12 md:px-4 mt-10 md:mt-16">
      <div className="dark:bg-slate-700 bg-white rounded-b-lg shadow">
        <img className="h-64 w-full rounded-t-lg object-cover" src="/images/contact-us/how-it-works.gif" alt="" />
        <div className="px-8 py-8">
          <h3 className="mb-8 lg:mb-4 text-xl dark:text-gray-200 text-gray-600 font-semibol">
            Do you need understanding on how our system works?
          </h3>
          <div className="md:text-right">
            <Link href="/how-it-works">
              <a className="inline-block text-lg px-12 py-4 border border-gray-300 hover:border-gray-200 rounded-full font-semibold dark:text-gray-200 text-gray-600">
                Learn Now
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}