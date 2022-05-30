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
import LeftNav from '../../components/LeftNav'
import RightNav from '../../components/RightNav'
import ThumbInner from '../../components/ThumbInner'
import ProductDescription from '../../components/ProductDescription';
import OrderRequirements from '../../components/OrderRequirements';
import CheckoutButton from '../../components/CheckoutButton';
import Reviews from '../../components/Reviews';
import PackageDescription from '../../components/PackageDescription';
import PackageSelector from '../../components/PackageSelector';

export default function Product({ Product }) {
  const { viewport } = useViewport();
  const router = useRouter()
  const activePackage = router.query.package_name ? Product.packages.filter((product) => {
    return product.id == router.query.package_name
  })[0] : Product.packages.filter((product) => product.active)[0]
  const [selectedPackage, setSelectedPackage] = useState(activePackage)
  useEffect(() => {
    setSelectedPackage(activePackage)
  }, [Product, router])
  const setPakageGallery = (gallery) => {
    return gallery.map((image) => {
      const sample = { originalClass: "overflow-hidden w-full h-96 lg:h-144 rounded-lg object-center object-cover" }
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
        <section className="w-full pt-4 pb-12 md:pt-12 md:pb-24 px-6 md:px-12 xl:px-28 overflow-hidden">
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
              <OrderRequirements selectedPackage={ selectedPackage } />
              {['sm'].includes(viewport) && <Reviews reviews={selectedPackage.reviews} />}
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
  return {
    props: {
      Product: getProductBySlug(params.slug)
    }
  }
}