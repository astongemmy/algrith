import React from 'react'
import Link from 'next/link'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Hero({ products }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div id="product-intro" className="w-full pt-10 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-8 sm:px-6 md:px-12 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-lg text-indigo-600 font-semibold tracking-wide uppercase">Pick a product and get started!</h2>
          <p className="mt-2 text-5xl leading-tight sm:leading-tight font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Order for a landing page design, corporate website design or even an e-commerce website.
          </p>
          <p className="mt-4 max-w-4xl leading-9 text-xl text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
            accusamus quisquam. lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
            accusamus quisquam.
          </p>
        </div>
      </div>

      <div className="w-full mx-auto py-6 sm:py-10 px-4 md:px-8 sm:px-6 md:px-10 lg:px-14 xl:px-28">
        <Carousel sliderClass="mt-6" itemClass="px-4" containerClass="pb-8 flex justify-between" responsive={responsive}>
          {products.map((product) => (
            <div key={product.package.id} className="rounded-lg overflow-hidden shadow-lg group relative">
              <div className="w-full min-h-64 bg-gray-200 overflow-hidden group-hover:opacity-75">
                <img src={product.package.gallery[0]} alt={product.package.name} className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
              </div>
              <div className="mt-4 flex justify-between px-4 pb-4">
                <div>
                  <h3 className="text-lg text-gray-700 font-bold">
                    <Link href={`/products/${product.slug}/${product.package.id}`}>
                      <a>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.package.name}
                      </a>
                    </Link>
                  </h3>
                  <p className="mt-1 text-lg text-gray-500"> {product.package.category} </p>
                </div>
                <p className="text-md font-bold text-black"> {product.package.currency.symbol + product.package.price} </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}