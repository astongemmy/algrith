import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import ImageGallery from 'react-image-gallery';
import useViewport from '../../hooks/useViewport'
// Mock database for getting initial props
import { getProductBySlug } from '../../lib/products';
// Components! Starting with master layout component
import Layout from '../../components/Layout'
import BreadCrumbs from '../../components/BreadCrumbs'
import LeftNav from '../../components/LeftNav'
import RightNav from '../../components/RightNav'
import ThumbInner from '../../components/ThumbInner'
import ProductDescription from '../../components/ProductDescription';
import OrderRequirements from '../../components/OrderRequirements';
import Reviews from '../../components/Reviews';
import PackageDescription from '../../components/PackageDescription';
import PackageSelector from '../../components/PackageSelector';

export default function Product({ Product }) {
  const { viewport } = useViewport();
  const activePackage = Product.packages.filter((product) => product.active)[0]
  const [selectedPackage, setSelectedPackage] = useState(activePackage)
  // useEffect(() => { setSelectedPackage(activePackage) }, [Product])
  const setPakageGallery = (gallery) => {
    return gallery.map((image) => {
      const sample = { originalClass: "overflow-hidden w-full h-72 md:h-auto lg:h-112 2xl:h-144 rounded-lg object-center object-cover" }
      sample.original = image
      sample.thumbnail = image
      return sample
    })
  }
  const toggleSelectedPackage = (id) => {
    setSelectedPackage(Product.packages.filter((pack) => pack.id == id)[0])
  }
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1" />
        <title> {Product.name} Products | Algrith </title>
      </Head>
      <main>
        <section className="w-full pt-4 pb-12 md:pt-12 md:pb-24 px-7 md:px-14 lg:px-20 xl:px-28 overflow-hidden">
          <div className="flex flex-wrap">
            <BreadCrumbs page={`products.${Product.slug}`} />
            <div className="w-full md:w-1/2 lg:pr-0 xl:pr-10">
              <div className="overflow-hidden rounded-lg bg-white p-2 mb-8 md:pl-0 border">
                <ImageGallery
                  autoPlay
                  lazyLoad
                  showFullscreenButton={false}
                  showPlayButton={false}
                  items={setPakageGallery(selectedPackage.gallery)}
                  thumbnailPosition={!['sm'].includes(viewport) ? 'left' : 'bottom'}
                  renderLeftNav={(onClick, disabled) => LeftNav(onClick, disabled)}
                  renderRightNav={(onClick, disabled) => RightNav(onClick, disabled)}
                  renderThumbInner={(item) => ThumbInner(item)}
                />
              </div>
              <PackageSelector
                mobile
                getSelected={(selected) => toggleSelectedPackage(selected)}
                type={Product.slug}
                selectedPackage={selectedPackage}
              />
              <PackageDescription item={selectedPackage} />
              {!['sm'].includes(viewport) && <Reviews reviews={selectedPackage.reviews} />}
            </div>

            <div className="md:w-1/2 md:pl-10 xl:pl-0">
              <div className="flex flex-col xl:flex-row mb-8">
                <PackageSelector
                  getSelected={(selected) => toggleSelectedPackage(selected)}
                  type={Product.slug}
                  selectedPackage={selectedPackage}
                />
                <ProductDescription product={Product} />
              </div>
              <OrderRequirements product_slug={ Product.slug } selectedPackage={ selectedPackage } />
              {['sm'].includes(viewport) && <Reviews reviews={selectedPackage.reviews} />}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export async function getServerSideProps({ params }) {
  const requested_product = params.slug[0]
  const requested_package = params.slug[1]
  const Product = getProductBySlug(requested_product)
  const AllPackages = Product.packages.map((_package) => _package.id)
  if (AllPackages.includes(requested_package)) {
    const Packages = Product.packages.map((_package) => {
      if (_package.active && _package.id !== requested_package) {
        _package.active = false
      }
      if (_package.id == requested_package) {
        _package.active = true
      }
      return _package
    })
    Product.packages = [ ...Packages ]
  }
  return {
    props: {
      Product: Product

    }
  }
}