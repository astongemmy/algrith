import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { clearValidationError } from "../slices/validation"

export default function({ message }) {
  const dispatch = useDispatch()
  const [text, setText] = useState('')
  
  useEffect(() => {
    setText(message)
    setTimeout(() => dispatch(clearValidationError()), 3000)
  }, [message])
  
  return (
    <>
      {text && <div className="text-red-400 text-sm mt-1">
        { text }
      </div>}
    </>
  )
}