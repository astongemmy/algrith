import React from "react"

export default function PackageFeaturesCard({ features, order_count }) {
  const formatUnit = (unit) => {
    if (unit >= 1000) {
      return Math.round(unit / 1000) + 'k'
    } else if (unit >= 1000000) {
      return Math.round(unit / 1000000) + 'M'
    } else {
      return unit
    }
  }
  const getProperFormat = (text) => {
    if (text !== null) {
      text = text.split('-');
      text = text.map(word => { 
        return word[0].toUpperCase() + word.slice(1);
      }).join(" ");
      return text
    }
  }

  return (
    <div className="w-full px-3 md:px-0 mb-8 lg:mb-0">
      <div className="">
        <div className="pb-4 mb-4 border-b dark:border-b-slate-700">
          <div className="flex justify-between items-center">
            <h3 className="text-xl dark:text-slate-300 text-black font-bold font-heading">Features</h3>
            <p className="text-lg text-red-500 font-bold"> { (formatUnit(order_count)) } <span className="dark:text-slate-400 text-gray-600"> orders</span> </p>
          </div>
        </div>
        <ul className="text-lg text-green-500 mb-6">
          {features?.map((feature) => {
            return (
              <li key={ Object.keys(feature)[0] } className="flex items-center mb-2">
                <span className="mr-6">
                  <svg width="18" height="14" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z" fill="currentColor"></path>
                  </svg>
                  {/* {!feature.available && (<svg width="18" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" stroke="currentColor" stroke-width="2">
                    <path d="M18 12H6" fill="white" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>)} */}
                </span>
                <span className="dark:text-slate-300 text-gray-600"> { Object.values(feature)[0] } </span>
              </li>
            )
          })}
        </ul>
        <div className="text-center">
          <a href="#order-requirements" className="tracking-wider scroll-selector text-xl dark:bg-opacity-50 bg-green-500 inline-block px-10 py-4 border dark:border-opacity-10 border-green-500 hover:border-green-100 rounded-full font-medium text-white">
            Checkout
          </a>
        </div>
      </div>
    </div>
  )
}