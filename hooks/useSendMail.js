import { useState } from 'react';

const useSendMail = () => {
  const [status, setStatus] = useState();
  
  const sendMail = (payload) => {
    setStatus('sending');

    fetch('/api/contacts', {
      credentials: 'same-origin',
      mode: 'same-origin',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload)
    }).then(response => response.json())
    .then(response => {
      if (response.success) setStatus('sent');
    }).catch(error => {
      console.log('An error occurred while sending message!', error);
      setStatus('error');
    });
  };

  return { status, sendMail };
};

export default useSendMail;