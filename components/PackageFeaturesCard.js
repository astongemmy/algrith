import React from "react"

export default function ProductFeatureCard({ item, slug }) {
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
      <div className="bg-white">
        <div className="pb-4 mb-4 border-b">
          <div className="flex justify-between items-center">
            <h3 className="text-xl text-black font-bold font-heading">Features</h3>
            <p className="text-lg text-red-500 font-bold"> { (formatUnit(item.ordered)) } <span className="text-gray-600"> orders</span> </p>
          </div>
        </div>
        <ul className="text-lg text-green-500 mb-6">
          {item.features.map((feature) => {
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
                <span className="text-gray-600"> { Object.values(feature)[0] } </span>
              </li>
            )
          })}
        </ul>
        <div className="text-center">
          <a href="#order-requirements" className="scroll-selector text-xl bg-green-500 inline-block px-10 py-4 border border-green-500 hover:border-green-100 rounded-full font-bold text-white">
            Checkout
          </a>
        </div>
      </div>
    </div>
  )
}