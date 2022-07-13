import React, { useEffect, useState } from "react";

export default function ButtonGroup({ defaultSelected, getSelected, buttons }) {
  const [selected, setSelected] = useState({})
  useEffect(() => { setSelected(defaultSelected) },[defaultSelected])  
  const toggleSelected = (val) => { getSelected(val._id); setSelected(val) }
  const buttonWidth = buttons.length > 1 ? `w-1/${buttons.length}` : `w-full`
  
  return (
    <div className="mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-center p-0 dark:shadow dark:shadow-slate-500">
      <div className="flex items-start w-full">
        <div className="flex justify-between shadow overflow-hidden mx-auto w-full">
          <button onClick={() => toggleSelected(buttons[0])} className={`${ selected?._id == buttons[0]._id ? 'dark:bg-opacity-50 bg-green-500 text-white font-semibold' : 'dark:text-gray-200 text-gray-700 bg-white dark:bg-slate-800' } py-3 px-5 flex items-center justify-center text-lg focus:outline-none ${buttonWidth}`}>
            { buttons[0].text }
          </button>
          {buttons.length > 1 && (
            buttons.slice(1,).map((button) => {
              return (
                <button key={ button._id } onClick={() => toggleSelected(button)} className={`${ selected._id == button._id ? 'dark:bg-opacity-50 bg-green-500 text-white font-semibold' : 'dark:text-gray-200 text-gray-700 bg-white dark:bg-slate-800' } py-3 px-5 flex items-center justify-center text-lg focus:outline-none border border-l border-r-0 border-b-0 border-t-0 dark:border-slate-700 border-indigo-100 ${buttonWidth}`}>
                  { button.text }
                </button>
              )
            })
          )}
        </div>
      </div>
    </div>
  );
}