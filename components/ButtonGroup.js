import React, { useState } from "react";

export default function ButtonGroup({ buttons, defaultSelected, getSelected }) {
  const [selected, setSelected] = useState(defaultSelected)
  const toggleSelected = (val) => { getSelected(val); setSelected(val) }
  return (
    <div className="mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-center p-0">
      <div className="flex items-start mt-4 sm:mt-0 w-full">
        <div className="border flex justify-between shadow rounded-lg overflow-hidden mx-auto w-full">
          <button onClick={() => toggleSelected(buttons[0].id)} className={`${ selected == buttons[0].id ? 'bg-green-500 text-white' : 'text-gray-500 bg-white' } py-3 px-5 flex items-center justify-center text-lg focus:outline-none w-1/${buttons.length}`}>
            { buttons[0].text }
          </button>
          {buttons.length > 1 && (
            buttons.slice(1,).map((button) => {
              return (
                <button key={ button.id } onClick={() => toggleSelected(button.id)} className={`${ selected == button.id ? 'bg-green-500 text-white' : 'text-gray-500 bg-white' } py-3 px-5 flex items-center justify-center text-lg focus:outline-none border border-l border-r-0 border-b-0 border-t-0 border-indigo-100 w-1/${buttons.length}`}>
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