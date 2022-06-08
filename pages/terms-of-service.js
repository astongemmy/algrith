import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Link from 'next/link'

export default function TermsOfService() {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1" />
        <title> Terms of Service | Algrith </title>
      </Head>

      <main>
        <section className="text-gray-600">
          <div className="px-8 md:px-16 lg:px-28 pt-8 md:pt-12 pb-24 mx-auto">
            <div className="py-2">
              <h1 className="mb-4 md:mb-8 text-3xl md:text-5xl font-heading font-bold">
                <span className="text-pink-500 text-lg flex mb-2">Updated on 5th June, 2022</span>
                Terms of Service
              </h1>
              <p className="text-xl md:text-2xl mb-4 md:mb-12">
                Howdy! You are at the right place. <br />
                In order to have a comprehensive overview of how we get things done, please follow
                the steps outlined below to know better.
              </p>
            </div>
            <div className="flex flex-wrap w-full">
              <div className="bg-white xl:w-9/12 text-xl p-4 md:p-10 text-justify">
                <div className="relative pb-16">
                  <p className="mb-12">
                    These Terms and Conditions ("Terms", "Terms and Conditions") govern your
                    relationship with/activities on https://algrith.com (the "Service") website operated by
                    Algrith LLC ("us", "we", or "our").
                    Please read these Terms and Conditions carefully before using the Service.
                    Your access to and use of the Service is conditioned on your acceptance of and compliance
                    with these Terms. These Terms apply to all visitors, users and others who access or use the Service.
                    By accessing or using the Service you agree to be bound by these Terms. If you disagree
                    with any part of the terms then you may not access the Service.
                    Algrith.com may revise these Terms and Conditions at any time by updating
                    the content of this page. You should visit this page periodically to review the
                    Terms and Conditions, because they are binding on you. In these Terms and Conditions,
                    Algrith.com, the 'Algrith' service, all services related to it, and all text,
                    images, photographs, user interface, "look" and "feel", data and other content
                    included in it from time to time (including, without limitation, the selection,
                    coordination and arrangement of such content) are
                    referred to as the "Web Site" or "Service".
                  </p>

                  <div className="mb-12">
                    <h1 className="mb-8 text-3xl font-heading font-bold">Purchase</h1>
                    <p>
                      If you wish to purchase any product or service made available through the Service
                      ("Purchase"), you may be asked to supply certain information relevant to your Purchase
                      including, without limitation, your credit card number, the expiration date of your credit
                      card, your billing address, and your shipping information.
                      You represent and warrant that:
                    </p>
                    <ul className="pl-8 my-8">
                      <li>
                        (i) you have the legal right to use any credit card(s) or
                        other payment method(s) in connection with any Purchase; and that
                      </li>
                      <li>
                        (ii) the information you supply to us is true, correct and complete.
                      </li>
                    </ul>
                    <p>
                      By submitting such information, you grant us the right to provide the information to third
                      parties for purposes of facilitating the completion of Orders.
                      We reserve the right to refuse or cancel your order at any time for certain reasons including
                      but not limited to: product or service availability, errors in the description or price of the
                      product or service, error in your order or other reasons.
                      We reserve the right to refuse or cancel your order if fraud or an unauthorised or illegal
                      transaction is suspected
                    </p>
                  </div>

                  <div className="mb-12">
                    <h1 className="mb-8 text-3xl font-heading font-bold">Availability, Errors and Inaccuracies</h1>
                    <p>
                      We are constantly updating our offerings of products and services on the Service. The
                      products or services available on our Service may be mispriced, described inaccurately, or
                      unavailable, and we may experience delays in updating information on the Service and in
                      our advertising on other web sites.
                      We cannot and do not guarantee the accuracy or completeness of any information, including
                      prices, product images, specifications, availability, and services. We reserve the right to
                      change or update information and to correct errors, inaccuracies, or omissions at any time
                      without prior notice.
                    </p>
                  </div>

                  <div className="mb-12">
                    <h1 className="mb-8 text-3xl font-heading font-bold">Content</h1>
                    <p>
                      Our Service allows you to post, link, store, share and otherwise make available certain
                      information, text, graphics, videos, or other material ("Content"). You are responsible for
                      the Content that you post to the Service, including its legality, reliability, and
                      appropriateness.
                      You retain any and all of your rights to any Content you submit, post or display on or
                      through the Service and you are responsible for protecting those rights.
                      You represent and warrant that:
                    </p>
                    <ul className="pl-8 my-8">
                      <li>
                        (i) the Content is yours (you own it) or you have the right
                        to use it and grant us the rights and license as provided in these Terms, and
                      </li>
                      <li>
                        (ii) the posting of your Content on or through the Service does not violate the
                        privacy rights, publicity rights, copyrights, contract rights
                        or any other rights of any person.
                      </li>
                    </ul>
                  </div>

                  <div className="mb-12">
                    <h1 className="mb-8 text-3xl font-heading font-bold">Accounts</h1>
                    <p>
                      When you create an account with us, you must provide us information that is accurate,
                      complete, and current at all times. Failure to do so constitutes a breach of the Terms, which
                      may result in immediate termination of your account on our Service.
                      You are responsible for safeguarding the password that you use to access the Service and
                      for any activities or actions under your password, whether your password is with our
                      Service or a third-party service.
                      You agree not to disclose your password to any third party. You must notify us immediately
                      upon becoming aware of any breach of security or unauthorized use of your account.
                    </p>
                  </div>

                  <div className="mb-12">
                    <h1 className="mb-8 text-3xl font-heading font-bold">Links To Other Web Sites</h1>
                    <p>
                      Our Service may contain links to third-party web sites or services that are not owned or
                      controlled by Algrith LLC.
                      Algrith LLC has no control over, and assumes no responsibility for, the content, privacy
                      policies, or practices of any third party web sites or services. You further acknowledge and
                      agree that Algrith LLC shall not be responsible or liable, directly or indirectly, for any
                      damage or loss caused or alleged to be caused by or in connection with use of or reliance on
                      any such content, goods or services available on or through any such web sites or services.
                      We strongly advise you to read the terms and conditions and privacy policies of any thirdparty web sites or services that you visit.
                    </p>
                  </div>

                  <div className="mb-12">
                    <h1 className="mb-8 text-3xl font-heading font-bold">Termination</h1>
                    <p>
                      We may terminate or suspend your account immediately, without prior notice or liability,
                      for any reason whatsoever, including without limitation if you breach the Terms.
                      Upon termination, your right to use the Service will immediately cease. If you wish to
                      terminate your account, you may simply discontinue using the Service.
                    </p>
                  </div>

                  <div className="mb-12">
                    <h1 className="mb-8 text-3xl font-heading font-bold">Disclaimer</h1>
                    <p>
                      Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS
                      AVAILABLE" basis. The Service is provided without warranties of any kind, whether express
                      or implied, including, but not limited to, implied warranties of merchantability, fitness for a
                      particular purpose, non-infringement or course of performance.
                      Algrith LLC subsidiaries, affiliates, and its licensors do not warrant that;
                    </p>
                    <ul className="pl-8 my-8">
                      <li>
                        a) the Service will function uninterrupted, secure or available at any
                        particular time or location;
                      </li>
                      <li>
                        b) any errors or defects will be corrected;
                      </li>
                      <li>
                        c) the Service is free of viruses or other harmful components; or
                      </li>
                      <li>
                        d) the results of using the Service will meet your requirements.
                      </li>
                    </ul>
                  </div>

                  <div className="mb-12">
                    <h1 className="mb-8 text-3xl font-heading font-bold">Changes</h1>
                    <p>
                      We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If
                      a revision is material we will try to provide at least 30 days notice prior to any new terms
                      taking effect. What constitutes a material change will be determined at our sole discretion.
                      By continuing to access or use our Service after those revisions become effective, you agree
                      to be bound by the revised terms. If you do not agree to the new terms, please stop using the
                      Service
                    </p>
                  </div>

                  <div className="mb-12">
                    <h1 className="mb-8 text-3xl font-heading font-bold">Cookies</h1>
                    <p>
                      We employ the use of cookies. By accessing Algrith LLC, you agreed to use cookies in
                      agreement with the Algrith LLC's Privacy Policy.Most interactive websites use cookies
                      to let us retrieve the user’s details for each visit. Cookies are used by our website
                      to enable the functionality of certain areas to make it easier for people visiting our website.
                    </p>
                  </div>

                  <div className="mb-12">
                    <h1 className="mb-8 text-3xl font-heading font-bold">License</h1>
                    <p>
                      Unless otherwise stated, Algrith LLC and/or its licensors own the intellectual
                      property rights for all material on Algrith LLC. All intellectual property rights
                      are reserved. You may access this from Algrith LLC for your own personal use
                      subjected to restrictions set in these terms and conditions.
                    </p>
                  </div>

                  <div className="mb-12">
                    <h1 className="mb-8 text-3xl font-heading font-bold">iFrames</h1>
                    <p>
                      Without prior approval and written permission, you may not create frames
                      around our Webpages that alter in any way the visual presentation or
                      appearance of our Website.
                    </p>
                  </div>

                  <div className="mb-12">
                    <h1 className="mb-8 text-3xl font-heading font-bold">Web application/design</h1>
                    <ul className="pl-8 my-8">
                      <li>
                        The Customer is solely responsible for preparing and sending detailed answers
                        to our web application/design service requirement ("through the Order requirement Form").
                        Algrith.com is under no obligation to review a requirement for
                        further Feedbacks for any purpose, including accuracy, completeness of information, quality or clarity.
                      </li>
                      <li>
                        When Algrith.com provides a set of deliveries to the Customer, the Customer
                        shall review and respond. If the Customer fails to promptly inform Algrith.com that
                        the provided deliveries are not reasonably responsive to the provided Feedback within 30
                        days, the Customer will be deemed to have accepted the delivery and the affected order
                        will be marked as complete and final files sent.
                      </li>
                      <li>
                        If the Customer notifies Algrith.com that the Customer considers a delivery as not
                        reasonably responsive to the Feedback, the Customer shall provide information regarding
                        amendments or modification to be made to the initial delivery. After providing this
                        feedback, the Customer will be provided a subsequent delivery that conforms with the
                        additional criteria requested by the Customer.
                      </li>
                      <li>
                        Revisions generally consist of additional compositions 
                        that incorporate changes requested by the Customer in the 
                        Revision Brief. The purpose of the revision process is to create 
                        designs that move forward in a specific direction as determined 
                        by the Customer. Algrith LLC.com offers Unlimited Revisions to a choosen package.
                      </li>
                      <li>
                        Upon expiration of the 1 year website free maintenance, hosting and domain 
                        included in some packages, an email notification of expiration will be sent 
                        to you in respect to a subscription renewal and an invoice sent.
                        After purchase of domain, change of domain name will demand an extra fee and 
                        an invoice for payment will be sent.
                      </li>
                    </ul>
                  </div>

                  <div className="mb-12">
                    <h1 className="mb-8 text-3xl font-heading font-bold">Miscellaneous</h1>
                    <p>
                      Project duration: The Customer agrees to provide timely responses to 'Algrith.com' 
                      after receiving status notifications from 'Algrith.com'. The Customer shall have 
                      30 days to respond to each set of deliveries sent to the Customer for review. 
                      If after 30 days the Customer has failed to respond, 'Algrith.com' will assume the 
                      Project complete and the Project shall be deemed to be completed and final files 
                      uploaded. At such time, 'Algrith.com' will have no further obligation to the Customer. 
                      In rare cases, if the customer feels that it may take him more than 30 days to respond 
                      then he is requested to inform 'Algrith.com' accordingly either by email or live chat, 
                      so that 'Algrith.com' keeps the project in active state.
                      Eligibility Requirements: By asking for our services, you represent and warrant that 
                      you meet our requirements, that the information you include as part of the ordering 
                      process is complete and accurate and, if you are ordering services on behalf of an 
                      entity, that you are authorise to bind that entity to these Terms and Conditions. 
                      'Algrith.com' may accept or reject your order in its sole discretion.
                      Authorisation to Use: Permitted Uses. You may access and use the Service solely 
                      in accordance with the Terms and Conditions and any posted policies and procedures 
                      that appear on the Web Site. You may provide Creative Briefs and obtain Responses 
                      only if you register as a Customer.
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