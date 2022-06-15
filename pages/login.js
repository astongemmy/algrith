import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import BareLayout from '../components/BareLayout'

export default function Login () {
  const [auth, setAuth] = useState({})
  const [login, setLogin] = useState({ email: "", password: "" })
  const [passwordVisibility, setPasswordVisibility] = useState(false)
  const handleInputChange = (e) => {
    const value = e.target.value
    const key = e.target.name
    setLogin(prevState => { return { ...prevState, [key]: value } })
  }
  const Login = (e) => {
    e.preventDefault()
    setAuth(prevAuth => { return { user: login, status: true } })
  }

  return (
    <BareLayout>
      <Head>
        <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1" />
        <title> Login | Algrith </title>
      </Head>
      <main>
        <section className="h-screen w-full 2xl:w-9/12 2xl:mx-auto p-8">
          <div className="h-full flex flex-col justify-center items-center mx-auto w-full md:w-6/12 lg:w-5/12 xl:w-3/12">
            <div className="shadow rounded-2xl dark:bg-slate-800 bg-white w-full pt-4 pb-12 px-6">
              <div className="flex justify-between items-center">
                <Link href={'/'}>
                  <a>
                    <img src="/images/logo/algrith-logo-dark-transparent-clean.png" className="dark:hidden h-10" alt="Algrith logo" />
                    <img src="/images/logo/algrith-logo-light-transparent-clean.png" className="hidden dark:block h-10" alt="Algrith logo" />
                  </a>
                </Link>
                <h1 className="text-xl font-medium text-heading px-4 py-2 text-white dark:bg-opacity-50 bg-green-500 shadow-sm rounded-full">Login</h1>
              </div>
              <form onSubmit={Login} className="w-full px-1 mt-8">
                <div className="mb-4">
                  <label htmlFor="email" className="w-full text-lg block mb-2">Email address</label>
                  <div className="flex rounded-md shadow-sm mt-3">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      onChange={handleInputChange}
                      defaultValue={login.email}
                      className="dark:bg-slate-700 dark:border-slate-600 border-r-0 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none py-3 rounded-l-md text-lg border-gray-300"
                      placeholder="e.g. johndoe@email.com"
                      required
                    />
                    <span className="dark:bg-slate-700 dark:border-slate-600 inline-flex items-center px-4 rounded-r-md border border-l-0 border-gray-300 text-gray-500 text-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                    </span>
                  </div>
                </div>                
                <div className="mb-4">
                  <label htmlFor="password" className="w-full text-lg block mb-2">Password</label>
                  <div className="flex rounded-md shadow-sm mt-3">
                    <input
                      type={passwordVisibility ? 'text' : 'password'}
                      name="password"
                      id="password"
                      onChange={handleInputChange}
                      defaultValue={login.password}
                      className="dark:bg-slate-700 dark:border-slate-600 border-r-0 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none py-3 rounded-l-md text-lg border-gray-300"
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
                </div>
                <Link href={'/recover-password'}>
                  <a className="text-lg text-center my-4 block dark:text-green-300 text-gray-600">Recover password?</a>
                </Link>
                <div className="text-xl">
                  <button type="submit" className="w-full py-3 rounded-full text-white dark:bg-opacity-50 bg-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                    </svg>
                    Login
                  </button>
                </div>
              </form>
              <p className="text-xl text-center mt-4">
                Don't have an account?
                <Link href={'/signup'}>
                  <a className="block dark:text-green-300 text-black font-bold tracking-wider">Sign up</a>
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
    </BareLayout>
  )
}