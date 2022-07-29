import Head from 'next/head'
import Link from 'next/link'
import BareLayout from '../components/BareLayout'

export default function OrderSuccessful() {
  
  return (
    <BareLayout>
      <Head>
        <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1" />
        <title> Order Successful | Algrith </title>
      </Head>
      <main>
        <section className="h-screen w-full 2xl:w-9/12 2xl:mx-auto p-8">
          <div className="h-full flex flex-col justify-center items-center mx-auto w-full md:w-6/12 lg:w-5/12 xl:w-3/12">
            <div className="shadow rounded-2xl dark:bg-slate-800 bg-white w-full py-12 px-6">
              
              <div className="pt-5 text-center">
                <div className="flex flex-col justify-between items-center gap-y-12">
                  <span className="text-green-500 rounded-full border-2 border-green-500">
                    <svg className="" width="64" height="64" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z" fill="currentColor"></path>
                    </svg>
                  </span>
                  <span className="text-xl">
                    Order successful!
                  </span>
                </div>

                <Link href={'/'}>
                  <a className="text-md font-medium text-heading px-2 py-3 mt-12 block text-white dark:bg-opacity-50 bg-green-500 shadow-sm rounded-full">
                    Back to homepage
                  </a>
                </Link>
              </div>

            </div>
          </div>
        </section>
      </main>
    </BareLayout>
  )
}