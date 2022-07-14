import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearFeedback } from '../slices/feedback';

export default function FeedbackDisplay({ target, clear = true }) {
  const dispatch = useDispatch();
  const feedback = useSelector((state) => state.feedback);
  const targetFeedback = feedback[target]
  
  useEffect(() => {
    if (clear) setTimeout(() => dispatch(clearFeedback()), 3000)
  }, [targetFeedback?.message])

  const messageClass = {
    success: 'text-green-500',
    error: 'text-red-500',
    warning: 'text-orange-500',
    pending: 'text-gray-600'
  }

  return (
    <>
      {targetFeedback?.message && (
        <div className={`${messageClass[targetFeedback?.type]} text-md text-center mb-2`}>
          { targetFeedback?.message }
        </div>
      )}
    </>
  )
}