import { useSelector } from "react-redux"

export default function CheckoutOrderSummary() {
  const { _package } = useSelector((state) => state.checkout)
  const API_PUBLIC_URL = process.env.NEXT_PUBLIC_API_PUBLIC_URL

  return (
    <div className="w-full lg:w-1/3 lg:pr-0 xl:pr-10">
      <div className="flex flex-col md:flex-row lg:flex-col overflow-hidden rounded-lg dark:bg-slate-800 bg-white p-2 mb-8 dark:border-slate-800 border">
        <img src={`${API_PUBLIC_URL}${_package?.gallery[0]?.path}`} className="dark:opacity-50 overflow-hidden" alt={_package?.name} />
        <div className="w-full px-3 my-4">
          <div className="pb-4 mb-4 dark:border-b-slate-700 border-b">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl text-green-500 font-medium font-heading mb-4"> { _package?.name } </h2>
              <span className="text-lg text-red-500 font-bold"> { _package?.currency?.symbol + _package?.price } </span>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="text-lg dark:text-slate-300 text-black font-medium font-heading">Features inclusive</h3>
              <span className="text-lg font-bold">Qty: x1 </span>
            </div>
          </div>
          <ul className="text-lg text-green-500 mb-6">
            {_package?.features.map((feature) => {
              return (
                <li key={Object.keys(feature)[0]} className="flex items-center mb-2">
                  <span className="mr-6">
                    <svg width="18" height="14" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z" fill="currentColor"></path>
                    </svg>
                  </span>
                  <span className="dark:text-slate-300 text-gray-600"> {Object.values(feature)[0]} </span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}