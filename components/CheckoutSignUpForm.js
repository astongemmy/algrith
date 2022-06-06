import { useEffect, useState } from "react"
import Script from 'next/script'

export default function CheckoutSignUpForm({ getAuth }) {
  const [auth, setAuth] = useState({})
  const [register, setRegister] = useState({ email: "", firstame: "", lastname: "", password: "" })
  useEffect(() => { getAuth(auth) }, [auth])
  const handleInputChange = (e) => {
    const value = e.target.value
    const key = e.target.name
    setRegister(prevState => { return { ...prevState, [key]: value } })
  }
  const Register = (e) => {
    e.preventDefault()
    setAuth(prevAuth => { return { user: register, status: true } })
  }

  return (
    <form id="paymentForm" onSubmit={Register} className="transition-left duration-700 w-full px-6">
      <div className="mb-4">
        <label htmlFor="register-email" className="w-full text-lg block mb-2">Email Address</label>
        <input type="email" name="email" onChange={handleInputChange} defaultValue={register.email} id="register-email" className="w-full rounded-lg border border-gray-300 text-lg py-3" placeholder="e.g. johndoe@email.com" required />
      </div>
      <div className="mb-4">
        <label htmlFor="register-firstname" className="w-full text-lg block mb-2">First Name</label>
        <input type="text" name="firstname" onChange={handleInputChange} defaultValue={register.firstame} id="register-firstname" className="w-full rounded-lg border border-gray-300 text-lg py-3" placeholder="e.g. John" required />
      </div>
      <div className="mb-4">
        <label htmlFor="register-lastname" className="w-full text-lg block mb-2">Last Name</label>
        <input type="text" name="lastname" onChange={handleInputChange} defaultValue={register.lastname} id="register-lastname" className="w-full rounded-lg border border-gray-300 text-lg py-3" placeholder="e.g. Doe" required />
      </div>
      <div className="mb-4">
        <label htmlFor="register-password" className="w-full text-lg block mb-2">Password</label>
        <input type="password" name="password" onChange={handleInputChange} defaultValue={register.password} id="register-password" className="w-full rounded-lg border border-gray-300 text-lg py-3" placeholder="*********" required />
      </div>
      <div className="relative text-xl">
        <button type="submit" className="w-full py-3 rounded-full text-white bg-red-500">
          Sign Up & Pay
        </button>
      </div>
      <Script src="https://js.paystack.co/v1/inline.js" />
    </form>
  )
}