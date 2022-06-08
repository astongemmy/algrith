import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Link from 'next/link'

export default function HowItWorks() {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1" />
        <title> How It Works | Algrith </title>
      </Head>

      <main>
        <section className="text-gray-600">
          <div className="px-8 md:px-16 lg:px-28 pt-12 pb-24 mx-auto">
            <div className="text-center py-2">
              <h1 className="mb-8 text-3xl md:text-5xl font-heading font-bold">
                How it Works
              </h1>
              <p className="text-xl md:text-2xl mb-12">
                Howdy! You are at the right place. <br/>
                In order to have a comprehensive overview of how we get things done, please follow
                the steps outlined below to know better.
              </p>
            </div>
            <div className="flex flex-wrap w-full">
              <div className="xl:w-3/5 text-xl xl:pr-10 md:py-6">
                <div className="flex relative pb-16">
                  <div className="h-full w-12 md:w-32 absolute inset-0 flex items-center justify-center">
                    <div className="h-8 w-8 absolute top-0 bg-red-500 rounded-full pointer-events-none">
                      <div className="h-full w-full animate-ping bg-red-500 rounded-full" />
                    </div>
                    <div className="h-full w-1 bg-red-500 pointer-events-none" />
                    <div className="w-12 h-12 md:h-16 md:w-24 border-red-500 border-t-4 border-l-4 rounded-tl-3xl absolute top-14 left-6 md:left-16 pointer-events-none" />
                  </div>
                  <div className="mt-20 flex-shrink-0 w-12 md:w-32 h-12 md:h-32 rounded-full bg-red-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-8 md:w-24 h-8 md:h-24" viewBox="0 0 24 24">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div className="flex-grow pl-6 md:pl-8">
                    <div className="bg-white shadow-sm p-8 rounded-3xl">
                      <h2 className="font-bold title-font text-2xl md:text-4xl text-gray-900 mb-4 tracking-wider">Step 1</h2>
                      <p className="leading-relaxed text-lx md:text-2xl">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                    </div>
                  </div>
                </div>
                <div className="flex relative pb-16">
                  <div className="h-full w-12 md:w-32 absolute right-0 flex items-center justify-center">
                    <div className="mt-40 h-full w-1 bg-yellow-500 pointer-events-none" />
                    <div className="w-12 h-12 md:h-16 md:w-24 border-yellow-500 border-t-4 border-r-4 rounded-tr-3xl absolute top-14 right-6 md:right-16 pointer-events-none" />
                  </div>
                  <div className="flex-grow pr-6 md:pr-8 text-right">
                    <div className="bg-white shadow-sm p-8 rounded-3xl">
                      <h2 className="font-bold title-font text-2xl md:text-4xl text-gray-900 mb-4 tracking-wider">Step 2</h2>
                      <p className="leading-relaxed text-xl md:text-2xl">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                    </div>
                  </div>
                  <div className="mt-20 flex-shrink-0 w-12 md:w-32 h-12 md:h-32 rounded-full bg-yellow-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-8 h-8 md:w-24 md:h-24" viewBox="0 0 24 24">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </div>
                </div>
                <div className="flex relative pb-16">
                  <div className="h-full w-12 md:w-32 absolute inset-0 flex items-center justify-center">
                    <div className="mt-40 h-full w-1 bg-green-500 pointer-events-none" />
                    <div className="w-12 h-12 md:h-16 md:w-24 border-green-500 border-t-4 border-l-4 rounded-tl-3xl absolute top-14 left-6 md:left-16 pointer-events-none" />
                  </div>
                  <div className="mt-20 flex-shrink-0 w-12 md:w-32 h-12 md:h-32 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-8 h-8 md:w-24 md:h-24" viewBox="0 0 24 24">
                      <circle cx={12} cy={5} r={3} />
                      <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
                    </svg>
                  </div>
                  <div className="flex-grow pl-6 md:pl-8">
                    <div className="bg-white shadow-sm p-8 rounded-3xl">
                      <h2 className="font-bold title-font text-2xl md:text-4xl text-gray-900 mb-4 tracking-wider">Step 3</h2>
                      <p className="leading-relaxed text-xl md:text-2xl">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                    </div>
                  </div>
                </div>
                <div className="flex relative pb-16">
                  <div className="h-full w-12 md:w-32 absolute right-0 flex items-center justify-center">
                    <div className="mt-40 h-full w-1 bg-blue-500 pointer-events-none" />
                    <div className="w-12 h-12 md:h-16 md:w-24 border-blue-500 border-t-4 border-r-4 rounded-tr-3xl absolute top-14 right-6 md:right-16 pointer-events-none" />
                  </div>
                  <div className="flex-grow pr-6 md:pr-8 text-right">
                    <div className="bg-white shadow-sm p-8 rounded-3xl">
                      <h2 className="font-bold title-font text-2xl md:text-4xl text-gray-900 mb-4 tracking-wider">Step 4</h2>
                      <p className="leading-relaxed text-xl md:text-2xl">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                    </div>
                  </div>
                  <div className="mt-20 flex-shrink-0 w-12 md:w-32 h-12 md:h-32 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-8 h-8 md:w-24 md:h-24" viewBox="0 0 24 24">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                      <circle cx={12} cy={7} r={4} />
                    </svg>
                  </div>
                </div>
                <div className="flex relative pb-16">
                  <div className="h-full w-12 md:w-32 absolute flex items-center justify-center">
                    <div className="w-12 h-12 md:h-16 md:w-24 border-slate-500 border-t-4 border-l-4 rounded-tl-3xl absolute top-14 left-6 md:left-16 pointer-events-none" />
                  </div>
                  <div className="mt-20 flex-shrink-0 w-12 md:w-32 h-12 md:h-32 rounded-full bg-slate-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-8 h-8 md:w-24 md:h-24" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                      <path d="M22 4L12 14.01l-3-3" />
                    </svg>
                  </div>
                  <div className="flex-grow pl-6 md:pl-8">
                    <div className="bg-white shadow-sm p-8 rounded-3xl">
                      <h2 className="font-bold title-font text-2xl md:text-4xl text-gray-900 mb-4 tracking-wider">Step 5</h2>
                      <p className="leading-relaxed text-xl md:text-2xl">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                    </div>
                  </div>
                </div>
                <div className="pt-6 mb-6">
                  <h2 className="mb-4 text-xl md:text-3xl font-heading font-bold">
                    Congratulations! You can now get started with a product
                  </h2>
                  <p className="text-xl md:text-2xl mb-12">
                    Select a product package from our store and submit your requirements and we will take over from there.
                  </p>
                  <Link href={'/products'}>
                    <a className="bg-white border-2 border-green-500 rounded-xl px-6 md:px-12 py-4 md:py-6 text-green-500 text-2xl">
                      Get Started
                    </a>
                  </Link>
                </div>
              </div>
              <div className="xl:w-2/5 md:mt-0 mt-12 xl:pl-8">
                <div className="pt-6">
                  <h2 className="mb-4 text-2xl md:text-3xl font-heading font-bold">
                    Our Aim
                  </h2>
                  <p className="text-xl md:text-2xl mb-8">
                    No matter what your ideas are, no matter the imaginations and desires you hold inside,
                    once you initiate this process with us, we will ensure to polish your ideas into
                    satisfactory output that will project your brand steps ahead of the competition.
                  </p>
                  <img className="object-cover object-center rounded-lg md:mt-0 mt-12" src="/images/how-it-works/web-development-process.gif" alt="step" />
                </div>
                <div className="pt-12">
                  <h2 className="mb-4 text-2xl md:text-3xl font-heading font-bold">
                    Excellent Pricing
                  </h2>
                  <p className="text-xl md:text-2xl mb-8">
                    We believe that quality and satisfactory product delivery which meets the needs
                    of our client could be possible even with the cheapest of budget.
                    Our plans are easy to afford and our delivery is more than commensurate.
                  </p>
                  <img className="object-cover object-center rounded-lg md:mt-0 mt-12" src="/images/how-it-works/payment-terminal.gif" alt="Pricing plan illustration" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}