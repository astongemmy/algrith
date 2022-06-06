import React, { useEffect, useState } from 'react'
import Head from 'next/head'
// import Script from 'next/script'
// Mock database for getting initial props
import { getProductBySlug } from '../../lib/products';
// Components! Starting with master layout component
import Layout from '../../components/Layout'
import BreadCrumbs from '../../components/BreadCrumbs'
import CheckoutOrderRequirement from '../../components/CheckoutOrderRequirement';
import CheckoutOrderSummary from '../../components/CheckoutOrderSummary';
import CheckoutBillingForm from '../../components/CheckoutBillingForm';

export default function Checkout({ Package, Requirements }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1" />
        <title> Checkout | Algrith </title>
      </Head>
      <main>
        <section className="w-full pt-4 pb-12 md:pt-12 md:pb-24 px-6 md:px-12 lg:px-20 xl:px-28 overflow-hidden">
          <div className="px-2 lg:px-0 flex flex-wrap">
            <BreadCrumbs page={`checkout.index`} />
            <CheckoutOrderSummary Package={ Package } />
            <div className="flex flex-wrap justify-between w-full lg:w-2/3 lg:pl-10 xl:pl-0">
              <CheckoutOrderRequirement Requirements={ Requirements } />
              <CheckoutBillingForm Package={ Package } />
            </div>
          </div>
        </section>
      </main>
      {/* <Script src="https://js.paystack.co/v1/inline.js" /> */}
    </Layout>
  )
}

export async function getServerSideProps({ params, query }) {
  const requested_product = params.slug[0]
  const requested_package = params.slug[1]
  const product = getProductBySlug(requested_product)
  const product_packages = product.packages.map((_package) => _package.id)
  const Package = product_packages.includes(requested_package) ?
    product.packages.filter((_package) => _package.id == requested_package)[0] :
  {}
  return {
    props: {
      Package: Package,
      Requirements: JSON.parse(query.requirements) || {}
    }
  }
}