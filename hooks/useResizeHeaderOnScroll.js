import React, { useEffect } from "react";
import useViewport from "./useViewport";

export default function useResizeHeaderOnScroll() {
  const { viewport } = useViewport()
  useEffect(() => {
    const resizeHeaderOnScroll = () => {
      const nav_menu = document.querySelector('#nav-menu')
      const header = document.querySelector('header');
      const brand = document.querySelector('#brand');
      
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        header.style.transform = 'scale(1, 0.7)'
        header.style.transformOrigin = 'top'
        brand.style.transform = 'scale(0.7, 1)'
        brand.style.transformOrigin = 'left top'
        header.classList.add('shadow-lg')
        if (!['sm'].includes(viewport)) nav_menu.style.top = '0.52rem'
      } else {
        header.style.transform = 'scale(1)'
        brand.style.transform = 'scale(1)'
        header.classList.remove('shadow-lg')
        if (!['sm'].includes(viewport)) nav_menu.style.top = '1.5rem'
      }
    }
    window.addEventListener('scroll', resizeHeaderOnScroll)
    resizeHeaderOnScroll()
    return () => window.removeEventListener('scroll', resizeHeaderOnScroll)
  }, [viewport])
}