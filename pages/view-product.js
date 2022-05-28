import React, { useState } from 'react'
import useViewport from '../hooks/useViewport'
import Head from 'next/head'
import Layout from '../components/Layout'
import BreadCrumbs from '../components/BreadCrumbs'
import ButtonGroup from '../components/ButtonGroup'
import ProductFeatureCard from '../components/ProductFeatureCard'
import ImageGallery from 'react-image-gallery';
import LeftNav from '../components/LeftNav'
import RightNav from '../components/RightNav'
import ThumbInner from '../components/ThumbInner'

export default function PackageView() {
  const [active_product, setActiveProduct] = useState('homepage')
  const { viewport } = useViewport();
  const breadcrumbs = [
    { text: 'Products', url: '/products' },
    { text: 'Landing Page', url: '/landing-page' }
  ];
  const buttons = [
    { id: 'Homepage', text: 'Homepage', active: true },
    { id: 'corporate_website', text: 'Corporate', active: false },
    { id: 'business_website', text: 'Business', active: false },
  ]
  const products = {
    landing_page: {
      id: 'Landing #3299803',
      title: 'Landing Page',
      price: 124.99,
      currency: { name: 'dollars', symbol: '$' },
      features: [
        { 'complete_files': 'Complete files' },
        { 'cloud_storage': '50GB cloud storage' },
        { 'team_members': '20 team members' },
        { 'board_editors': '3 anonymous board editors' },
        { 'uptime': '99.9% uptime' },
      ],
      gallery: [
        "./images/products/ph-photo1.png",
        "./images/products/ph-photo1.png",
        "./images/products/ph-photo1.png",
        "./images/products/ph-photo1.png",
      ]
    },
    corporate_website: {
      id: 'Corporate #1029832',
      title: 'Corporate Website',
      price: 650.99,
      currency: { name: 'dollars', symbol: '$' },
      features: [
        { 'complete_files': 'Complete files' },
        { 'cloud_storage': '100GB cloud storage' },
        { 'team_members': '40 team members' },
        { 'board_editors': '6 anonymous board editors' },
        { 'uptime': '99.9% uptime' },
      ],
      gallery: [
        "./images/products/ph-photo1.png",
        "./images/products/ph-photo1.png",
        "./images/products/ph-photo1.png",
        "./images/products/ph-photo1.png",
      ]
    },
    business_website: {
      id: 'business #4302564',
      title: 'Business Website',
      price: 2400.99,
      currency: { name: 'dollars', symbol: '$' },
      features: [
        { 'complete_files': 'Complete files' },
        { 'cloud_storage': '200GB cloud storage' },
        { 'team_members': '100 team members' },
        { 'board_editors': 'Unlimited anonymous board editors' },
        { 'uptime': '99.9% uptime' },
      ],
      gallery: [
        "./images/products/ph-photo1.png",
        "./images/products/ph-photo1.png",
        "./images/products/ph-photo1.png",
        "./images/products/ph-photo1.png",
      ]
    }
  }
  const images = [
    {
      original: "./images/products/ph-photo1.png",
      thumbnail: "./images/products/ph-photo1.png",
      originalClass: "overflow-hidden w-full h-96 md:h-144 rounded-lg object-center object-cover",
    },{
      original: "./images/products/ph-photo1.png",
      thumbnail: "./images/products/ph-photo1.png",
      originalClass: "overflow-hidden w-full h-96 md:h-144 rounded-lg object-center object-cover",
    },
    {
      original: "./images/products/ph-photo1.png",
      thumbnail: "./images/products/ph-photo1.png",
      originalClass: "overflow-hidden w-full h-96 md:h-144 rounded-lg object-center object-cover",
    },
    {
      original: "./images/products/ph-photo1.png",
      thumbnail: "./images/products/ph-photo1.png",
      originalClass: "overflow-hidden w-full h-96 md:h-144 rounded-lg object-center object-cover",
    },
  ]
  
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1" />
        <title> Product | Algrith </title>
      </Head>        
      <main>
        <section className="w-full pt-12 pb-24 px-4 md:px-10 lg:px-12 xl:px-28 rounded-b-10xl overflow-hidden">
          <div className="containe px-4 mx-auto">
            <div className="flex flex-wrap -mx-4">
              <BreadCrumbs breadcrumbs={ breadcrumbs } />
              <div className="w-full md:w-1/2 px-6 md:px-8 lg:px-4 mb-2 lg:mb-0">
                <div className="rounded-lg bg-white p-2 md:pl-0 border flex -mx-4 flex-wrap items-center justify-between lg:justify-start lg:items-start">
                  <div className="rounded-lg w-full overflow-hidden">
                    <ImageGallery 
                      lazyLoad
                      showFullscreenButton={ false } 
                      showPlayButton={ false } 
                      items={ images } 
                      thumbnailPosition={ !['sm'].includes(viewport) ? 'left' : 'bottom' }
                      renderLeftNav={(onClick, disabled) => LeftNav(onClick, disabled)}
                      renderRightNav={(onClick, disabled) => RightNav(onClick, disabled)}
                      renderThumbInner={(item) => ThumbInner(item)}
                    />
                    {/* <p className="text-sm text-gray-300">Roll over image to zoom in</p> */}
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-2 md:px-4 xl:px-4">
                <div className="w-full">
                  
                  
                  
                  
                  <div className="w-full flex flex-col xl:flex-row mb-6">
                    <div className="w-full xl:w-3/5 md:pl-4">
                      <ButtonGroup getSelected={ (selected) => setActiveProduct(selected) } defaultSelected={ active_product } buttons={ buttons } />
                      <div className="">
                        <span className="mt-3 block text-sm text-gray-400 tracking-wider uppercase"> { products[active_product].id } </span>
                        <h2 className="mt-6 mb-4 text-3xl md:text-4xl font-heading font-medium">
                          { products[active_product].title }
                        </h2>
                        <p className="flex items-center mb-6">
                          <span className="mr-2 text-sm text-blue-500 font-medium">{ products[active_product].currency.symbol }</span>
                          <span className="text-3xl text-blue-500 font-medium"> { products[active_product].price } </span>
                        </p>
                        <ProductFeatureCard product={ products[active_product] }/>
                      </div>
                    </div>

                    
                    <div className="w-full xl:w-2/5 pl-8">
                      <div className="mb-6">
                        <h2 className="mb-4 text-3xl md:text-4xl font-heading font-medium">
                          Website Products
                        </h2>
                        <div className="flex mb-6 items-center">
                          <div className="inline-flex mr-4">
                            <button className="mr-1">
                              <svg className="text-yellow-300" width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 7.91679H12.4167L10 0.416779L7.58333 7.91679H0L6.18335 12.3168L3.81668 19.5835L10 15.0835L16.1834 19.5835L13.8167 12.3168L20 7.91679Z" fill="rgb(245 158 11)"></path>
                              </svg>
                            </button>
                            <button className="mr-1">
                              <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 7.91679H12.4167L10 0.416779L7.58333 7.91679H0L6.18335 12.3168L3.81668 19.5835L10 15.0835L16.1834 19.5835L13.8167 12.3168L20 7.91679Z" fill="rgb(245 158 11)"></path>
                              </svg>
                            </button>
                            <button className="mr-1">
                              <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 7.91679H12.4167L10 0.416779L7.58333 7.91679H0L6.18335 12.3168L3.81668 19.5835L10 15.0835L16.1834 19.5835L13.8167 12.3168L20 7.91679Z" fill="rgb(245 158 11)"></path>
                              </svg>
                            </button>
                            <button className="mr-1">
                              <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 7.91679H12.4167L10 0.416779L7.58333 7.91679H0L6.18335 12.3168L3.81668 19.5835L10 15.0835L16.1834 19.5835L13.8167 12.3168L20 7.91679Z" fill="rgb(245 158 11)"></path>
                              </svg>
                            </button>
                            <button>
                              <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 7.91679H12.4167L10 0.416779L7.58333 7.91679H0L6.18335 12.3168L3.81668 19.5835L10 15.0835L16.1834 19.5835L13.8167 12.3168L20 7.91679Z" fill="#C1C9D3"></path>
                              </svg>
                            </button>
                          </div>
                          <span className="text-md text-gray-400">4.59 (156k)</span>
                        </div>
                        <p className="text-lg text-gray-400">
                          The nulla commodo, commodo eros a lor, tristique lectus. Lorem sad 128 GB silver.
                          This package gives you enormous benefits a nulla commodo, commodo eros a lor, tristique lectus. Lorem sad 128 GB silver.
                          This package gives you enormous benefits a nulla commodo, commodo eros a lor, tristique lectus. Lorem sad 128 GB silver.
                          This package gives you enormous benefits a nulla commodo, commodo eros a lor, tristique lectus. Lorem sad 128 GB silver.
                        </p>
                      </div>                  
                    </div>
                  </div>                  
                  <div className="mb-6">
                    <h3 className="flex items-center text-lg mb-3 font-heading font-medium">
                      Select your preferred color:
                      <button className="ml-4 inline-flex items-center justify-center p-1 rounded-full border border-gray-300">
                        <div className="w-6 h-6 rounded-full bg-white"></div>
                      </button>
                    </h3>
                    <div>
                      <button className="inline-flex items-center justify-center p-1 rounded-full border border-gray-300">
                        <div className="w-6 h-6 rounded-full bg-white"></div>
                      </button>
                      <button className="inline-flex items-center justify-center p-1 rounded-full border border-transparent">
                        <div className="w-6 h-6 rounded-full bg-orange-800"></div>
                      </button>
                      <button className="inline-flex items-center justify-center p-1 rounded-full border border-transparent">
                        <div className="w-6 h-6 rounded-full bg-blue-900"></div>
                      </button>
                      <button className="inline-flex items-center justify-center p-1 rounded-full border border-transparent">
                        <div className="w-6 h-6 rounded-full bg-yellow-500"></div>
                      </button>
                    </div>
                  </div>


                  <div className="my-10 px-4 py-5 sm:p-12 sm:pt-6 bg-white space-y-6 rounded-lg">
                    <h2 className="mb-4 text-3xl md:text-4xl font-heading font-medium">
                      Order requirements
                    </h2>
                    <div className="grid grid-cols-4 gap-6">
                      <div className="col-span-4 sm:col-span-2">
                        <label htmlFor="company_name" className="block text-lg font-medium text-gray-700">
                          Company Name
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <span className="inline-flex items-center px-4 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </span>
                          <input
                            type="text"
                            name="company_name"
                            id="company_name"
                            className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none py-3 rounded-r-md text-lg border-gray-300"
                            placeholder="e.g. Apple Gear"
                          />
                        </div>
                      </div>
                      <div className="col-span-4 sm:col-span-2">
                        <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                          Email
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <span className="inline-flex items-center px-4 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                            </svg>
                          </span>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none py-3 rounded-r-md text-lg border-gray-300"
                            placeholder="e.g. johndoe@email.com"
                          />
                        </div>
                      </div>
                      <div className="col-span-4 sm:col-span-2">
                        <label htmlFor="domain_name" className="block text-lg font-medium text-gray-700">
                          Domain Name
                        </label>
                        <span className="ml-4 flex items-center">
                          <span className="mr-4">Already existing </span>
                          <span className="flex space-x-4 mb-4">
                            <label htmlFor="existing_domain">
                              <input type="radio" value="existing" name="domain_name_state" id="existing_domain" className="w-6 h-6" checked />
                              <span className="ml-3">Yes</span>
                            </label>
                            <label htmlFor="new_domain">
                              <input type="radio" value="new" name="domain_name_state" id="new_domain" className="w-6 h-6" />
                              <span className="ml-3">No</span>
                            </label>
                          </span>
                        </span>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <span className="inline-flex items-center px-4 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                          </span>
                          <input
                            type="text"
                            name="domain_name"
                            id="domain_name"
                            className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none py-3 rounded-r-md text-lg border-gray-300"
                            placeholder="e.g. https://algrithllc.com"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="description" className="block text-lg font-medium text-gray-700">
                        Describe your business/organization
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="description"
                          name="description"
                          rows={7}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full text-lg border border-gray-300 rounded-md"
                          placeholder="e.g. Apple works is a giagantic company that handles heavy duty exportation or crude oil and gas in the United States"
                          defaultValue={''}
                        />
                      </div>
                      <p className="mt-2 text-lg text-gray-500">
                        Include other usefull information that will help us work better.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap -mx-2 mb-12">
                    <div className="w-full md:w-2/3 px-2 mb-2 md:mb-0">
                      <a className="block py-4 px-2 leading-8 font-heading font-medium tracking-tighter text-xl text-white text-center bg-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-blue-600 rounded-xl" href="#">
                        Checkout ($750.87)
                      </a>
                    </div>
                    <div className="w-full md:w-1/3 px-2">
                      <a className="flex w-full py-4 px-2 items-center justify-center leading-8 font-heading font-medium tracking-tighter text-xl text-center bg-white focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50 hover:bg-opacity-60 rounded-xl" href="#">
                        <span className="mr-2">Wishlist</span>
                        <svg width="23" height="22" viewbox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.3235 20.1324L2.52488 10.8515C1.75232 10.0706 1.24237 9.06367 1.06728 7.97339C0.8922 6.88311 1.06086 5.76477 1.54936 4.7768V4.7768C1.91837 4.03089 2.45739 3.3843 3.12201 2.89033C3.78663 2.39635 4.55781 2.06911 5.37203 1.93558C6.18626 1.80205 7.0202 1.86605 7.80517 2.1223C8.59013 2.37855 9.30364 2.81972 9.88691 3.40946L11.3235 4.86204L12.7601 3.40946C13.3434 2.81972 14.0569 2.37855 14.8419 2.1223C15.6269 1.86605 16.4608 1.80205 17.275 1.93558C18.0892 2.06911 18.8604 2.39635 19.525 2.89033C20.1897 3.3843 20.7287 4.03089 21.0977 4.7768V4.7768C21.5862 5.76477 21.7549 6.88311 21.5798 7.97339C21.4047 9.06367 20.8947 10.0706 20.1222 10.8515L11.3235 20.1324Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-6 font-heading font-medium">More information</h4>
                    <button className="flex w-full pl-6 lg:pl-12 pr-6 py-4 mb-4 justify-between items-center leading-7 rounded-2xl border-2 border-blueGray-200 hover:border-blueGray-300">
                      <h3 className="text-lg font-heading font-medium">Shipping &amp; returns</h3>
                      <span>
                        <svg width="12" height="8" viewbox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.4594 0.289848C10.8128 -0.096616 11.3841 -0.096616 11.7349 0.289848C12.0871 0.676312 12.0897 1.30071 11.7349 1.68718L6.63794 7.21015C6.28579 7.59662 5.71584 7.59662 5.36108 7.21015L0.264109 1.68718C-0.0880363 1.30215 -0.0880363 0.676312 0.264109 0.289848C0.617558 -0.096616 1.18882 -0.096616 1.53966 0.289848L6.00147 4.81927L10.4594 0.289848Z" fill="black"></path>
                        </svg>
                      </span>
                    </button>
                    <button className="flex w-full pl-6 lg:pl-12 pr-6 py-4 justify-between items-center leading-7 rounded-2xl border-2 border-blueGray-200 hover:border-blueGray-300">
                      <h3 className="text-lg font-heading font-medium">Product details</h3>
                      <span>
                        <svg width="12" height="8" viewbox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.4594 0.289848C10.8128 -0.096616 11.3841 -0.096616 11.7349 0.289848C12.0871 0.676312 12.0897 1.30071 11.7349 1.68718L6.63794 7.21015C6.28579 7.59662 5.71584 7.59662 5.36108 7.21015L0.264109 1.68718C-0.0880363 1.30215 -0.0880363 0.676312 0.264109 0.289848C0.617558 -0.096616 1.18882 -0.096616 1.53966 0.289848L6.00147 4.81927L10.4594 0.289848Z" fill="black"></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>    
  )
}