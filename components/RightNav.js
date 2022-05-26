import React from 'react'
const RightNav = (onClick, disabled) => {
  return (
    <a onClick={onClick} disabled={disabled} className="text-xl absolute right-8 top-2/4 -translate-y-2/4 z-10 flex justify-center items-center h-16 w-16 text-white bg-gray-500 rounded-full focus:bg-gray-800 hover:bg-gray-800" href="#">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  )
}
export default RightNav;