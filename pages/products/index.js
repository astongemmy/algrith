import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { getAllProducts } from '../../lib/products';
import Layout from '../../components/Layout'
import BreadCrumbs from '../../components/BreadCrumbs'
import ProductPackageCard from '../../components/ProductPackageCard';

export default function Products({ Products }) {
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
                    <div key={ product.name }>
                      <h2 className="my-6 mb-4 text-3xl md:text-4xl font-heading font-medium">
                        <span className="capitalize">{ product.name }</span> products
                      </h2>                      
                      <div className="flex flex-wrap overflow-hidden rounded-2xl md:py-8 md:my-8 md:mt-0">
                        {product.packages.map((item) => {
                          return <ProductPackageCard key={ item.id } item={ item } slug={product.slug} />
                        })}
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
  return {
    props: {
      Products: getAllProducts()
    }
  }
}