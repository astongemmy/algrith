import React, { useEffect } from 'react'

export default function useClickAway(refEl, callback) {
  useEffect(() => {
    const handleClickAway = () => {
      if (refEl.current && !refEl.current.contains(event.target)) callback(false)
    }
    document.addEventListener("click", handleClickAway)
    return () => document.removeEventListener("click", handleClickAway);
  }, [])
}