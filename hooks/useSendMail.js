import { useState } from 'react'
import useSerializeForm from './useSerializeForm'
import useShowAlert from './useShowAlert'

export default function useSendMail() {
  const [progress, setProgress] = useState('idle')
  const { serializeForm } = useSerializeForm()
  const { showAlert } = useShowAlert()
  
  const sendMail = (e) => {
    e.preventDefault()
    const contactForm = e.target
    const contact = serializeForm({ form: contactForm })
    setProgress('Sending...')
    fetch('/api/contacts', {
      method: 'POST',
      mode: 'same-origin',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json', //	Content type sent
        'Accept': 'application/json',	//	Content type expected
      },
      body: JSON.stringify(contact)
    }).then(response => response.json())
    .then(response => {
      if (response.success) {
        setProgress('Sent')
        contactForm.reset()
        showAlert(response.message)      
        const toggleProgress = setTimeout(() => {
          setProgress('Send')
          clearTimeout(toggleProgress);
        }, 2000);      
      }
    }).catch(error => {
      showAlert('Error while sending mail!')
    })
  }
  return { progress, sendMail }
}