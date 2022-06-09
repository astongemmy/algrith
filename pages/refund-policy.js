import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Link from 'next/link'

export default function RefundPolicy() {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1" />
        <title> Refund Policy | Algrith </title>
      </Head>

      <main>
        <section className="text-gray-600">
          <div className="px-8 md:px-14 lg:px-20 xl:px-28 pt-8 md:pt-12 pb-8 mb:pb-24 mx-auto">
            <div className="py-2">
              <h1 className="mb-4 md:mb-8 text-3xl md:text-5xl font-heading font-bold">
                <span className="text-yellow-500 text-lg flex mb-2">Updated on 23th March, 2019</span>
                Refund Policy
              </h1>
              <p className="text-xl leading-relaxed text-justify mb-4 md:mb-12">
                In any occasion, any funds deposited will not be liable for a refund if the initial
                delivery is made and approved, or a change is asked for unless Algrith cancels or
                ends your Contract for a reason other than your breach or non-execution.
                All requests for refund will be as per the following agreement:
              </p>
            </div>
            <div className="flex flex-wrap w-full pb-6 md:pb-12">
              <div className="bg-white leading-relaxed shadow-sm xl:w-9/12 text-xl p-4 md:p-10 text-justify">
                <div className="relative">
                  <ul className="mb-12 pl-5 list-decimal space-y-4">
                    <li>
                      You make a solicitation when the underlying ideas for a package services
                      are provided. However, once you approve or ask for changes in the initial
                      delivery or request additional features, the refund offer will be void and
                      a request for refund will not be entertained.
                      <br />
                      Once the project has been entered in revision phase, the refund offer will be
                      void and a request for refund will not be made. However, we believe in 100%
                      customer satisfaction so we will make corrections till satisfaction.
                      <br />
                      On the off chance that demand for refund is made before the initial delivery
                      due to any of these reasons;
                    </li>
                    <li>
                      <ul className="pl-4 md:pl-8 my-8">
                        <li>
                          No requirements for design filled in the process of order placement.
                        </li>
                        <li>
                          Duplicate orders placed by mistake
                          (in which the client notifies Algrith of such mistake within 48 hours).
                        </li>
                        <li>
                          Then you would qualify for a full refund (less 10% administration and preparing charge).
                        </li>
                      </ul>
                    </li>
                    <li>
                      No request for refund will be entertained after inaction by the customer after 30 days.
                      All refund request should be made to Algrith support (support@algrith.com).
                      Algrith reserves the right to approve/reject any and all refund requests based
                      on an individual case to case premise.
                    </li>
                    <li>
                      No refund will be entertained after the final files have been delivered.
                    </li>
                    <li>
                      For Website bundles, no refund will be made once the initial design mock
                      up has been revised or the inner pages have been created with client's approval.
                      <br />
                      For instance, in the event that you request for a application and website design and approve of
                      the application, you are eligible for the refund of the website service at
                      the time of initial delivery only.
                      <br />
                      A refund request should have a legitimate reason which must be qualified
                      against the outline brief and client input for revisions. Unless an idea
                      has not been composed as per brief, a refund will not be approved also
                      discount won’t be given, however further revisions will be provided until
                      you are satisfied.
                      <br />
                      It is also to be noted that, under any circumstances, both parties
                      (Algrith & Client) agree not to attack/criticize each other and any of
                      its employee, associate/s or partner/s publicly (on public forums, blogs,
                      social networks etc.) at any given time during or subsequent to contract period.
                      Similarly, both parties agree not to talk on forums, blogs, community groups or
                      any social media in a way which brings bad name to either party or any of its
                      employee, associate or partner. In case of breach, the breaching party would
                      have to pay a reasonable compensation decided by the non-breaching party as
                      damages.
                      <br />
                      All orders require client input before finishing the during design which is
                      why it is requested that the customer is active throughout the process and
                      gives feedback in order to get the required results.
                      <br />
                      100% unique design guarantee qualifies you for a custom website or custom web application
                      if the website or web application designed by Algrith is found to be considerably similar
                      to another design that already exists. Any likeness to a current outline will be just a
                      fortuitous event and Algrith won’t acknowledge any responsibility or claim of any compensation
                      in such a case. It is the client’s responsibility to get their artwork Trademarked.
                    </li>
                  </ul>
                  <div className="mb-12">
                    <h1 className="mb-8 text-left text-yellow-500 text-3xl font-heading font-bold">How To Claim Your Refund</h1>
                    <p>
                      To ensure that your refund request is processed effectively and is approved,
                      please make sure that you meet the following requirements.
                      <br />
                      Specify your concern and claim your refund through email at support@algrith.com.
                    </p>
                  </div>
                </div>
              </div>
              <div className="xl:w-3/12 md:mt-0 mt-12 xl:pl-8">
                <div className="">
                  <h2 className="mb-4 text-2xl md:text-3xl font-heading font-bold">
                    Table of Content
                  </h2>
                  <ul className="text-xl md:text-2xl mb-8">
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}