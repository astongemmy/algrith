import Link from "next/link";

function Popover({ items, toggle }) {
  return (
    <>
      {/* <div id="popover" className="transition duration-150 ease-in-out -mt-20 absolute top-0 left-0 ml-20 w-full sm:w-1/2"> */}
      {toggle == true && <div id="popover" className="transition duration-150 ease-in-out absolute top-8 left-0 w-full sm:w-auto z-10">
        <div className="w-full dark:bg-slate-800 bg-white rounded shadow-2xl">
          <div className="mt-8 relative dark:bg-slate-700 bg-gray-200 rounded-t py-4 px-8">
          {/* <svg className="absolute -ml-5 -mb-10 left-0 bottom-0" width="30px" height="30px" viewBox="0 0 9 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"> */}
            <svg className="dark:text-gray-700 text-gray-200 absolute rotate-90 -translate-x-2/4 left-2/4 -top-6" width="30px" height="30px" viewBox="0 0 9 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                <g id="Tooltips-" transform="translate(-874.000000, -1029.000000)" fill="currentColor">
                  <g id="Group-3-Copy-16" transform="translate(850.000000, 975.000000)">
                    <g id="Group-2" transform="translate(24.000000, 0.000000)">
                      <polygon id="Triangle" transform="translate(4.500000, 62.000000) rotate(-90.000000) translate(-4.500000, -62.000000) " points="4.5 57.5 12.5 66.5 -3.5 66.5" />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <Link href="/products">
              <a className="text-lg dark:text-green-300 text-gray-800 font-normal leading-normal tracking-normal">
                <i className="fa fa-list mr-6"></i>
                All products
              </a>
            </Link>
            {/* <p className="text-base text-gray-800 font-normal leading-normal tracking-normal opacity-50">Add person by name or title</p> */}
          </div>
          <div className="w-full h-full px-8 pt-3 pb-5">
            <ul className="w-full">
              {items.map((anchor) => {
                return (
                  <li key={ anchor.href }>                    
                    <Link href={ anchor.href }>
                      <a className="flex items-center py-4 w-full dark:text-green-300 text-gray-600 font-normal text-lg leading-3">
                        {anchor.icon && <i className={ `${anchor.icon} mr-6`}></i>}
                        { anchor.text }
                      </a>
                    </Link>
                  </li>
                )
              })}
            </ul>







            {/* <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="mr-4 w-12 h-12 rounded shadow">
                  <img className="w-full h-full overflow-hidden object-cover object-center rounded" src="https://tuk-cdn.s3.amazonaws.com/assets/components/popovers/p_1_0.png" alt="avatar" />
                </div>
                <div>
                  <h3 className="mb-2 sm:mb-1 text-gray-800 text-base font-normal leading-4">Andres Berlin</h3>
                  <p className="text-gray-600 text-xs leading-3">Manager Sales</p>
                </div>
              </div>
              <div className="relative font-normal text-sm flex items-center text-gray-600">
                <select className="w-full appearance-none pr-8 py-1 pl-2">
                  <option>Can view</option>
                  <option>Can edit</option>
                </select>
                <svg xmlns="http://www.w3.org/2000/svg" className="pointer-events-none absolute right-0 mr-2 icon icon-tabler icon-tabler-chevron-down" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </div> */}
            {/* <div className="py-6 flex justify-between items-center">
              <div className="flex items-center">
                <div className="mr-4 w-12 h-12 rounded shadow">
                  <img className="w-full h-full overflow-hidden object-cover object-center rounded" src="https://tuk-cdn.s3.amazonaws.com/assets/components/popovers/p_1_1.png" alt="avatar" />
                </div>
                <div>
                  <h3 className="mb-2 sm:mb-1 text-gray-800 text-base font-normal leading-4">Andres Berlin</h3>
                  <p className="text-gray-600 text-xs leading-3">Manager Sales</p>
                </div>
              </div>
              <div className="relative font-normal text-sm flex items-center text-gray-600">
                <select className="w-full appearance-none pr-8 py-1 pl-2">
                  <option>Can edit</option>
                  <option>Can view</option>
                </select>
                <svg xmlns="http://www.w3.org/2000/svg" className="pointer-events-none absolute right-0 mr-2 icon icon-tabler icon-tabler-chevron-down" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="mr-4 w-12 h-12 rounded shadow">
                  <img className="w-full h-full overflow-hidden object-cover object-center rounded" src="https://images.unsplash.com/photo-1570211776045-af3a51026f4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="avatar" />
                </div>
                <div>
                  <h3 className="mb-2 sm:mb-1 text-gray-800 text-base font-normal leading-4">Andres Berlin</h3>
                  <p className="text-gray-600 text-xs leading-3">Manager Sales</p>
                </div>
              </div>
              <div className="relative font-normal text-sm flex items-center text-gray-600">
                <select className="w-full appearance-none pr-8 py-1 pl-2">
                  <option>Can view</option>
                  <option>Can edit</option>
                </select>
                <svg xmlns="http://www.w3.org/2000/svg" className="pointer-events-none absolute right-0 mr-2 icon icon-tabler icon-tabler-chevron-down" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </div>
            <hr className="my-5 border-t border-gray-200" />
            <label htmlFor="link" className="text-gray-600 text-xs font-normal">
              Anyone with a link can view
            </label>
            <div className="flex items-stretch mt-2">
              <div className="relative w-full">
                <div className="absolute text-gray-500 flex items-center px-2 border-r h-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-link" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
                    <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
                  </svg>
                </div>
                <input id="link" className="pr-24 text-gray-600 bg-gray-100 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-12 text-sm border-gray-300 rounded border" defaultValue="https://alphad.co/Q4XY3HWXN95" />
                <button className="absolute right-0 top-0 transition duration-150 ease-in-out hover:bg-indigo-600 focus:outline-none bg-indigo-700 rounded-r text-white px-5 h-10 text-sm">Copy</button>
              </div>
            </div> */}
          </div>
        </div>
      </div>}
    </>
  );
}
export default Popover;