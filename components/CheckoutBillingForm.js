import { useEffect, useState } from "react"
import { useRouter } from "next/router";
import { usePaystackPayment } from 'react-paystack'
import { useSelector, useDispatch } from "react-redux";
import { clearFeedback } from '../slices/feedback'
import { confirmPayment } from '../slices/checkout'
import { placeOrder } from "../slices/order";
import CheckoutLoginForm from "./CheckoutLoginForm";
import CheckoutSignUpForm from "./CheckoutSignUpForm";
import socket from "../socket";
import useSocketIO from "../hooks/useSocketIO"

export default function CheckoutBillingForm() {
  useSocketIO()
  const router = useRouter()
  const dispatch = useDispatch()
  const [ loginForm, toggleLoginForm ] = useState(false)
  const { user } = useSelector((state) => state.auth)
  const feedback = useSelector((state) => state.feedback)
  const { _package, requirements } = useSelector((state) => state.checkout)

  // Paystack payment config
  const config = {
    reference: (new Date()).getTime().toString(),
    email: user?.email,
    amount: _package?.price * 100,
    publicKey: "pk_test_3851bb68ea57c1da0fea7acffa71c1e3fbcbe477"
  }

  const initializePayment = usePaystackPayment(config);
  const onSuccess = async (response) => {
    const { reference } = response
    const { confirmed } = await dispatch(confirmPayment({ user_id: user._id, reference })).unwrap()
    if (confirmed) {
      const { order } = await dispatch(placeOrder({
        user_id: user._id,
        package_id: _package._id,
        requirements
      })).unwrap()

      if (order) {
        socket.emit('place order', { order })
        router.push('/order-successful')
      }
    }
  }
  const onClose = () => console.log('closed')

  useEffect(() => { dispatch(clearFeedback()) }, [])
  useEffect(() => {
    const isAuthTriggered = feedback?.register?.type === 'success' || feedback?.login?.type === 'success'
    if (isAuthTriggered && user) initializePayment(onSuccess, onClose)
  }, [user, feedback])
  
  return (
    <div className="w-full md:w-1/2 mb-8 pl-0 md:pl-4">
      <div className="relative dark:bg-slate-800 bg-white rounded-lg dark:border-slate-800 border pb-4">
        <h3 className="relative px-4 py-3 dark:border-b-slate-700 border-b text-2xl font-heading dark:text-slate-300 text-gray-800 font-medium">
          Billing details
        </h3>
        
        <div className="relative overflow-hidden pt-6 w-full">
          { !loginForm && <CheckoutSignUpForm /> }
          { loginForm && <CheckoutLoginForm /> }
        </div>

        <div className="h-full p-6 dark:text-slate-300 text-gray-800 pb-6 text-center w-full">
          <p>After sign up / login, payment process will begin automatically.</p>
          <span className="block text-lg">
            <span className="text-lg font-bold">
              {!loginForm ? "Already have an account?" : "Don't have an account?"}
            </span>
            <button onClick={(e) => { e.preventDefault(); toggleLoginForm(!loginForm) }} className={` ${!loginForm ? 'bg-green-500' : 'bg-red-500'} mt-3 w-full py-3 rounded-full text-white`}>
              {!loginForm ? 'Login & Pay' : 'Sign & Pay'}
            </button>
          </span>
        </div>

      </div>
    </div>
  )
}