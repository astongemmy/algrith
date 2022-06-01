import React, { useEffect } from 'react'

export default function useClickAway(refEl, setDropdown) {
  useEffect(() => {
    const handleClickAway = () => {
      if (refEl.current && !refEl.current.contains(event.target)) setDropdown(false)
    }
    document.addEventListener("click", handleClickAway)
    return () => document.removeEventListener("click", handleClickAway);
  }, [])
}