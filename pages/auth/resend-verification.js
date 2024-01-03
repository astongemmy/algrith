import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import FeedbackDisplay from '../../components/FeedbackDisplay';
import InputFieldError from '../../components/InputFieldError';
import { resendVerificationEmail } from '../../slices/auth';
import BareLayout from '../../components/BareLayout';

const ResendVerification = () => {
  const validationError = useSelector((state) => state.validation);
  const [verification, setVerification] = useState({ email: '' });
  const { isLoading } = useSelector((state) => state.auth);
  const feedback = useSelector((state) => state.feedback);
  const dispatch = useDispatch();
  
  const handleInputChange = (e) => {
    const value = e.target.value;
    const key = e.target.name;

    setVerification(prevState => {
      return {
        ...prevState,
        [key]: value
      }
    });
  };
  
  const ResendVerificationEmail = async (e) => {
    dispatch(resendVerificationEmail(verification));
    e.preventDefault();
  };

  return (
    <BareLayout>
      <Head>
        <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1" />
        <title> Resend Verification Email | Algrith </title>
      </Head>
      <main>
        <section className="h-screen w-full 2xl:w-9/12 2xl:mx-auto p-8">
          <div className="h-full flex flex-col justify-center items-center mx-auto w-full md:w-6/12 lg:w-5/12 xl:w-3/12">
            <div className="shadow rounded-2xl dark:bg-slate-800 bg-white w-full pt-4 pb-12 px-6">
              
              <div className="flex justify-between items-center">
                <Link href={'/'}>

                  <img src="/images/logo/algrith-logo-dark-transparent-clean.png" className="dark:hidden h-10" alt="Algrith logo" />
                  <img src="/images/logo/algrith-logo-light-transparent-clean.png" className="hidden dark:block h-10" alt="Algrith logo" />

                </Link>
                <h1 className="text-xl font-medium text-heading px-4 py-2 text-white dark:bg-opacity-50 bg-green-500 shadow-sm rounded-full">
                  Resend Email
                </h1>
              </div>
              
              <form onSubmit={ResendVerificationEmail} className="w-full px-1 mt-8">
                
                <div className="mb-6">
                  <label htmlFor="email" className="w-full text-lg block mb-2">Email address</label>
                  <div className="flex rounded-md shadow-sm mt-3">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      onChange={handleInputChange}
                      defaultValue={verification.email}
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
                  <InputFieldError message={validationError.email} />
                </div>                
                
                {feedback?.resend_verification?.message && <FeedbackDisplay target="resend_verification" />}
                
                <div className="text-xl">
                  <button type="submit" className="w-full py-3 rounded-full text-white dark:bg-opacity-50 bg-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                    </svg>
                    { isLoading ? 'Sending...' : 'Resend' }
                  </button>
                </div>

              </form>
            </div>
          </div>
        </section>
      </main>
    </BareLayout>
  );
};

export default ResendVerification;