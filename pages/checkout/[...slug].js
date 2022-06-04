import React, { useEffect, useState } from 'react'
import Head from 'next/head'
// Mock database for getting initial props
import { getProductBySlug } from '../../lib/products';
// Components! Starting with master layout component
import Layout from '../../components/Layout'
import BreadCrumbs from '../../components/BreadCrumbs'
import DisplayColors from '../../components/DisplayColors';

export default function Checkout({ Package, Requirements }) {
  const [ passwordVisibility, togglePasswordVisibility ] = useState(false)
  const keyToProperFormat = (text) => {
    if (text !== null) {
      text = text.split('_');
      text = text.map(word => { 
        return word[0] + word.slice(1);
      }).join(" ");
      return text[0].toUpperCase()+text.slice(1)
    }
  }

  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1" />
        <title> Checkout | Algrith </title>
      </Head>
      <main>
        <section className="w-full pt-4 pb-12 md:pt-12 md:pb-24 px-6 md:px-12 xl:px-28 overflow-hidden">
          <div className="flex flex-wrap">
            <BreadCrumbs page={`checkout.index`} />
            <div className="w-full lg:w-1/3 lg:pr-0 xl:pr-10">
              <div className="flex flex-col md:flex-row lg:flex-col overflow-hidden rounded-lg bg-white p-2 mb-8 border">
                <img src={ Package.gallery[0] } className="overflow-hidden" alt={ Package.name } />

                <div className="w-full px-3 my-4">
                  <div className="bg-white">
                    <div className="pb-4 mb-4 border-b">
                      <div className="flex justify-between items-center">
                        <h2 className="text-2xl text-green-500 font-bold font-heading mb-4"> { Package.name } </h2>
                        <span className="text-lg text-red-500 font-bold"> { Package.currency.symbol + Package.price } </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg text-black font-bold font-heading">Features inclusive</h3>
                        <span className="text-lg font-bold">Qty: x1 </span>
                      </div>
                    </div>
                    <ul className="text-lg text-green-500 mb-6">
                      {Package.features.map((feature) => {
                        return (
                          <li key={ Object.keys(feature)[0] } className="flex items-center mb-2">
                            <span className="mr-6">
                              <svg width="18" height="14" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z" fill="currentColor"></path>
                              </svg>
                            </span>
                            <span className="text-gray-600"> { Object.values(feature)[0] } </span>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>

                
              </div>
            </div>

            <div className="flex flex-wrap justify-between w-full lg:w-2/3 lg:pl-10 xl:pl-0">
              <div className="md:w-1/2 pr-0 md:pr-4 mb-8">
                <div className="bg-white rounded-lg border overflow-hidden">
                  <h3 className="border-b text-gray-0 px-4 py-3 mb-2 text-xl md:text-2xl font-heading font-medium">
                    Order requirements
                  </h3>
                  <div className="p-4 px-6 pb-8">
                    <ul className="w-full text-lg">
                      {Object.entries(Requirements).map((requirement) => {
                        return (
                          <React.Fragment key={ requirement[0] }>
                            {requirement[0] !== 'description' && requirement[0] !== 'theme_color' && <li className="w-full mb-3 flex flex-wra justify-between items-center overflow-x-auto">
                              <span className="w-1/2 flex items-center text-lg text-gray-600">
                                <span className="mr-6 text-green-500">
                                  <svg width="18" height="14" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z" fill="currentColor"></path>
                                  </svg>
                                </span>
                                <span className="no-scrollbar overflow-x-auto whitespace-nowrap"> { keyToProperFormat(requirement[0]) } </span>
                              </span>
                              {requirement[0] !== 'domain_password' && (
                                <input className="border-0 focus:ring-0 outline-none ring-0 w-1/2 whitespace-nowrap text-right" value={ requirement[1] } />
                              )}
                              {requirement[0] == 'domain_password' && (
                                <span className="w-1/2 whitespace-nowrap flex justify-between items-center">
                                  <input readOnly type={passwordVisibility ? 'text' : 'password'} className="text-right border-0 focus:ring-0 outline-none ring-0 w-4/5" value={ requirement[1] } />
                                  <i onClick={()=>togglePasswordVisibility(!passwordVisibility)} className="fa fa-eye ml-3 text-green-300 cursor-pointer"></i>
                                </span>
                              )}
                            </li>}
                            {requirement[0] == 'theme_color' && <li className="flex flex-wrap justify-between md:items-center">
                              <span className="flex items-center text-lg text-gray-600 mb-4">
                                <span className="mr-6 text-green-500">
                                  <svg width="18" height="14" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z" fill="currentColor"></path>
                                  </svg>
                                </span>
                                { keyToProperFormat(requirement[0]) }
                              </span>
                              <span className="pl-12">
                                <DisplayColors colors={ requirement[1] } />
                              </span>
                            </li>}
                            {requirement[0] == 'description' && <li className="mb-3 flex flex-col">
                              <span className="flex items-center w-full block text-lg text-gray-600 mb-2">
                                <span className="mr-6 text-green-500">
                                  <svg width="18" height="14" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z" fill="currentColor"></path>
                                  </svg>
                                </span>
                                { keyToProperFormat(requirement[0]) }
                              </span>
                              <span className="w-full block pl-12"> { requirement[1] } </span>
                            </li>}
                          </React.Fragment>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 mb-8 pl-0 md:pl-4">
                { Package.name }
              </div>
            </div>
          </div>
        </section>
      </main>
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