import { io } from 'socket.io-client'

const API_PUBLIC_URL = process.env.NEXT_PUBLIC_API_PUBLIC_URL

const socket = io(API_PUBLIC_URL, {
  transports: ['websocket'],
  autoConnect: false
})

// socket.on('connect', () => {
//   user.connected = true
// })

// socket.on('disconnect', () => {
//   user.connected = false
// })

socket.on('connect_error', (err) => {
  if (err.message === 'Invalid request.') {
    console.log('Invalid request has been made.')
    // socket.off('connect_error');
  }
})

// socket.onAny((event, ...args) => {
//   console.log(event, args);
// })

export default socket