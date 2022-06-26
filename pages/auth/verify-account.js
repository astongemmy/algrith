import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import BareLayout from '../../components/BareLayoutout'
import apiClient from '../../apiClient/authuth'
import ResponseFeedbackDisplay from '../../components/ResponseFeedbackDisplaylay'
import useHasAnyFalsyField from '../../hooks/useHasAnyFalsyFieldeld'


export default function VerifyAccount() {
  const router = useRouter()
  const { verifyUser } = apiClient()
  const { hasAnyFalsyField } = useHasAnyFalsyField()
  const [response, setResponse] = useState({ message: '', type: '' })
  
  const VerifyUser = async () => {
    const { id, token } = router.query
    if (hasAnyFalsyField({ id, token })) {
      return setResponse({ message: 'Invalid URL. Can not process verification request.', type: 'warning' })
    }
    setResponse({ message: 'Processing verification request...', type: 'pending' })
    const { status, message } = await verifyUser({ id, token })
    if (status) {
      setResponse({ message, type: 'success' })
    } else {
      setResponse({ message, type: 'error' })
    }
  }
  useEffect(() => { if (router.isReady) VerifyUser() }, [router])

  return (
    <BareLayout>
      <Head>
        <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1" />
        <title> Verify Account | Algrith </title>
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
                <h1 className="text-xl font-medium text-heading px-4 py-2 text-white dark:bg-opacity-50 bg-green-500 shadow-sm rounded-full">Verify Account</h1>
              </div>
              <div className="w-full px-1 mt-8">
                <ResponseFeedbackDisplay payload={response} clear={false} />
              </div>
              {response.type == 'success' && <p className="text-xl text-center mt-4">
                  Verification successful! 
                  <Link href={'/auth/login'}>
                    <a className="block dark:text-green-300 text-black font-bold tracking-wider">Login now</a>
                  </Link>
                </p>
              }
              {response.type == 'error' && <p className="text-xl text-center mt-4">
                  You should consider restarting verification process.
                  <Link href={'/auth/resend-verification'}>
                    <a className="block dark:text-green-300 text-green-500 tracking-wider">Resend email</a>
                  </Link>
                </p>
              }
            </div>
          </div>
        </section>
      </main>
    </BareLayout>
  )
}