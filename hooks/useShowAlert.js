import React from "react";

export default function useShowAlert() {
  const showAlert = (message) => {
    // Append response message to feedback element
    if (message) document.querySelector('#alert #message').textContent = message
    // Display feedback element
    document.querySelector('#alert').classList.remove('-top-32');
    document.querySelector('#alert').classList.add('top-8');
    // Hide feedback element after set time
    const toggleAlert = setInterval(() => {
      document.querySelector('#alert #message').textContent = '';
      document.querySelector('#alert').classList.remove('top-8');
      document.querySelector('#alert').classList.add('-top-32');
      clearInterval(toggleAlert);
    }, 2000);
  }
  return { showAlert }
}