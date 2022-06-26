import { useEffect, useState } from "react"

export default function({ message }) {
  const [text, setText] = useState('')
  useEffect(() => {
    setText(message)
    setTimeout(() => {
      setText('')
    }, 3000)
  }, [message])
  
  return (
    <>
      {text && <div className="text-red-400 text-sm mt-1">
        { text }
      </div>}
    </>
  )
}