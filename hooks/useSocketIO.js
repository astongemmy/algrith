import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import socket from '../socket'

export default function useSocketIO() {
  const { user } = useSelector((state) => state.auth)
  
  useEffect(() => {
    socket.auth = { ...user }
    socket.connect()
  },[])
}