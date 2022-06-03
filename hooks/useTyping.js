import React, { useEffect } from "react";

export default function useTyping(text) {
  useEffect(() => {
    const typing = (counter) => {
      let count
      if (document.querySelector('.intro-lead')) {
        if (document.querySelector('.intro-lead .cursor')) {
          if (counter !== text.length - 1) {
            document.querySelector('.intro-lead .cursor').remove()
          }
          if (counter == text.length - 1) {
            document.querySelector('.intro-lead .cursor').remove()
            return
          }
        }
        if (counter >= text.length) {
          clearTimeout(window.typing_timeout)
          count = 0
          return
        } else {
          count = counter + 1
        }
        let cursor_elem = document.createElement("span")
        cursor_elem.className = "cursor"
        let element = document.createElement("span")
        const getTextFromContainer = document.querySelector('.intro-lead').textContent
        document.querySelector('.intro-lead').textContent = getTextFromContainer + text[count]
        document.querySelector('.intro-lead').append(cursor_elem)
        window.typing_timeout = setTimeout(() => {
          typing(count)
        }, 100)
      }
    }
    if (text && typeof text == 'string') {
      clearTimeout(window.typing_timeout)
      document.querySelector('.intro-lead').textContent = ''
      typing(-1)
    }
	}, [text])
}