import Link from 'next/link'
import React from 'react'

export default function BreadCrumbs({ breadcrumbs }) {
  return (
    <div className="w-full px-2 md:px-4">
      <ul className="flex flex-wrap items-center mb-8">
        <li className="mr-6">
          <a className="flex items-center text-lg font-medium text-gray-400 hover:text-gray-500" href="#">
            <span>Home</span>
            <svg className="ml-6" width="4" height="7" viewbox="0 0 4 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.150291 0.898704C-0.0500975 0.692525 -0.0500975 0.359292 0.150291 0.154634C0.35068 -0.0507836 0.674443 -0.0523053 0.874831 0.154634L3.7386 3.12787C3.93899 3.33329 3.93899 3.66576 3.7386 3.8727L0.874832 6.84594C0.675191 7.05135 0.35068 7.05135 0.150292 6.84594C-0.0500972 6.63976 -0.0500972 6.30652 0.150292 6.10187L2.49888 3.49914L0.150291 0.898704Z" fill="currentColor"></path>
            </svg>
          </a>
        </li>
        {breadcrumbs.slice(0, -1).map((breadcrumb) => {
          return (
            <li key={ breadcrumb.url } className="mr-6">
              <Link href={ breadcrumb.url }>
                <a className="flex items-center text-lg font-medium text-gray-400 hover:text-gray-500" href="#">
                  <span> { breadcrumb.text } </span>
                  <svg className="ml-6" width="4" height="7" viewbox="0 0 4 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.150291 0.898704C-0.0500975 0.692525 -0.0500975 0.359292 0.150291 0.154634C0.35068 -0.0507836 0.674443 -0.0523053 0.874831 0.154634L3.7386 3.12787C3.93899 3.33329 3.93899 3.66576 3.7386 3.8727L0.874832 6.84594C0.675191 7.05135 0.35068 7.05135 0.150292 6.84594C-0.0500972 6.63976 -0.0500972 6.30652 0.150292 6.10187L2.49888 3.49914L0.150291 0.898704Z" fill="currentColor"></path>
                  </svg>
                </a>
              </Link>
            </li>
          )
        })}
        <li>
          <a className="text-lg font-medium text-indigo-500 hover:text-indigo-600" href="#">
            { breadcrumbs.slice(-1)[0].text }
            {/* Apple iPhone 12 PRO */}
          </a>
        </li>
      </ul>
    </div>
  )
}