import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../slices/auth"
import FeedbackDisplay from "./FeedbackDisplay"
import InputFieldError from "./InputFieldError"

export default function CheckoutLoginForm() {
  const dispatch = useDispatch()
  const feedback = useSelector((state) => state.feedback)
  const validationError = useSelector((state) => state.validation)
  const [authentication, setAuthentication] = useState({ email: "", password: "" })
  
  const handleInputChange = (e) => {
    const value = e.target.value
    const key = e.target.name
    setAuthentication(prevState => { return { ...prevState, [key]: value } })
  }
  const Login = async (e) => {
    e.preventDefault()
    dispatch(login(authentication))
  }

  return (
    <form onSubmit={Login} className="dark:text-slate-300 transition-left duration-700 w-full px-6">
      <div className="mb-4">
        <label htmlFor="login-email" className="w-full text-lg block mb-2">Email Address</label>
        <input type="email" name="email" onChange={handleInputChange} defaultValue={authentication.email} id="login-email" className="dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200 w-full rounded-lg border border-gray-300 text-lg py-3" placeholder="e.g. johndoe@email.com" required />
        <InputFieldError message={validationError.email} />
      </div>
      <div className="mb-4">
        <label htmlFor="login-password" className="w-full text-lg block mb-2">Password</label>
        <input type="password" name="password" onChange={handleInputChange} defaultValue={authentication.password} id="login-password" className="dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200 w-full rounded-lg border border-gray-300 text-lg py-3" placeholder="*********" required />
        <InputFieldError message={validationError.password} />
      </div>

      {feedback?.login?.message && <FeedbackDisplay target="login" />}

      <div className="relative text-xl">
        <button type="submit" className="w-full py-3 rounded-full text-white bg-green-500">
          Login & Pay
        </button>
      </div>
    </form>
  )
}