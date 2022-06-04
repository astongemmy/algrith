import React, { Fragment, useEffect, useState } from "react"
import colors from "../lib/colors"

export default function Color({ getColor }) {
  const [selected, setSelected] = useState([])
  useEffect(() => { getColor([ ...selected ]) },[selected])
  const setColor = (e) => {
    let new_colors;
    if (e.target.checked && !selected.includes(e.target.value)) {
      new_colors = [ ...selected, e.target.value ]
      setSelected([ ...new_colors ])
    }
    if (!e.target.checked && selected.includes(e.target.value)) {
      new_colors = [ ...selected.filter((color) => color !== e.target.value) ]
      setSelected([ ...new_colors ])
    }
  }
  return (
    <React.Fragment>
      {colors.map((color) => {
        return (
          <React.Fragment key={color}>
            {color !== 'white' ? 
              <input type="checkbox" name={color} id={color} title={color} value={color} onChange={setColor}
                className={`mr-4 mb-4 w-8 h-8 bg-${color}-500 bg-${color}
                  text-${color}-500 text-${color}
                  active:bg-${color}-500 active:bg-${color}
                  focus:ring-${color}-500 focus:ring-${color}
                  focus:border-${color}-500 focus:border-${color}
                  border-${color} border-${color}-500
                  rounded-full shadow-lg
                `}
              />
              : 
              <input type="checkbox" name={color} id={color} title={color} value={color} onChange={setColor}
                className={`
                  mr-4 mb-4 w-8 h-8
                  bg-${color}
                  text-zinc-300
                  active:bg-${color}
                  focus:ring-zinc-200
                  focus:border-zinc-200
                  border-zinc-200
                  rounded-full shadow-lg
                `}
              />
            }
          </React.Fragment>
        )
      })}
    </React.Fragment>
  )
}