import React from 'react'
const LeftNav = (onClick, disabled) => {
  return (
    <a onClick={onClick} disabled={disabled} className="text-xl absolute left-2 top-2/4 -translate-y-2/4 z-10 flex justify-center items-center h-14 w-14 text-white dark:bg-teal-600 bg-green-500 rounded-full focus:bg-green-800 hover:bg-green-800" href="#">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </a>
  )
}
export default LeftNav;