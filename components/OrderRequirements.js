import React, { useState } from "react"
import Color from "./Color"

export default function OrderRequirements({ }) {
  const [domain_state, setDomainState] = useState('new')
  
  return (
    <div className="mb-8 xl:my-10 px-4 py-5 sm:p-12 sm:pt-6 bg-white space-y-6 rounded-lg">
      <h2 className="mb-4 text-3xl md:text-4xl font-heading font-medium">
        Order requirements
      </h2>
      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-4 xl:col-span-2">
          <label htmlFor="company_name" className="block text-lg font-medium text-gray-700">
            What is your company/business name?
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <span className="inline-flex items-center px-4 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </span>
            <input
              type="text"
              name="company_name"
              id="company_name"
              className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none py-3 rounded-r-md text-lg border-gray-300"
              placeholder="e.g. Apple Gear"
            />
          </div>
        </div>
        <div className="col-span-4 xl:col-span-2">
          <label htmlFor="" className="flex items-center text-lg font-medium text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="mr-3 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
            Select theme colors
          </label>
          <div className="mt-1 flex flex-wrap rounded-md pt-3 lg:pt-10">
            <Color />
          </div>
        </div>
      </div>
      <div className="">
        <label htmlFor="domain_name" className="block text-lg font-medium text-gray-700">
          Domain name
        </label>
        <span className="mb-4 ml-4 flex items-center">
          <span className="mr-4">Already existing </span>
          <span className="flex space-x-4">
            <label htmlFor="existing_domain">
              <input type="radio" onChange={(e) => setDomainState(e.target.value)} value="existing" name="domain_name_state" id="existing_domain" className="w-6 h-6" />
              <span className="ml-3">Yes</span>
            </label>
            <label htmlFor="new_domain">
              <input type="radio" onChange={(e) => setDomainState(e.target.value)} value="new" name="domain_name_state" id="new_domain" className="w-6 h-6" defaultChecked />
              <span className="ml-3">No</span>
            </label>
          </span>
        </span>
        <div className="mt-1 flex rounded-md shadow-sm">
          <span className="inline-flex items-center px-4 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </span>
          <input
            type="text"
            name="domain_name"
            id="domain_name"
            className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none py-3 rounded-r-md text-lg border-gray-300"
            placeholder="e.g. https://algrithllc.com"
          />
        </div>
        {domain_state == 'existing' && <div className="pl-4 py-6 grid grid-cols-4 gap-6">
          <div className="col-span-4 xl:col-span-2">
            <label htmlFor="domain_username" className="block text-lg font-medium text-gray-700">
              Domain account username
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <span className="inline-flex items-center px-4 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </span>
              <input
                type="text"
                name="domain_username"
                id="domain_username"
                className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none py-3 rounded-r-md text-lg border-gray-300"
                placeholder="e.g. johndoe"
              />
            </div>
          </div>
          <div className="col-span-4 xl:col-span-2">
            <label htmlFor="domain_password" className="block text-lg font-medium text-gray-700">
              Domain account password
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <span className="inline-flex items-center px-4 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </span>
              <input
                type="text"
                name="domain_password"
                id="domain_password"
                className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none py-3 rounded-r-md text-lg border-gray-300"
                placeholder="e.g. *********"
              />
            </div>
          </div>
        </div>}
      </div>
      <div className="">
        <label htmlFor="description" className="block text-lg font-medium text-gray-700">
          Describe your company/business
        </label>
        <div className="mt-1">
          <textarea
            id="description"
            name="description"
            rows={7}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full text-lg border border-gray-300 rounded-md"
            placeholder="e.g. Apple works is a giagantic company that handles heavy duty exportation or crude oil and gas in the United States"
            defaultValue={''}
          />
        </div>
        <p className="mt-2 text-lg text-gray-500">
          Include other usefull information that will help us work better.
        </p>
      </div>
    </div>
  )
}