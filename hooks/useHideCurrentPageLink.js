import { useEffect } from "react";

export default function useHideCurrentPageLink() {
  useEffect(() => {
    const hideCurrentPageLink = () => {
      const header_links = document.querySelectorAll('#navbar-links a')
      const path = window.location.pathname
      const page_name = path.split('/').pop()
      header_links.forEach(link => {
        const link_href = link.href.split('/').pop()
        if (link_href == page_name) {
          link.style.display = 'none'
        }
      })
    }
    hideCurrentPageLink()
  }, [])
}