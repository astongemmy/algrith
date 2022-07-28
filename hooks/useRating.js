import { useEffect, useState } from 'react'

export default function useRating({ reviews }) {
  const [rating, setRating] = useState(0)
  
  const sumArrayElements = (arr) => arr.reduce((a, b) => a + b, 0)
  
  const scale = 5
  const ratings = [...Array(scale + 1).keys()].slice(1)

  const responsesArray = ({ reviews, ratings }) => {
    return ratings.map(rating => {
      const reviewRatingsArray = reviews.map(review => review.rating === rating)
      const response = sumArrayElements(reviewRatingsArray)
      return response
    })
  }

  const ratingScoresArray = ({ reviews, ratings }) => {
    return ratings.map(rating => {
      const reviewRatingsArray = reviews.map(review => review.rating === rating)
      const ratingScore = sumArrayElements(reviewRatingsArray) * rating
      return ratingScore
    })
  }

  const calculateRating = ({ reviews, ratings }) => {
    const totalRatingScores = sumArrayElements(ratingScoresArray({
      reviews,
      ratings
    }))
    const totalResponses = sumArrayElements(responsesArray({
      reviews,
      ratings
    }))
    const rating = (totalRatingScores/totalResponses).toFixed(2)
    setRating(rating)
  }

  useEffect(() => {
    if (reviews.length) calculateRating({ reviews, ratings })
  }, [reviews])

  return { rating, total: reviews.length }
}