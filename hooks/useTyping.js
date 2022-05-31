import React, { useEffect } from "react";

export default function useTyping(text) {  
  let old_text, typing_timeout;
	useEffect(() => {
    clearTimeout(typing_timeout)
    const typing = (counter) => {
      text !== old_text ? clearTimeout(typing_timeout) : ''
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
          clearTimeout(typing_timeout)
          count = 0
          return
        }
        if (counter <= text.length) {
          count = counter + 1
        }
        let cursor_elem = document.createElement("span")
        cursor_elem.className = "cursor"
        let element = document.createElement("span")
        // element.textContent = text[count];
        // if (text[count] == " ") {
          // element.style.marginLeft = "0px"
        // }
        const getTextFromContainer = document.querySelector('.intro-lead').textContent
        document.querySelector('.intro-lead').textContent = getTextFromContainer + text[count]
        // document.querySelector('.intro-lead').append(element)
        document.querySelector('.intro-lead').append(cursor_elem)
        typing_timeout = setTimeout(() => {
          typing(count)
        }, 100)
        old_text = text
      }
    }
    text && typeof text == 'string' ? typing(-1) : ''
	}, [text])
}