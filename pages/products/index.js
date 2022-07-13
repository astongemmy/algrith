import Head from 'next/head'
import apiClient from '../../apiClient/product'
import Layout from '../../components/Layout'
import BreadCrumbs from '../../components/BreadCrumbs'
import ProductPackageCard from '../../components/ProductPackageCard';

export default function Products({ Products, isDataSet, error }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1" />
        <title> Products | Algrith </title>
      </Head>
      <main>
        <section className="w-full pt-4 md:pt-12 pb-10 px-4 md:px-12 lg:px-14 xl:px-24 rounded-b-10xl overflow-hidden 2xl:w-8/12 2xl:mx-auto">
          <div className="px-4 md:px-2 mx-auto">
            <div className="flex flex-wrap">
              <div className="lg:pl-4">
                <BreadCrumbs page="products" />
              </div>
              {isDataSet && (<div className="w-full px-0 md:px-0 lg:px-4 xl:px-4">
                {Products?.map((product) => {
                  return (
                    <div key={ product?.name }>
                      <h2 className="my-6 mb-4 text-3xl md:text-4xl font-heading font-semibold dark:text-slate-300 text-black">
                        <span className="capitalize">{ product?.name }</span>
                      </h2>                      
                      <div className="flex flex-wrap overflow-hidden md:-mx-2 xl:-mx-11 md:py-8 md:my-8 md:mt-0">
                        {product?.packages.map((item) => {
                          return <ProductPackageCard key={ item?._id } item={ item } slug={product?.slug} />
                        })}
                      </div>
                    </div>
                  )
                })}
              </div>)}
              {!isDataSet && (<div className="flex justify-center w-full">
                No products at the moment!
              </div>)}
              {error && (<div className="flex justify-center w-full">
                Error occurred!
              </div>)}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export async function getServerSideProps({ params }) {
  const { getProducts } = apiClient()
  const GetProducts = async () => {
    const Payload = {
      Products: [],
      error: false,
      isDataSet: false
    }
    const { status, data, error } = await getProducts()
    if (error) Payload.error = true
    if (status && data.length) {
      Payload.Products = data.filter(product => product.packages.length)
      if (Payload.Products.length) Payload.isDataSet = true
    }
    return Payload;
  }
  const { Products, isDataSet, error } = await GetProducts()
  return {
    props: { Products, isDataSet, error }
  }
}