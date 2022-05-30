import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import ImageGallery from 'react-image-gallery';
import useViewport from '../../hooks/useViewport'
// Mock database for getting initial props
import { getAllProducts, getProductBySlug } from '../../lib/products';
// Components! Starting with master layout component
import Layout from '../../components/Layout'
import BreadCrumbs from '../../components/BreadCrumbs'
import ButtonGroup from '../../components/ButtonGroup'
import PackageFeaturesCard from '../../components/PackageFeaturesCard'
import LeftNav from '../../components/LeftNav'
import RightNav from '../../components/RightNav'
import ThumbInner from '../../components/ThumbInner'
import ProductRating from '../../components/ProductRating';
import ProductDescription from '../../components/ProductDescription';
import OrderRequirements from '../../components/OrderRequirements';
import CheckoutButton from '../../components/CheckoutButton';
import Reviews from '../../components/Reviews';
import PackageDescription from '../../components/PackageDescription';

export default function Product({ Product }) {
  const { viewport } = useViewport();
  const router = useRouter()
  const activePackage = router.query.package_name ? Object.values(Product.packages).filter((product) => {
    return product.id == router.query.package_name
  })[0] : Product.selected
  const [selectedPackage, setSelectedPackage] = useState(activePackage)
  useEffect(() => {
    setSelectedPackage(activePackage)
  },[Product, router])
  const setPakageGallery = (gallery) => {
    return gallery.map((image) => {
      const sample = { originalClass: "overflow-hidden w-full h-96 lg:h-144 rounded-lg object-center object-cover" }
      sample.original = image
      sample.thumbnail = image
      return sample
    })
  }
  const toggleSelectedPackage = (id) => {
    setSelectedPackage(Object.values(Product.packages).filter((pack) => {
      return pack.id == id
    })[0])
  }

  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1" />
        <title> {Product.type[0].toUpperCase().concat(Product.type.slice(1))} Products | Algrith </title>
      </Head>        
      <main>
        <section className="w-full pt-4 pb-12 md:pt-12 md:pb-24 px-6 md:px-12 xl:px-28 overflow-hidden">
          <div className="flex flex-wrap">
            <BreadCrumbs page={`products.${Product.type}`} />
            <div className="w-full md:w-1/2 bg-red-100 lg:pr-0 xl:pr-10">                
              <div className="overflow-hidden rounded-lg bg-white p-2 mb-8 md:pl-0 border">
                <ImageGallery
                  autoPlay
                  lazyLoad
                  showFullscreenButton={ false } 
                  showPlayButton={ false } 
                  items={ setPakageGallery(selectedPackage.gallery) } 
                  thumbnailPosition={ !['sm'].includes(viewport) ? 'left' : 'bottom' }
                  renderLeftNav={(onClick, disabled) => LeftNav(onClick, disabled)}
                  renderRightNav={(onClick, disabled) => RightNav(onClick, disabled)}
                  renderThumbInner={(item) => ThumbInner(item)}
                />
              </div>
              <div className="md:hidden overflow-hidden bg-white border rounded-2xl pb-8 my-8">
                <ButtonGroup getSelected={ (selected) => toggleSelectedPackage(selected) } defaultSelected={ selectedPackage.id } type={`products.${Product.type}`} />
                <div className="px-6">
                  <span className="mt-3 block text-sm text-gray-400 tracking-wider uppercase"> { selectedPackage.tag } </span>
                  <h2 className="my-2 text-3xl md:text-4xl font-heading font-medium">
                    { selectedPackage.title }
                  </h2>
                  <p className="flex items-center mb-4">
                    <span className="mr-2 text-sm text-green-500 font-medium">{ selectedPackage.currency.symbol }</span>
                    <span className="text-3xl text-green-500 font-medium"> { selectedPackage.price } </span>
                  </p>
                  <PackageFeaturesCard item={ selectedPackage }/>
                </div>
              </div>
              <PackageDescription item={ selectedPackage } />
              <Reviews reviews={ selectedPackage.reviews } />
            </div>

            <div className="md:w-1/2 bg-blue-100 md:pl-10 xl:pl-0">
              <div className="flex flex-col xl:flex-row mb-8">
                <div className="hidden md:block xl:w-3/5 overflow-hidden bg-white border rounded-2xl pb-8">
                  <ButtonGroup getSelected={ (selected) => toggleSelectedPackage(selected) } defaultSelected={ selectedPackage.id } type={`products.${Product.type}`} />
                  <div className="px-6">
                    <span className="mt-3 block text-sm text-gray-400 tracking-wider uppercase"> { selectedPackage.tag } </span>
                    <h2 className="my-2 text-3xl md:text-4xl font-heading font-medium">
                      { selectedPackage.title }
                    </h2>
                    <p className="flex items-center mb-4">
                      <span className="mr-2 text-sm text-green-500 font-medium">{ selectedPackage.currency.symbol }</span>
                      <span className="text-3xl text-green-500 font-medium"> { selectedPackage.price } </span>
                    </p>
                    <PackageFeaturesCard item={ selectedPackage }/>
                  </div>
                </div>

                
                <div className="hidden lg:block my-8 xl:mt-0 xl:w-2/5 pl-2 xl:pl-8">
                  <h2 className="capitalize mb-2 text-3xl md:text-4xl font-heading font-medium">
                    { Product.type } Products
                  </h2>
                  <span className="inline-block mb-4">
                    <ProductRating />
                  </span>
                  <ProductDescription />  
                </div>
              </div>
              <OrderRequirements />                  
              <div className="flex flex-wrap -mx-2 mb-12">
                <CheckoutButton item={ selectedPackage } />
                <div className="w-full md:w-1/3 px-2">
                  <a className="flex w-full py-4 px-2 items-center justify-center leading-8 font-heading font-medium tracking-tighter text-xl text-center bg-white focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50 hover:bg-opacity-60 rounded-xl" href="#">
                    <span className="mr-2">Wishlist</span>
                    <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.3235 20.1324L2.52488 10.8515C1.75232 10.0706 1.24237 9.06367 1.06728 7.97339C0.8922 6.88311 1.06086 5.76477 1.54936 4.7768V4.7768C1.91837 4.03089 2.45739 3.3843 3.12201 2.89033C3.78663 2.39635 4.55781 2.06911 5.37203 1.93558C6.18626 1.80205 7.0202 1.86605 7.80517 2.1223C8.59013 2.37855 9.30364 2.81972 9.88691 3.40946L11.3235 4.86204L12.7601 3.40946C13.3434 2.81972 14.0569 2.37855 14.8419 2.1223C15.6269 1.86605 16.4608 1.80205 17.275 1.93558C18.0892 2.06911 18.8604 2.39635 19.525 2.89033C20.1897 3.3843 20.7287 4.03089 21.0977 4.7768V4.7768C21.5862 5.76477 21.7549 6.88311 21.5798 7.97339C21.4047 9.06367 20.8947 10.0706 20.1222 10.8515L11.3235 20.1324Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div>
                <h4 className="mb-6 font-heading font-medium">More information</h4>
                <button className="flex w-full pl-6 lg:pl-12 pr-6 py-4 mb-4 justify-between items-center leading-7 rounded-2xl border-2 border-blueGray-200 hover:border-blueGray-300">
                  <h3 className="text-lg font-heading font-medium">Shipping &amp; returns</h3>
                  <span>
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.4594 0.289848C10.8128 -0.096616 11.3841 -0.096616 11.7349 0.289848C12.0871 0.676312 12.0897 1.30071 11.7349 1.68718L6.63794 7.21015C6.28579 7.59662 5.71584 7.59662 5.36108 7.21015L0.264109 1.68718C-0.0880363 1.30215 -0.0880363 0.676312 0.264109 0.289848C0.617558 -0.096616 1.18882 -0.096616 1.53966 0.289848L6.00147 4.81927L10.4594 0.289848Z" fill="black"></path>
                    </svg>
                  </span>
                </button>
                <button className="flex w-full pl-6 lg:pl-12 pr-6 py-4 justify-between items-center leading-7 rounded-2xl border-2 border-blueGray-200 hover:border-blueGray-300">
                  <h3 className="text-lg font-heading font-medium">Product details</h3>
                  <span>
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.4594 0.289848C10.8128 -0.096616 11.3841 -0.096616 11.7349 0.289848C12.0871 0.676312 12.0897 1.30071 11.7349 1.68718L6.63794 7.21015C6.28579 7.59662 5.71584 7.59662 5.36108 7.21015L0.264109 1.68718C-0.0880363 1.30215 -0.0880363 0.676312 0.264109 0.289848C0.617558 -0.096616 1.18882 -0.096616 1.53966 0.289848L6.00147 4.81927L10.4594 0.289848Z" fill="black"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>

          </div>
        </section>
      </main>
    </Layout>    
  )
}

export async function getStaticPaths() {
  const products = getAllProducts()
  return {
    paths: products.map((product) => {
      return {
        params: {
          slug: product.slug
        }
      }    
    }),
    fallback: false
  }
}
export async function getStaticProps({ params }) {
  const { slug, packages, selected } = getProductBySlug(params.slug)
  const Product = { type: slug, packages, selected }
  return {
    props: {
      Product
    }
  }
}