import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { getAllProducts } from '../../lib/products';
// Components! Starting with master layout component
import Layout from '../../components/Layout'
import BreadCrumbs from '../../components/BreadCrumbs'
import ProductRating from '../../components/ProductRating';
import Link from 'next/link';
import ProductPackageCard from '../../components/ProductPackageCard';

export default function Products({ Products }) {
  console.log(Products)
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1" />
        <title> Products | Algrith </title>
      </Head>
      <main>
        <section className="w-full pt-4 md:pt-12 pb-10 px-4 md:px-10 lg:px-12 xl:px-28 rounded-b-10xl overflow-hidden">
          <div className="px-4 mx-auto">
            <div className="flex flex-wrap">
              <BreadCrumbs page={`products.index`} />
              <div className="w-full px-0 md:px-0 lg:px-4 xl:px-4">
                {Products.map((product) => {
                  return (
                    <div>
                      <h2 className="capitalize my-6 mb-4 text-3xl md:text-4xl font-heading font-medium">
                        { product.slug } products
                      </h2>                      
                      <div className="flex flex-wrap overflow-hidden rounded-2xl md:py-8 md:my-8 md:mt-0">
                        {Object.values(product.packages).map((item) => <ProductPackageCard item={ item }/>)}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const Products = getAllProducts()
  // const { slug, packages, selected } = getProductBySlug(params.slug)
  // const Product = { type: slug, packages, selected }
  return {
    props: {
      Products
    }
  }
}