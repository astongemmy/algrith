import { useEffect, useState } from "react"

export default function ResponseFeedbackDisplay({ payload, clear = true }) {
  const [response, setResponse] = useState({})
  useEffect(() => {
    setResponse({ ...payload })
    if (clear) {
      setTimeout(() => {
        setResponse({ message: '', type: '' })
      }, 3000)
    }
  }, [payload])
  const response_class = {
    success: 'text-green-500',
    error: 'text-red-500',
    warning: 'text-orange-500',
    pending: 'text-gray-600'
  }

  return (
    <>
      {response.message && <div className={`${response_class[response.type]} text-md font-bold text-center mb-2`}>
        { response.message }
      </div>}
    </>
  )
}