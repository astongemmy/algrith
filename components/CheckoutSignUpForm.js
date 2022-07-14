import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { register } from "../slices/auth"
import FeedbackDisplay from "./FeedbackDisplay"
import InputFieldError from "./InputFieldError"

export default function CheckoutSignUpForm() {
  const dispatch = useDispatch()
  const feedback = useSelector((state) => state.feedback)
  const validationError = useSelector((state) => state.validation)
  
  const [registration, setRegistration] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password: ""
  })
  
  const handleInputChange = (e) => {
    const value = e.target.value
    const key = e.target.name
    setRegistration(prevState => { return { ...prevState, [key]: value } })
  }
  
  const Register = async (e) => {
    e.preventDefault()
    dispatch(register(registration))
  }

  return (
    <form onSubmit={Register} className="dark:text-slate-300 transition-left duration-700 w-full px-6">
      <div className="mb-4">
        <label htmlFor="register-email" className="w-full text-lg block mb-2">Email Address</label>
        <input type="email" name="email" onChange={handleInputChange} defaultValue={registration.email} id="register-email" className="dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200 w-full rounded-lg border border-gray-300 text-lg py-3" placeholder="e.g. johndoe@email.com" required />
        <InputFieldError message={validationError.email} />
      </div>
      <div className="mb-4">
        <label htmlFor="register-first_name" className="w-full text-lg block mb-2">First Name</label>
        <input type="text" name="first_name" onChange={handleInputChange} defaultValue={registration.first_name} id="register-first_name" className="dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200 w-full rounded-lg border border-gray-300 text-lg py-3" placeholder="e.g. John" required />
        <InputFieldError message={validationError.first_name} />
      </div>
      <div className="mb-4">
        <label htmlFor="register-last_name" className="w-full text-lg block mb-2">Last Name</label>
        <input type="text" name="last_name" onChange={handleInputChange} defaultValue={registration.last_name} id="register-last_name" className="dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200 w-full rounded-lg border border-gray-300 text-lg py-3" placeholder="e.g. Doe" required />
        <InputFieldError message={validationError.last_name} />
      </div>
      <div className="mb-4">
        <label htmlFor="register-password" className="w-full text-lg block mb-2">Password</label>
        <input type="password" name="password" onChange={handleInputChange} defaultValue={registration.password} id="register-password" className="dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200 w-full rounded-lg border border-gray-300 text-lg py-3" placeholder="*********" required />
        <InputFieldError message={validationError.password} />
      </div>

      {feedback?.register?.message && <FeedbackDisplay target="register" />}

      <div className="relative text-xl">
        <button type="submit" className="w-full py-3 rounded-full text-white bg-red-500">
          Sign Up & Pay
        </button>
      </div>
    </form>
  )
}