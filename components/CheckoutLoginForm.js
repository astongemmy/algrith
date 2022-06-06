import { useState } from "react"

export default function CheckoutLoginForm({ getAuth }) {
  const [auth, setAuth] = useState({})
  const [login, setLogin] = useState({ email: "", password: "" })

  const handleInputChange = (e) => {
    const value = e.target.value
    const key = e.target.name
    setLogin(prevState => { return { ...prevState, [key]: value } })
  }
  const Login = (e) => {
    e.preventDefault()
    setAuth(prevAuth => { return { user: login, status: true } })
    getAuth(auth)
  }

  return (
    <form onSubmit={Login} className="transition-left duration-700 w-full px-6">
      <div className="mb-4">
        <label htmlFor="login-email" className="w-full text-lg block mb-2">Email Address</label>
        <input type="email" name="email" onChange={handleInputChange} defaultValue={login.email} id="login-email" className="w-full rounded-lg border border-gray-300 text-lg py-3" placeholder="e.g. johndoe@email.com" required />
      </div>
      <div className="mb-4">
        <label htmlFor="login-password" className="w-full text-lg block mb-2">Password</label>
        <input type="password" name="password" onChange={handleInputChange} defaultValue={login.password} id="login-password" className="w-full rounded-lg border border-gray-300 text-lg py-3" placeholder="*********" required />
      </div>
      <div className="relative text-xl">
        <button type="submit" className="w-full py-3 rounded-full text-white bg-green-500">
          Login & Pay
        </button>
      </div>
    </form>
  )
}