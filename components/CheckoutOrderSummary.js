export default function CheckoutOrderSummary({ Package }) {
  return (
    <div className="w-full lg:w-1/3 lg:pr-0 xl:pr-10">
      <div className="flex flex-col md:flex-row lg:flex-col overflow-hidden rounded-lg bg-white p-2 mb-8 border">
        <img src={Package.gallery[0]} className="overflow-hidden" alt={Package.name} />
        <div className="w-full px-3 my-4">
          <div className="bg-white">
            <div className="pb-4 mb-4 border-b">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl text-green-500 font-bold font-heading mb-4"> {Package.name} </h2>
                <span className="text-lg text-red-500 font-bold"> {Package.currency.symbol + Package.price} </span>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-lg text-black font-bold font-heading">Features inclusive</h3>
                <span className="text-lg font-bold">Qty: x1 </span>
              </div>
            </div>
            <ul className="text-lg text-green-500 mb-6">
              {Package.features.map((feature) => {
                return (
                  <li key={Object.keys(feature)[0]} className="flex items-center mb-2">
                    <span className="mr-6">
                      <svg width="18" height="14" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z" fill="currentColor"></path>
                      </svg>
                    </span>
                    <span className="text-gray-600"> {Object.values(feature)[0]} </span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}