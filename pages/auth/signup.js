import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import BareLayout from '../../components/BareLayout'
import apiClient from '../../apiClient/auth'
import ResponseFeedbackDisplay from '../../components/ResponseFeedbackDisplay'
import InputFieldError from '../../components/InputFieldError'

export default function SignUp () {
  const { registerUser } = apiClient()
  const [auth, setAuth] = useState({})
  const [validationError, setValidationError] = useState({})
  const [response, setResponse] = useState({ message: '', type: '' })
  const [passwordVisibility, setPasswordVisibility] = useState(false)
  const [signup_button_text, setSignUpButtonText] = useState('Sign up')
  const [signup, setSignUp] = useState({
    email: "",
    first_name: "",
    lastname: "",
    password: ""
  })

  const handleInputChange = (e) => {
    const value = e.target.value
    const key = e.target.name
    setSignUp(prevState => { return { ...prevState, [key]: value } })
  }

  const Signup = async (e) => {
    e.preventDefault()
    setSignUpButtonText('Processing...')
    const { status, message, data } = await registerUser(signup)
    if (status) {
      setResponse({ message: 'Successful!', type: 'success' })
      setAuth(prevAuth => { return { user: data, status: true } })
    } else {
      setResponse({ message, type: 'error' })
      if (data.validationError) setValidationError({...data.validationError })
    }
    setSignUpButtonText('Sign up')
  }

  return (
    <BareLayout>
      <Head>
        <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1" />
        <title> Sign up | Algrith </title>
      </Head>
      <main>
        <section className="h-screen w-full 2xl:w-10/12 2xl:mx-auto p-8">
          <div className="h-full flex flex-col justify-center items-center mx-auto w-full md:w-6/12 lg:w-5/12 xl:w-3/12">
            <div className="shadow rounded-2xl dark:bg-slate-800 bg-white w-full pt-4 pb-12 px-6">
              <div className="flex justify-between items-center">
                <Link href={'/'}>
                  <a>
                    <img src="/images/logo/algrith-logo-dark-transparent-clean.png" className="dark:hidden h-10" alt="Algrith logo" />
                    <img src="/images/logo/algrith-logo-light-transparent-clean.png" className="hidden dark:block h-10" alt="Algrith logo" />
                  </a>
                </Link>
                <h1 className="text-xl font-medium text-heading px-4 py-2 text-white dark:bg-opacity-50 bg-green-500 shadow-sm rounded-full">Sign up</h1>
              </div>
              <form onSubmit={Signup} className="w-full px-1 mt-8">
                <div className="mb-4">
                  <label htmlFor="email" className="w-full text-lg block mb-2">Email address</label>
                  <div className="flex rounded-md shadow-sm mt-3">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      onChange={handleInputChange}
                      defaultValue={signup.email}
                      className="dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200 border-r-0 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none py-3 rounded-l-md text-lg border-gray-300"
                      placeholder="e.g. johndoe@email.com"
                      required
                    />
                    <span className="dark:bg-slate-700 dark:border-slate-600 inline-flex items-center px-4 rounded-r-md border border-l-0 border-gray-300 text-gray-500 text-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                      </svg>
                    </span>
                  </div>
                  <InputFieldError message={validationError.email} />
                </div>                
                <div className="mb-4">
                  <label htmlFor="first_name" className="w-full text-lg block mb-2">First name</label>
                  <div className="flex rounded-md shadow-sm mt-3">
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      onChange={handleInputChange}
                      defaultValue={signup.first_name}
                      className="dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200 border-r-0 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none py-3 rounded-l-md text-lg border-gray-300"
                      placeholder="e.g. John"
                      required
                    />
                    <span className="dark:bg-slate-700 dark:border-slate-600 inline-flex items-center px-4 rounded-r-md border border-l-0 border-gray-300 text-gray-500 text-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                      </svg>
                    </span>
                  </div>
                  <InputFieldError message={validationError.first_name} />
                </div>                
                <div className="mb-4">
                  <label htmlFor="last_name" className="w-full text-lg block mb-2">Last name</label>
                  <div className="flex rounded-md shadow-sm mt-3">
                    <input
                      type="text"
                      name="last_name"
                      id="last_name"
                      onChange={handleInputChange}
                      defaultValue={signup.last_name}
                      className="dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200 border-r-0 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none py-3 rounded-l-md text-lg border-gray-300"
                      placeholder="e.g. Doe"
                      required
                    />
                    <span className="dark:bg-slate-700 dark:border-slate-600 inline-flex items-center px-4 rounded-r-md border border-l-0 border-gray-300 text-gray-500 text-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </span>
                  </div>
                  <InputFieldError message={validationError.last_name} />
                </div>                
                <div className="mb-6">
                  <label htmlFor="password" className="w-full text-lg block mb-2">Password</label>
                  <div className="flex rounded-md shadow-sm mt-3">
                    <input
                      type={passwordVisibility ? 'text' : 'password'}
                      name="password"
                      id="password"
                      onChange={handleInputChange}
                      defaultValue={signup.password}
                      className="dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200 border-r-0 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none py-3 rounded-l-md text-lg border-gray-300"
                      placeholder="*********"
                      required
                    />
                    <span onClick={()=>setPasswordVisibility(!passwordVisibility)} className="dark:bg-slate-700 dark:border-slate-600 dark:hover:bg-opacity-50 hover:bg-green-500 hover:text-white cursor-pointer inline-flex items-center px-4 rounded-r-md border border-l-0 border-gray-300 text-gray-500 text-lg">
                      {
                        !passwordVisibility ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      :
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                        </svg>
                      }
                    </span>
                  </div>
                  <InputFieldError message={validationError.password} />
                </div>
                <ResponseFeedbackDisplay payload={response} />
                <div className="text-xl">
                  <button type="submit" className="w-full py-3 rounded-full text-white dark:bg-opacity-50 bg-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    { signup_button_text }
                  </button>
                </div>
              </form>
              <p className="text-xl text-center mt-4">
                Already have an account?
                <Link href={'/auth/login'}>
                  <a className="block dark:text-green-300 text-black font-bold tracking-wider">Sign in</a>
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
    </BareLayout>
  )
}