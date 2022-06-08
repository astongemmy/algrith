import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'

export default function HowItWorks() {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1" />
        <title> How It Works | Algrith </title>
      </Head>

      <main>
        <section className="text-gray-600 body-font">
          <div className="px-8 md:px-16 lg:px-28 py-24 mx-auto flex flex-wrap">
            <div className="flex flex-wrap w-full">
              <div className="xl:w-3/5 text-xl xl:pr-10 md:py-6">
                <div className="flex relative pb-16">
                  <div className="h-full w-32 absolute inset-0 flex items-center justify-center">
                    <div className="h-8 w-8 absolute top-0 bg-green-200 rounded-full pointer-events-none" />
                    <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                    <div className="h-16 w-24 border-t-4 border-l-4 rounded-tl-3xl absolute top-14 left-16 pointer-events-none" />
                  </div>
                  <div className="mt-20 flex-shrink-0 w-32 h-32 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-24 h-24" viewBox="0 0 24 24">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div className="flex-grow pl-8">
                    <div className="bg-white shadow-sm p-8 rounded-3xl">
                      <h2 className="font-medium title-font text-4xl text-gray-900 mb-4 tracking-wider">STEP 1</h2>
                      <p className="leading-relaxed text-2xl">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                    </div>
                  </div>
                </div>
                <div className="flex relative pb-16">
                  <div className="h-full w-32 absolute right-0 flex items-center justify-center">
                    <div className="mt-40 h-full w-1 bg-gray-200 pointer-events-none" />
                    <div className="h-16 w-24 border-t-4 border-r-4 rounded-tr-3xl absolute top-14 right-16 pointer-events-none" />
                  </div>
                  <div className="flex-grow pr-8 text-right">
                    <div className="bg-white shadow-sm p-8 rounded-3xl">
                      <h2 className="font-medium title-font text-4xl text-gray-900 mb-4 tracking-wider">STEP 2</h2>
                      <p className="leading-relaxed text-2xl">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                    </div>
                  </div>
                  <div className="mt-20 flex-shrink-0 w-32 h-32 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-24 h-24" viewBox="0 0 24 24">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </div>
                </div>
                <div className="flex relative pb-16">
                  <div className="h-full w-32 absolute inset-0 flex items-center justify-center">
                    <div className="mt-40 h-full w-1 bg-gray-200 pointer-events-none" />
                    <div className="h-16 w-24 border-t-4 border-l-4 rounded-tl-3xl absolute top-14 left-16 pointer-events-none" />
                  </div>
                  <div className="mt-20 flex-shrink-0 w-32 h-32 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-24 h-24" viewBox="0 0 24 24">
                      <circle cx={12} cy={5} r={3} />
                      <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
                    </svg>
                  </div>
                  <div className="flex-grow pl-8">
                    <div className="bg-white shadow-sm p-8 rounded-3xl">
                      <h2 className="font-medium title-font text-4xl text-gray-900 mb-4 tracking-wider">STEP 3</h2>
                      <p className="leading-relaxed text-2xl">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                    </div>
                  </div>
                </div>
                <div className="flex relative pb-16">
                  <div className="h-full w-32 absolute right-0 flex items-center justify-center">
                    <div className="mt-40 h-full w-1 bg-gray-200 pointer-events-none" />
                    <div className="h-16 w-24 border-t-4 border-r-4 rounded-tr-3xl absolute top-14 right-16 pointer-events-none" />
                  </div>
                  <div className="flex-grow pr-8 text-right">
                    <div className="bg-white shadow-sm p-8 rounded-3xl">
                      <h2 className="font-medium title-font text-4xl text-gray-900 mb-4 tracking-wider">STEP 4</h2>
                      <p className="leading-relaxed text-2xl">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                    </div>
                  </div>
                  <div className="mt-20 flex-shrink-0 w-32 h-32 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-24 h-24" viewBox="0 0 24 24">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                      <circle cx={12} cy={7} r={4} />
                    </svg>
                  </div>
                </div>
                <div className="flex relative pb-16">
                  <div className="h-full w-32 absolute flex items-center justify-center">
                    <div className="h-16 w-24 border-t-4 border-l-4 rounded-tl-3xl absolute top-14 left-16 pointer-events-none" />
                  </div>
                  <div className="mt-20 flex-shrink-0 w-32 h-32 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-24 h-24" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                      <path d="M22 4L12 14.01l-3-3" />
                    </svg>
                  </div>
                  <div className="flex-grow pl-8">
                    <div className="bg-white shadow-sm p-8 rounded-3xl">
                      <h2 className="font-medium title-font text-4xl text-gray-900 mb-4 tracking-wider">STEP 5</h2>
                      <p className="leading-relaxed text-2xl">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                    </div>
                  </div>
                </div>
              </div>
              <img className="xl:w-2/5 object-cover object-center rounded-lg md:mt-0 mt-12" src="https://dummyimage.com/1200x500" alt="step" />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}