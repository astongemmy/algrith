import React, { useState } from "react"
import CheckoutButton from "./CheckoutButton"
import Color from "./Color"
import WishlistButton from "./WishlistButton"

export default function OrderRequirements({ product_slug, selectedPackage }) {
  const [requirements, setRequirements] = useState({
    company_name: "",
    domain_name: "",
    domain_type: "new",
    domain_username: "",
    domain_password: "",
    theme_color: [],
    description: ""
  })

  const handleInputChange = (e) => {
    const value = e.target.value
    const key = e.target.name
    setRequirements(prevState => { return { ...prevState, [key]: value }})
  }

  const handleColorsChange = (color) => setRequirements(prevState => { return { ...prevState, theme_color: color }})
  
  return (
    <div id="order-requirements" className="dark:bg-slate-800 bg-white dark:border-slate-800 border rounded-lg px-6 lg:px-8 py-4 lg:py-6 mb-8">
      <h2 className="text-2xl font-heading dark:text-slate-300 text-gray-900 font-semibold">
        Order requirements
      </h2>
      <div className="grid grid-cols-4 gap-6 pt-4">
        <div className="col-span-4 xl:col-span-2">
          <label htmlFor="company_name" className="block text-lg font-medium dark:text-slate-300 text-gray-700">
            What is your company/business name?
          </label>
          <div className="flex rounded-md shadow-sm mt-3">
            <span className="dark:bg-slate-700 dark:border-slate-600 inline-flex items-center px-4 rounded-l-md border border-r-0 border-gray-300 dark:bg-slate-800 dark:text-slate-200 bg-gray-50 text-gray-500 text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </span>
            <input
              type="text"
              name="company_name"
              id="company_name"
              onChange={handleInputChange}
              className="dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none py-3 rounded-r-md text-lg border-gray-300"
              placeholder="e.g. Apple Gear"
            />
          </div>
        </div>
        <div className="col-span-4 xl:col-span-2">
          <label htmlFor="" className="flex items-center text-lg font-medium dark:text-slate-300 text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="mr-3 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
            Select theme colors
          </label>
          <div className="flex flex-wrap rounded-md mt-3">
            <Color getColor={(color) => handleColorsChange(color)} />
          </div>
        </div>
      </div>

      <div className="py-4">
        <label htmlFor="domain_name" className="block text-lg font-medium dark:text-slate-300 text-gray-700">
          Domain name
        </label>
        <span className="dark:text-slate-300 mt-2 mb-4 ml-4 flex items-center">
          <span className="mr-4">Already existing </span>
          <span className="flex space-x-4">
            <label htmlFor="existing_domain">
              <input type="radio" onChange={handleInputChange} value="existing" name="domain_type" id="existing_domain" className="dark:bg-slate-600 dark:text-slate-200 w-6 h-6" />
              <span className="ml-3">Yes</span>
            </label>
            <label htmlFor="new_domain">
              <input type="radio" onChange={handleInputChange} value="new" name="domain_type" id="new_domain" className="dark:bg-slate-600 dark:text-slate-200 w-6 h-6" defaultChecked />
              <span className="ml-3">No</span>
            </label>
          </span>
        </span>
        <div className="flex rounded-md shadow-sm mt-3">
          <span className="dark:bg-slate-700 dark:border-slate-600 inline-flex items-center px-4 rounded-l-md border border-r-0 border-gray-300 dark:bg-slate-800 dark:text-slate-200 bg-gray-50 text-gray-500 text-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </span>
          <input
            type="text"
            name="domain_name"
            id="domain_name"
            onChange={handleInputChange}
            className="dark:bg-slate-700 dark:border-slate-600 dark:text-gray-200 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none py-3 rounded-r-md text-lg border-gray-300"
            placeholder="e.g. https://algrithllc.com"
          />
        </div>
        {requirements.domain_type == 'existing' && <div className="pl-4 py-6 grid grid-cols-4 gap-6">
          <div className="col-span-4 xl:col-span-2">
            <label htmlFor="domain_username" className="block text-lg font-medium dark:text-slate-300 text-gray-700">
              Domain account username
            </label>
            <div className="flex rounded-md shadow-sm mt-3">
              <input
                type="text"
                name="domain_username"
                id="domain_username"
                onChange={handleInputChange}
                className="dark:bg-slate-700 dark:border-slate-600 dark:text-gray-200 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full py-3 rounded-md text-lg border-gray-300"
                placeholder="e.g. johndoe"
              />
            </div>
          </div>
          <div className="col-span-4 xl:col-span-2">
            <label htmlFor="domain_password" className="block text-lg font-medium dark:text-slate-300 text-gray-700">
              Domain account password
            </label>
            <div className="flex rounded-md shadow-sm mt-3">
              <input
                type="password"
                name="domain_password"
                id="domain_password"
                onChange={handleInputChange}
                className="dark:bg-slate-700 dark:border-slate-600 dark:text-gray-200 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full py-3 rounded-md text-lg border-gray-300"
                placeholder="e.g. *********"
              />
            </div>
          </div>
        </div>}
      </div>

      <div className="py-4">
        <label htmlFor="description" className="block text-lg font-medium dark:text-slate-300 text-gray-700">
          Describe your company/business
        </label>
        <div className="mt-3">
          <textarea
            id="description"
            name="description"
            rows={7}
            onChange={handleInputChange}
            className="dark:bg-slate-700 dark:border-slate-600 dark:text-gray-200 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full text-lg border border-gray-300 rounded-md"
            placeholder="e.g. Apple works is a giagantic company that handles heavy duty exportation or crude oil and gas in the United States"
          />
        </div>
        <p className="mt-2 text-lg text-gray-500">
          Include other usefull information that will help us work better.
        </p>
      </div>

      <div className="flex flex-wrap mt-2 lg:mt-8 mb-8 lg:mb-12">
        <CheckoutButton item={selectedPackage} requirements={ requirements } />
        <WishlistButton />
      </div>

      <div className="mb-8">
        <h4 className="mb-6 font-heading font-medium">More information</h4>
        <button className="flex w-full pl-6 lg:pl-12 pr-6 py-4 mb-4 justify-between items-center leading-7 rounded-2xl border-2 border-blueGray-200 hover:border-blueGray-300">
          <h3 className="text-lg font-heading font-medium">Shipping &amp; returns</h3>
          <span>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.4594 0.289848C10.8128 -0.096616 11.3841 -0.096616 11.7349 0.289848C12.0871 0.676312 12.0897 1.30071 11.7349 1.68718L6.63794 7.21015C6.28579 7.59662 5.71584 7.59662 5.36108 7.21015L0.264109 1.68718C-0.0880363 1.30215 -0.0880363 0.676312 0.264109 0.289848C0.617558 -0.096616 1.18882 -0.096616 1.53966 0.289848L6.00147 4.81927L10.4594 0.289848Z" fill="black"></path>
            </svg>
          </span>
        </button>
        <button className="flex w-full pl-6 lg:pl-12 pr-6 py-4 justify-between items-center leading-7 rounded-2xl border-2 border-blueGray-200 hover:border-blueGray-300">
          <h3 className="text-lg font-heading font-medium">Product details</h3>
          <span>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.4594 0.289848C10.8128 -0.096616 11.3841 -0.096616 11.7349 0.289848C12.0871 0.676312 12.0897 1.30071 11.7349 1.68718L6.63794 7.21015C6.28579 7.59662 5.71584 7.59662 5.36108 7.21015L0.264109 1.68718C-0.0880363 1.30215 -0.0880363 0.676312 0.264109 0.289848C0.617558 -0.096616 1.18882 -0.096616 1.53966 0.289848L6.00147 4.81927L10.4594 0.289848Z" fill="black"></path>
            </svg>
          </span>
        </button>
      </div>
    </div>
  )
}