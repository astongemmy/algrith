import { useEffect, useState } from "react";

export default function useToggleNavbar({ opener, closer, navbar, overlay }) {
  const toggler = {
    open: () => {
      if (navbar.current.className.includes('-right-full')) {
        navbar.current.classList.remove('-right-full')
        navbar.current.classList.add('right-0')
        overlay.current.classList.remove('hidden')
        overlay.current.classList.add('block')
      }
    },
    close: () => {
      if (navbar.current.className.includes('right-0')) {
        navbar.current.classList.remove('right-0')
        navbar.current.classList.add('-right-full')
        overlay.current.classList.remove('block')
        overlay.current.classList.add('hidden')
      }
    }    
  }
  useEffect(() => {
    opener.current.addEventListener("click", () => toggler.open())
    closer.current.addEventListener("click", () => toggler.close())
    overlay.current.addEventListener("click", () => toggler.close())
  }, [])
}