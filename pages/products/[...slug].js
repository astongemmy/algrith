import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import ImageGallery from 'react-image-gallery';
import useViewport from '../../hooks/useViewport'
import Layout from '../../components/Layout'
import BreadCrumbs from '../../components/BreadCrumbs'
import LeftNav from '../../components/LeftNav'
import RightNav from '../../components/RightNav'
import ThumbInner from '../../components/ThumbInner'
import ProductDescription from '../../components/ProductDescription'
import OrderRequirements from '../../components/OrderRequirements'
import Reviews from '../../components/Reviews'
import PackageDescription from '../../components/PackageDescription'
import PackageSelector from '../../components/PackageSelector'
import ProductService from '../../services/product.service';

export default function Product({ isAvailable, isNotAvailable, isLoading, product, error }){
  const { viewport } = useViewport()
  const [selectedPackage, setSelectedPackage] = useState({})
  useEffect(() => {
    if (isAvailable) {
      const activePackage = product.packages.filter(_package => _package.active)[0]
      setSelectedPackage(activePackage)
    }
  }, [isAvailable])

  const setPackageGallery = (gallery) => {
    return gallery.map((image) => {
      const sample = { originalClass: "filter dark:brightness-75 overflow-hidden w-full h-72 md:h-auto lg:h-112 2xl:h-144 rounded-lg object-center object-cover" }
      sample.original = `${process.env.NEXT_PUBLIC_API_PUBLIC_URL}${image.path}`
      sample.thumbnail = `${process.env.NEXT_PUBLIC_API_PUBLIC_URL}${image.path}`
      return sample
    })
  }

  const toggleSelectedPackage = (_id) => setSelectedPackage(product.packages.filter((_package) => _package._id == _id)[0])
  const setBreadcrumbs = (text, url) => [{ text, url: `/products/${url}` }]

  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1" />
        <title> { product?.name } Products | Algrith </title>
      </Head>
      <main>
        <section className="w-full 2xl:w-8/12 2xl:mx-auto pt-4 pb-12 md:pt-12 md:pb-24 px-7 md:px-14 lg:px-20 xl:px-28 overflow-hidden">
          {isAvailable && (<div className="flex flex-wrap">
            <BreadCrumbs page="products" crumbs={setBreadcrumbs(selectedPackage?.name, selectedPackage?.slug)} />
            <div className="w-full md:w-1/2 lg:pr-0 xl:pr-10">
              <div className="overflow-hidden rounded-lg dark:bg-slate-800 bg-white p-2 mb-8 md:pl-0 border dark:border-slate-800">
                {selectedPackage?.gallery?.length > 0 && (<ImageGallery
                  autoPlay
                  lazyLoad
                  showFullscreenButton={false}
                  showPlayButton={false}
                  items={setPackageGallery(selectedPackage?.gallery)}
                  thumbnailPosition={!['sm'].includes(viewport) ? 'left' : 'bottom'}
                  renderLeftNav={(onClick, disabled) => LeftNav(onClick, disabled)}
                  renderRightNav={(onClick, disabled) => RightNav(onClick, disabled)}
                  renderThumbInner={(item) => ThumbInner(item)}
                />)}
              </div>
              <PackageSelector
                mobile
                getSelected={(selected) => toggleSelectedPackage(selected)}
                slug={product?.slug}
                packages={product?.packages}
                selectedPackage={selectedPackage}
              />
              <PackageDescription item={selectedPackage} />
              {!['sm'].includes(viewport) && <Reviews reviews={selectedPackage?.reviews} />}
            </div>

            <div className="md:w-1/2 md:pl-10 xl:pl-0">
              <div className="flex flex-col xl:flex-row mb-8">
                <PackageSelector
                  getSelected={(selected) => toggleSelectedPackage(selected)}
                  slug={product?.slug}
                  packages={product?.packages}
                  selectedPackage={selectedPackage}
                />
                <ProductDescription product={product} reviews={selectedPackage?.reviews} />
              </div>
              <OrderRequirements product_slug={ product?.slug } selectedPackage={ selectedPackage } />
              {['sm'].includes(viewport) && <Reviews reviews={selectedPackage?.reviews} />}
            </div>
          </div>)}
          {isNotAvailable && (<div className="flex justify-center">
            No packages available!
          </div>)}
          {isLoading && (<div className="flex justify-center">
            Loading packages...
          </div>)}
          {error && (<div className="flex justify-center">
            Error fetching packages!
          </div>)}
        </section>
      </main>
    </Layout>
  )
}

export async function getServerSideProps({ params }) {
  const query_params = {
    product_slug: params.slug[0],
    package_slug: params.slug[1]
  }
  
  const GetProduct = async ({ product_slug, package_slug }) => {
    const Interface = { product: {}, error: false, isDataSet: false }
    const query = { slug: product_slug }
    const { status, data, error } = await ProductService.getProducts(query)
    if (error) Interface.error = true
    if (status && data.length) {
      Interface.product = data.filter(product => product.slug === product_slug && product.published)[0]
      if (Interface.product.packages.length) {
        const packages = Interface.product.packages.map((_package, index) => {
          _package.active = false
          if (package_slug && _package.slug === package_slug) _package.active = true
          if (!package_slug && index === 0) _package.active = true
          return _package
        })
        Interface.product.packages = packages.filter(_package => _package.published)
        Interface.isDataSet = true
      }
    }
    Interface.isLoading = !Interface.isDataSet && !Object.keys(Interface.product).length && !Interface.error
    Interface.isAvailable = Interface.isDataSet && Object.keys(Interface.product).length && !Interface.error
    Interface.isNotAvailable = Interface.isDataSet && !Object.keys(Interface.product).length && !Interface.error
    return Interface
  }

  return {
    props: await GetProduct(query_params)
  }
}