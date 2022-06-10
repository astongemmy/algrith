import React, { useState } from 'react';
import DisplayColors from './DisplayColors';

export default function CheckoutOrderRequirement({ Requirements }) {
  const [ passwordVisibility, togglePasswordVisibility ] = useState(false)
  const keyToProperFormat = (text) => {
    if (text !== null) {
      text = text.split('_');
      text = text.map(word => { 
        return word[0] + word.slice(1);
      }).join(" ");
      return text[0].toUpperCase()+text.slice(1)
    }
  }
  
  return (
    <div className="md:w-1/2 pr-0 md:pr-4 mb-8">
      <div className="dark:bg-slate-800 bg-white rounded-lg dark:border-slate-700 border overflow-hidden">
        <h3 className="dark:border-b-slate-700 border-b dark:text-gray-200 text-gray-800 px-4 py-3 mb-2 text-2xl font-heading font-semibold">
          Order requirements
        </h3>
        <div className="p-4 px-6 pb-8">
          <ul className="w-full text-lg">
            {Object.entries(Requirements).map((requirement) => {
              return (
                <React.Fragment key={requirement[0]}>
                  {requirement[0] !== 'description' && requirement[0] !== 'theme_color' && <li className="w-full mb-3 flex flex-wra justify-between items-center overflow-x-auto">
                    <span className="w-1/2 flex items-center text-lg dark:text-gray-400 text-gray-600">
                      <span className="mr-6 text-green-500">
                        <svg width="18" height="14" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z" fill="currentColor"></path>
                        </svg>
                      </span>
                      <span className="no-scrollbar overflow-x-auto whitespace-nowrap"> {keyToProperFormat(requirement[0])} </span>
                    </span>
                    {requirement[0] !== 'domain_password' && (
                      <span className="border-0 focus:ring-0 outline-none ring-0 w-1/2 whitespace-nowrap text-right"> {requirement[1]} </span>
                    )}
                    {requirement[0] == 'domain_password' && (
                      <span className="w-1/2 whitespace-nowrap flex justify-between items-center">
                        <input readOnly type={passwordVisibility ? 'text' : 'password'} className="bg-transparent text-right border-0 focus:ring-0 outline-none ring-0 w-4/5" value={requirement[1]} />
                        <i onClick={() => togglePasswordVisibility(!passwordVisibility)} className="fa fa-eye ml-3 text-green-300 cursor-pointer"></i>
                      </span>
                    )}
                  </li>}

                  {requirement[0] == 'theme_color' && <li className="flex flex-wrap justify-between md:items-center">
                    <span className="flex items-center text-lg dark:text-gray-400 text-gray-600 mb-4">
                      <span className="mr-6 text-green-500">
                        <svg width="18" height="14" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z" fill="currentColor"></path>
                        </svg>
                      </span>
                      {keyToProperFormat(requirement[0])}
                    </span>
                    <span className="pl-12 -mr-4">
                      <DisplayColors colors={requirement[1]} />
                    </span>
                  </li>}

                  {requirement[0] == 'description' && <li className="mb-3 flex flex-col">
                    <span className="flex items-center w-full block text-lg dark:text-gray-400 text-gray-600 mb-2">
                      <span className="mr-6 text-green-500">
                        <svg width="18" height="14" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z" fill="currentColor"></path>
                        </svg>
                      </span>
                      {keyToProperFormat(requirement[0])}
                    </span>
                    <span className="w-full block pl-12"> {requirement[1]} </span>
                  </li>}
                </React.Fragment>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}