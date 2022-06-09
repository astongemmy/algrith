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
              <p className="leading-relaxed text-xl md:leading-relaxed md:text-2xl mb-12">
                Howdy! You are at the right place. <br/>
                In order to have a comprehensive overview of how we get things done, please follow
                the steps outlined below to know better.
              </p>
            </div>
            <div className="flex flex-wrap w-full">
              <div className="xl:w-3/5 text-xl xl:pr-10 md:py-6">
                <div className="flex relative pb-16">
                  <div className="h-full w-12 md:w-32 absolute inset-0 flex items-center justify-center">
                    <div className="h-6 w-6 absolute top-1 z-10 bg-white rounded-full" />
                    <div className="h-8 w-8 absolute top-0 bg-red-500 rounded-full pointer-events-none">
                      <div className="h-full w-full animate-ping border border-red-500 bg-white rounded-full" />
                    </div>
                    <div className="h-full w-1 bg-red-500 pointer-events-none" />
                    <div className="w-12 h-12 md:h-16 md:w-24 border-red-500 border-t-4 border-l-4 rounded-tl-3xl absolute top-14 left-6 md:left-16 pointer-events-none" />
                  </div>
                  <div className="mt-20 flex-shrink-0 w-12 md:w-32 h-12 md:h-32 rounded-full bg-red-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 md:w-20 h-8 md:h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                  </div>
                  <div className="flex-grow pl-6 md:pl-8">
                    <div className="bg-red-50 shadow-sm p-8 rounded-3xl">
                      <h2 className="font-bold title-font text-2xl md:text-4xl text-gray-900 mb-2 tracking-wider">Step 1</h2>
                      <h2 className="font-bold title-font text-2xl text-red-500 mb-4 tracking-wider">Select a Product</h2>
                      <p className="leading-relaxed text-lx md:leading-relaxed md:text-2xl">
                        Visit our <Link href={'/products'}><a className="text-blue-500">products </a></Link> 
                        store and select a product that fits your demand exactly.
                        We have products covering website alongside its underlying web applications to power business demands.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex relative pb-16">
                  <div className="h-full w-12 md:w-32 absolute right-0 flex items-center justify-center">
                    <div className="mt-40 h-full w-1 bg-yellow-500 pointer-events-none" />
                    <div className="w-12 h-12 md:h-16 md:w-24 border-yellow-500 border-t-4 border-r-4 rounded-tr-3xl absolute top-14 right-6 md:right-16 pointer-events-none" />
                  </div>
                  <div className="flex-grow pr-6 md:pr-8 text-right">
                    <div className="bg-yellow-50 shadow-sm p-8 rounded-3xl">
                      <h2 className="font-bold title-font text-2xl md:text-4xl text-gray-900 mb-2 tracking-wider">Step 2</h2>
                      <h2 className="font-bold title-font text-2xl text-yellow-500 mb-4 tracking-wider">Choose a Package</h2>
                      <p className="leading-relaxed text-xl md:leading-relaxed md:text-2xl">
                        Our product display shelf is rich with amazing packages and 
                        you can choose from a minimum of three packages from any of our product shelves.
                      </p>
                    </div>
                  </div>
                  <div className="mt-20 flex-shrink-0 w-12 md:w-32 h-12 md:h-32 rounded-full bg-yellow-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:w-20 md:h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                </div>
                <div className="flex relative pb-16">
                  <div className="h-full w-12 md:w-32 absolute inset-0 flex items-center justify-center">
                    <div className="mt-40 h-full w-1 bg-green-500 pointer-events-none" />
                    <div className="w-12 h-12 md:h-16 md:w-24 border-green-500 border-t-4 border-l-4 rounded-tl-3xl absolute top-14 left-6 md:left-16 pointer-events-none" />
                  </div>
                  <div className="mt-20 flex-shrink-0 w-12 md:w-32 h-12 md:h-32 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-20 md:w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div className="flex-grow pl-6 md:pl-8">
                    <div className="bg-green-50 shadow-sm p-8 rounded-3xl">
                      <h2 className="font-bold title-font text-2xl md:text-4xl text-gray-900 mb-2 tracking-wider">Step 3</h2>
                      <h2 className="font-bold title-font text-2xl text-green-500 mb-4 tracking-wider">Fill in your Requirements</h2>
                      <p className="leading-relaxed text-xl md:leading-relaxed md:text-2xl">
                        For any package selected, there are a list of requirements with which you can specify how
                        you want your package delivered. Utilize this feature to get exactly what you desire.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex relative pb-16">
                  <div className="h-full w-12 md:w-32 absolute right-0 flex items-center justify-center">
                    <div className="mt-40 h-full w-1 bg-blue-500 pointer-events-none" />
                    <div className="w-12 h-12 md:h-16 md:w-24 border-blue-500 border-t-4 border-r-4 rounded-tr-3xl absolute top-14 right-6 md:right-16 pointer-events-none" />
                  </div>
                  <div className="flex-grow pr-6 md:pr-8 text-right">
                    <div className="bg-blue-50 shadow-sm p-8 rounded-3xl">
                      <h2 className="font-bold title-font text-2xl md:text-4xl text-gray-900 mb-2 tracking-wider">Step 4</h2>
                      <h2 className="font-bold title-font text-2xl text-blue-500 mb-4 tracking-wider">Proceed to Checkout</h2>
                      <p className="leading-relaxed text-xl md:leading-relaxed md:text-2xl">
                        Once you are satisfied with selecting and filling in requirements for a package, proceed to 
                        checkout in order to make payment.
                      </p>
                    </div>
                  </div>
                  <div className="mt-20 flex-shrink-0 w-12 md:w-32 h-12 md:h-32 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-20 md:w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="flex relative pb-16">
                  <div className="h-full w-12 md:w-32 absolute inset-0 flex items-center justify-center">
                    <div className="mt-40 h-full w-1 bg-pink-500 pointer-events-none" />
                    <div className="w-12 h-12 md:h-16 md:w-24 border-pink-500 border-t-4 border-l-4 rounded-tl-3xl absolute top-14 left-6 md:left-16 pointer-events-none" />
                  </div>
                  <div className="mt-20 flex-shrink-0 w-12 md:w-32 h-12 md:h-32 rounded-full bg-pink-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-20 md:w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-grow pl-6 md:pl-8">
                    <div className="bg-pink-50 shadow-sm p-8 rounded-3xl">
                      <h2 className="font-bold title-font text-2xl md:text-4xl text-gray-900 mb-2 tracking-wider">Step 5</h2>
                      <h2 className="font-bold title-font text-2xl text-pink-500 mb-4 tracking-wider">Product design and Creation</h2>
                      <p className="leading-relaxed text-xl md:leading-relaxed md:text-2xl">
                        This is the part where you head back to focus on your business while
                        we transform your request into a perfect result with reference to your requirements.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex relative pb-16">
                  <div className="h-full w-12 md:w-32 absolute right-0 flex items-center justify-center">
                    <div className="mt-40 h-full w-1 bg-teal-500 pointer-events-none" />
                    <div className="w-12 h-12 md:h-16 md:w-24 border-teal-500 border-t-4 border-r-4 rounded-tr-3xl absolute top-14 right-6 md:right-16 pointer-events-none" />
                  </div>
                  <div className="flex-grow pr-6 md:pr-8 text-right">
                    <div className="bg-teal-50 shadow-sm p-8 rounded-3xl">
                      <h2 className="font-bold title-font text-2xl md:text-4xl text-gray-900 mb-2 tracking-wider">Step 6</h2>
                      <h2 className="font-bold title-font text-2xl text-teal-500 mb-4 tracking-wider">Delivery and Completion</h2>
                      <p className="leading-relaxed text-xl md:leading-relaxed md:text-2xl">
                        By now you would have received a delivery of your package and can indicate satisfaction
                        by acknowledging the order as completed.
                      </p>
                    </div>
                  </div>
                  <div className="mt-20 flex-shrink-0 w-12 md:w-32 h-12 md:h-32 rounded-full bg-teal-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-20 md:w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                </div>
                <div className="flex relative pb-16">
                  <div className="h-full w-12 md:w-32 absolute flex items-center justify-center">
                    <div className="w-12 h-12 md:h-16 md:w-24 border-rose-500 border-t-4 border-l-4 rounded-tl-3xl absolute top-14 left-6 md:left-16 pointer-events-none" />
                  </div>
                  <div className="mt-20 flex-shrink-0 w-12 md:w-32 h-12 md:h-32 rounded-full bg-rose-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-20 md:w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                    {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-8 h-8 md:w-24 md:h-24" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                      <path d="M22 4L12 14.01l-3-3" />
                    </svg> */}
                  </div>
                  <div className="flex-grow pl-6 md:pl-8">
                    <div className="bg-rose-50 shadow-sm p-8 rounded-3xl">
                      <h2 className="font-bold title-font text-2xl md:text-4xl text-gray-900 mb-2 tracking-wider">Step 7</h2>
                      <h2 className="font-bold title-font text-2xl text-rose-500 mb-4 tracking-wider">Support Us with a Review</h2>
                      <p className="leading-relaxed text-xl md:leading-relaxed md:text-2xl">
                        On order delivery, we would like you to give us a feedback on how the whole process
                        happened. This helps spread the new about our competence and character as a business.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-6 mb-6">
                  <h2 className="mb-4 text-xl md:text-3xl font-heading font-bold">
                    Congratulations! You can now get started with a product
                  </h2>
                  <p className="leading-relaxed text-xl md:leading-relaxed md:text-2xl mb-12">
                    Select a product package from our store and submit your requirements and we will take over from there.
                  </p>
                  <Link href={'/products'}>
                    <a
                      className="rounded-xl px-6 md:px-12 py-4 md:py-6 text-white text-2xl
                        bg-teal-500 hover:bg-teal-700 focus:bg-teal-400
                        border-teal-500 hover:border-teal-700 focus:border-teal-400
                      "
                    >
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
                  <p className="leading-relaxed text-xl md:leading-relaxed md:text-2xl mb-8">
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
                  <p className="leading-relaxed text-xl md:leading-relaxed md:text-2xl mb-8">
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