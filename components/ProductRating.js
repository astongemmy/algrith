import React, { useEffect, useState } from "react"

export default function ProductRating({ rating, total }) {
  const [ratingObject, setRatingObject] = useState({})
  
  const prepareRating = (rating) => {
    const roundedRating = Math.round(rating)
    const ratingArray = (roundedRating < 0 || roundedRating > 5) ? [...Array(0).keys()] : [...Array(roundedRating).keys()]
    const emptyRatingArray = [...Array(5 - ratingArray.length).keys()]
    setRatingObject({
      ratingArray,
      emptyRatingArray
    })
  }

  useEffect(() => {
    if (rating) prepareRating(rating)
  }, [rating])

  const formatUnit = (unit) => {
    if (unit >= 1000) return Math.round(unit / 1000) + 'k'
    if (unit >= 1000000) return Math.round(unit / 1000000) + 'M'
    return unit
  }

  return (
    <div className="flex items-center">
      <div className="inline-flex items-center">
        {ratingObject?.ratingArray?.map(count => {
          return (
            <button key={Math.random(3)} className="mr-1">
              <svg width={10 + (count + 1)} height={10 + (count + 1)} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7.91679H12.4167L10 0.416779L7.58333 7.91679H0L6.18335 12.3168L3.81668 19.5835L10 15.0835L16.1834 19.5835L13.8167 12.3168L20 7.91679Z" fill="rgb(245 158 11)"></path>
              </svg>
            </button>
          )
        })}
        {ratingObject?.emptyRatingArray?.map(count => {
          return (
            <button key={Math.random(3)}>
              <svg width={10 + (ratingObject?.ratingArray?.length + 1)} height={10 + (ratingObject?.ratingArray?.length + 1)} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7.91679H12.4167L10 0.416779L7.58333 7.91679H0L6.18335 12.3168L3.81668 19.5835L10 15.0835L16.1834 19.5835L13.8167 12.3168L20 7.91679Z" fill="#C1C9D3"></path>
              </svg>
            </button>
          )
        })}
      </div>
      {total && <span className="text-md dark:text-gray-300 text-gray-400 font-sans ml-4">
        { rating } ({ formatUnit(total) })
      </span>}
    </div>
  )
}