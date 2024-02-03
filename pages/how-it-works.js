import Head from 'next/head';
import React from 'react';

import Layout from '../components/Layout';
import Link from 'next/link';

const HowItWorks = () => {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1" />
        <title> How It Works | Algrith </title>
      </Head>

      <main>
        <section className="text-gray-500 2xl:w-8/12 2xl:mx-auto">
          <div className="px-8 md:px-16 lg:px-28 pt-12 pb-24 mx-auto">
            <div className="text-center py-2">
              <h1 className="mb-8 text-3xl md:text-5xl dark:text-slate-200 font-heading font-bold">
                How it Works
              </h1>
              <p className="leading-relaxed dark:text-slate-300 text-lg md:text-xl md:leading-relaxed mb-12">
                Howdy! You are at the right place. <br/>
                In order to have a comprehensive overview of how we get things done, please follow
                the steps outlined below to know better.
              </p>
            </div>
            <div className="flex flex-wrap w-full">
              <div className="xl:w-3/5 text-xl xl:pr-10 md:py-6">
                <div className="flex relative pb-16">
                  <div className="h-full bg-blue-00 w-12 md:w-32 absolute inset-0 flex items-center justify-center">
                    <div className="h-6 w-6 absolute top-1 z-10 bg-white rounded-full" />
                    <div className="h-8 w-8 absolute top-0 bg-red-500 rounded-full pointer-events-none">
                      <div className="h-full w-full animate-ping border border-red-500 bg-white rounded-full" />
                    </div>
                    <div className="h-full w-1 -translate-x-1/2 left-1/2 absolute bg-red-500 pointer-events-none" />
                    <div className="w-12 h-12 md:h-16 bg-yellow-0 md:w-24 border-red-500 border-t-4 border-l-4 rounded-tl-3xl absolute top-10 left-1/2 pointer-events-none" style={{ borderLeftWidth: '0.25rem'}} />
                  </div>
                  
                  <div className="mt-20 flex-shrink-0 w-12 md:w-32 h-12 md:h-32 rounded-full bg-red-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 md:w-20 h-8 md:h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                  </div>

                  <div className="flex-grow pl-6 md:pl-8">
                    <div className="dark:bg-red-900 dark:bg-opacity-10 bg-red-50 shadow-sm p-8 rounded-3xl">
                      <h2 className="font-bold title-font text-2xl dark:text-red-100 text-gray-900 mb-2 tracking-wider">Step 1</h2>
                      <h2 className="font-bold title-font text-xl text-red-500 mb-4 tracking-wider">Initial Consultation</h2>
                      <p className="leading-relaxed text-lg md:text-xl md:leading-relaxed dark:text-slate-300">
                        {/* Visit our <Link href={'/products'} className="text-red-500">products </Link>  */}
                        Initiate contact with us by providing a concise overview of your business, including relevant links and pages.
                        <br />
                        Expect a prompt response within 2-3 business days from our team.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex relative pb-16">
                  <div className="h-full w-12 md:w-32 absolute right-0 flex items-center justify-center">
                    <div className="mt-28 h-3/4 w-1 bg-yellow-500 pointer-events-none" />
                    <div className="w-12 h-12 md:h-16 md:w-24 border-yellow-500 border-t-4 border-r-4 rounded-tr-3xl absolute top-14 right-6 md:right-16 pointer-events-none" />
                    {/* Bottom pinging dot */}
                    <div className="h-8 w-8 absolute z-10 -bottom-6 bg-yellow-500 rounded-full pointer-events-none">
                      <div className="h-full w-full animate-ping border border-yellow-500 bg-white rounded-full" />
                    </div>
                  </div>

                  <div className="flex-grow pr-6 md:pr-8 text-justify">
                    <div className="dark:bg-yellow-900 dark:bg-opacity-10 bg-yellow-50 shadow-sm p-8 rounded-3xl">
                      <h2 className="font-bold title-font text-2xl dark:text-yellow-100 text-gray-900 mb-2 tracking-wider">Step 2</h2>
                      <h2 className="font-bold title-font text-xl text-yellow-500 mb-4 tracking-wider">Business Discovery Meeting</h2>
                      <p className="leading-relaxed text-lg md:text-xl dark:text-slate-300 md:leading-relaxed">
                        A meeting would be scheduled with our experts to delve into the intricacies of your business. By the meeting's conclusion, we aim to have identified your specific requirements, challenges, and objectives. We will discuss any pre-existing systems, technologies, or processes that may require modification or enhancement. Additionally, budget and timeline considerations will be addressed. Should further clarification be needed, a follow-up meeting will be scheduled.
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
                    <div className="mt-28 h-3/4 w-1 bg-green-500 pointer-events-none" />
                    <div className="w-12 h-12 md:h-16 md:w-24 border-green-500 border-t-4 border-l-4 rounded-tl-3xl absolute top-14 left-6 md:left-16 pointer-events-none" />
                    {/* Bottom pinging dot */}
                    <div className="h-8 w-8 absolute z-10 -bottom-6 bg-green-500 rounded-full pointer-events-none">
                      <div className="h-full w-full animate-ping border border-green-500 bg-white rounded-full" />
                    </div>
                  </div>

                  <div className="mt-20 flex-shrink-0 w-12 md:w-32 h-12 md:h-32 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-20 md:w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>

                  <div className="flex-grow pl-6 md:pl-8 text-justify">
                    <div className="dark:bg-green-900 dark:bg-opacity-10 bg-green-50 shadow-sm p-8 rounded-3xl">
                      <h2 className="font-bold title-font text-2xl dark:text-green-100 text-gray-900 mb-2 tracking-wider">Step 3</h2>
                      <h2 className="font-bold title-font text-xl text-green-500 mb-4 tracking-wider">Contract Proposal and Acceptance</h2>
                      <p className="leading-relaxed dark:text-slate-300 text-lg md:text-xl md:leading-relaxed">
                        Following our understanding of your needs, we will present a comprehensive contract outlining the project proposal.
                        This document will detail the scope, timeline, cost estimates, deliverables, and acceptance criteria. Subsequently, we will organize a follow-up meeting to negotiate terms and finalize the contractual agreement.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex relative pb-16">
                  <div className="h-full w-12 md:w-32 absolute right-0 flex items-center justify-center">
                    <div className="mt-28 h-3/4 w-1 bg-blue-500 pointer-events-none" />
                    <div className="w-12 h-12 md:h-16 md:w-24 border-blue-500 border-t-4 border-r-4 rounded-tr-3xl absolute top-14 right-6 md:right-16 pointer-events-none" />
                    {/* Bottom pinging dot */}
                    <div className="h-8 w-8 absolute z-10 -bottom-6 bg-blue-500 rounded-full pointer-events-none">
                      <div className="h-full w-full animate-ping border border-blue-500 bg-white rounded-full" />
                    </div>
                  </div>

                  <div className="flex-grow pr-6 md:pr-8 text-justify">
                    <div className="dark:bg-blue-900 dark:bg-opacity-10 bg-blue-50 shadow-sm p-8 rounded-3xl">
                      <h2 className="font-bold title-font text-2xl dark:text-blue-100 text-gray-900 mb-2 tracking-wider">Step 4</h2>
                      <h2 className="font-bold title-font text-xl text-blue-500 mb-4 tracking-wider">Development and Testing</h2>
                      <p className="leading-relaxed dark:text-slate-300 text-lg md:text-xl md:leading-relaxed">
                        Leveraging our expertise, we will commence development, ensuring code quality and strict adherence to coding standards. Our testing phase will encompass unit testing to verify individual component functionality, integration testing to ensure seamless module interaction, and system testing to validate compliance with specified requirements.
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
                    <div className="mt-28 h-3/4 w-1 bg-pink-500 pointer-events-none" />
                    <div className="w-12 h-12 md:h-16 md:w-24 border-pink-500 border-t-4 border-l-4 rounded-tl-3xl absolute top-14 left-6 md:left-16 pointer-events-none" />
                    {/* Bottom pinging dot */}
                    <div className="h-8 w-8 absolute z-10 -bottom-6 bg-pink-500 rounded-full pointer-events-none">
                      <div className="h-full w-full animate-ping border border-pink-500 bg-white rounded-full" />
                    </div>
                  </div>

                  <div className="mt-20 flex-shrink-0 w-12 md:w-32 h-12 md:h-32 rounded-full bg-pink-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-20 md:w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  
                  <div className="flex-grow pl-6 md:pl-8 text-justify">
                    <div className="dark:bg-pink-900 dark:bg-opacity-10 bg-pink-50 shadow-sm p-8 rounded-3xl">
                      <h2 className="font-bold title-font text-2xl dark:text-pink-100 text-gray-900 mb-2 tracking-wider">Step 5</h2>
                      <h2 className="font-bold title-font text-xl text-pink-500 mb-4 tracking-wider">Quality Assurance (QA) and Issue Resolution</h2>
                      <p className="leading-relaxed dark:text-slate-300 text-lg md:text-xl md:leading-relaxed">
                        Our dedicated QA team will meticulously identify and rectify any bugs or issues discovered during testing. Rigorous QA procedures will be undertaken to guarantee that the software attains the highest quality standards.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex relative pb-16">
                  <div className="h-full w-12 md:w-32 absolute right-0 flex items-center justify-center">
                    <div className="mt-28 h-3/4 w-1 bg-teal-500 pointer-events-none" />
                    <div className="w-12 h-12 md:h-16 md:w-24 border-teal-500 border-t-4 border-r-4 rounded-tr-3xl absolute top-14 right-6 md:right-16 pointer-events-none" />
                    {/* Bottom pinging dot */}
                    <div className="h-8 w-8 absolute z-10 -bottom-6 bg-teal-500 rounded-full pointer-events-none">
                      <div className="h-full w-full animate-ping border border-teal-500 bg-white rounded-full" />
                    </div>
                  </div>

                  <div className="flex-grow pr-6 md:pr-8 text-justify">
                    <div className="dark:bg-teal-900 dark:bg-opacity-10 bg-teal-50 shadow-sm p-8 rounded-3xl">
                      <h2 className="font-bold title-font text-2xl dark:text-teal-100 text-gray-900 mb-2 tracking-wider">Step 6</h2>
                      <h2 className="font-bold title-font text-xl text-teal-500 mb-4 tracking-wider">Deployment Preparation</h2>
                      <p className="leading-relaxed dark:text-slate-300 text-lg md:text-xl md:leading-relaxed">
                        We will prepare the software for seamless deployment in your environment, accompanied by comprehensive documentation to facilitate a smooth transition.
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

                  <div className="flex-grow pl-6 md:pl-8 text-justify">
                    <div className="dark:bg-rose-900 dark:bg-opacity-10 bg-rose-50 shadow-sm p-8 rounded-3xl">
                      <h2 className="font-bold title-font text-2xl dark:text-rose-100 text-gray-900 mb-2 tracking-wider">Step 7</h2>
                      <h2 className="font-bold title-font text-xl text-rose-500 mb-4 tracking-wider">Training and Support(on-demand)</h2>
                      <p className="leading-relaxed dark:text-slate-300 text-lg md:text-xl md:leading-relaxed">
                       Our commitment extends beyond deployment, as we may conduct thorough training sessions for your team on software usage and maintenance if needed. Throughout the agreed-upon support period, we will remain accessible to address any queries or issues that may arise.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mb-6">
                  <h2 className="mb-4 dark:text-dark-mode-senary text-lg md:text-xl font-heading font-bold">
                    Congratulations! You can now get started
                  </h2>
                  <p className="leading-relaxed dark:text-dark-mode-senary text-lg md:text-xl md:leading-relaxed mb-12">
                    Please note that while this represents an idealized workflow, adjustments may be made based on the unique industry and services involved, such as the integration technologies like Artificial Intelligence.
                  </p>
                  <Link
                    className="rounded-xl px-6 py-4 text-white text-lg bg-theme-primary hover:bg-green-500 font-semibold"
                    href={'/contact-us'}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
              
              <div className="xl:w-2/5 md:mt-0 mt-12 xl:pl-8 dark:text-dark-mode-senary">
                <div className="pt-6">
                  <h2 className="mb-4 text-2xl dark:text-theme-primary font-heading font-bold">
                    Our Aim
                  </h2>
                  <p className="leading-relaxed text-lg md:text-xl md:leading-relaxed mb-8">
                    No matter what your ideas are, no matter the imaginations and desires you hold inside,
                    once you initiate this process with us, we will ensure to polish your ideas into
                    satisfactory output that will project your brand steps ahead of the competition.
                  </p>
                  <img className="filter dark:brightness-75 object-cover object-center rounded-lg md:mt-0 mt-12" src="/images/illustrations/web-development-process.gif" alt="steps_illustration" />
                </div>
                <div className="pt-12">
                  <h2 className="mb-4 text-2xl dark:text-theme-primary font-heading font-bold">
                    Excellent Pricing
                  </h2>
                  <p className="leading-relaxed text-lg md:text-xl md:leading-relaxed mb-8">
                    We believe that quality and satisfactory product delivery which meets the needs
                    of our client could be possible even with the cheapest of budget.
                    Our plans are easy to afford and our delivery is more than commensurate.
                  </p>
                  <img className="filter dark:brightness-75 object-cover object-center rounded-lg md:mt-0 mt-12" src="/images/illustrations/payment-terminal.gif" alt="pricing_illustration" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default HowItWorks