import Head from 'next/head'
import { useSelector } from 'react-redux'
// Components! Starting with master layout component
import Layout from '../components/Layout'
import BreadCrumbs from '../components/BreadCrumbs'
import CheckoutOrderRequirement from '../components/CheckoutOrderRequirement';
import CheckoutOrderSummary from '../components/CheckoutOrderSummary';
import CheckoutBillingForm from '../components/CheckoutBillingForm';

export default function Checkout({}) {
  const { _package: Package, requirements: Requirements } = useSelector((state) => state.checkout)
  
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1" />
        <title> Checkout | Algrith </title>
      </Head>
      <main>
        <section className="w-full pt-4 pb-12 md:pt-12 md:pb-24 px-6 md:px-12 lg:px-20 xl:px-28 overflow-hidden">
          {(Package && Requirements) && (<div className="px-2 lg:px-0 flex flex-wrap">
            <BreadCrumbs page="checkout" />
            <CheckoutOrderSummary Package={ Package } />
            <div className="flex flex-wrap justify-between w-full lg:w-2/3 lg:pl-10 xl:pl-0">
              <CheckoutOrderRequirement Requirements={ Requirements } />
              <CheckoutBillingForm Package={ Package } />
            </div>
          </div>)}
          {!(Package || Requirements) && (<div className="flex justify-center">
            No checkout package or requirements found!
          </div>)}
        </section>
      </main>
    </Layout>
  )
}