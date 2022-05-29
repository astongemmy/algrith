import React, { useEffect, useState } from "react";

export default function ButtonGroup({ defaultSelected, getSelected, type }) {
  const [selected, setSelected] = useState(defaultSelected)
  useEffect(() => {
    setSelected(defaultSelected)
  },[defaultSelected])
  const toggleSelected = (val) => { getSelected(val); setSelected(val) }
  const types = {
    products: {
      websites: [
        { id: 'homepage', text: 'Homepage' },
        { id: 'corporate', text: 'Corporate' },
        { id: 'business', text: 'Business' },
      ],
      applications: [
        { id: 'fintech', text: 'Fintech' },
        { id: 'crypto', text: 'Crypto' },
        { id: 'todo', text: 'Todo' },
      ]
    }
  }
  const typeArray = type.split('.')
  const buttonToRender = types[typeArray[0]][typeArray[1]]

  return (
    <div className="mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-center p-0">
      <div className="flex items-start w-full">
        <div className="flex justify-between shadow overflow-hidden mx-auto w-full">
          <button onClick={() => toggleSelected(buttonToRender[0].id)} className={`${ selected == buttonToRender[0].id ? 'bg-green-500 text-white' : 'text-gray-500 bg-white' } py-3 px-5 flex items-center justify-center text-lg focus:outline-none w-1/${buttonToRender.length}`}>
            { buttonToRender[0].text }
          </button>
          {buttonToRender.length > 1 && (
            buttonToRender.slice(1,).map((button) => {
              return (
                <button key={ button.id } onClick={() => toggleSelected(button.id)} className={`${ selected == button.id ? 'bg-green-500 text-white' : 'text-gray-500 bg-white' } py-3 px-5 flex items-center justify-center text-lg focus:outline-none border border-l border-r-0 border-b-0 border-t-0 border-indigo-100 w-1/${buttonToRender.length}`}>
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