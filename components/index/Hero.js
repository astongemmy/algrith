import React from 'react'
import Link from 'next/link'
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default class Hero extends React.Component {  
  constructor() { super() }

  render() {

    const features = [
      {
        name: 'Competitive exchange rates',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: GlobeAltIcon,
      },
      {
        name: 'No hidden fees',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: ScaleIcon,
      },
      {
        name: 'Transfers are instant',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: LightningBoltIcon,
      },
      {
        name: 'Mobile notifications',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: AnnotationIcon,
      },
    ]

    const products = [
      {
        id: 1,
        name: 'Landing Page',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
        category: 'Web design',
      },
      {
        id: 2,
        name: 'Corporate website',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
        category: 'Web design',
      },
      {
        id: 3,
        name: 'e-Commerce website',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
        category: 'Web design',
      },
      {
        id: 4,
        name: 'RESTful API',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
        category: 'Web server',
      }
    ]

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
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
    
    return (
      <div id="product-intro" className="w-full pt-10 lg:pb-16 lg:pt-28 lg:pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-8 sm:px-6 md:px-12 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-lg text-indigo-600 font-semibold tracking-wide uppercase">Pick a product and get started!</h2>
            <p className="mt-2 text-5xl leading-lg font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Order for a landing page design, corporate website design or even an e-commerce website.
            </p>
            <p className="mt-4 max-w-4xl leading-9 text-xl text-gray-500 lg:mx-auto">
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
              accusamus quisquam. lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
              accusamus quisquam.
            </p>
          </div>
        </div>

        <div className="w-full max-w-2xl mx-auto py-6 sm:py-10 px-4 md:px-8 sm:px-6 md:px-14 xl:px-0 md:max-w-screen-lg xxl:max-w-screen-xl">
          {/* <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 md:grid-cols-4 xl:gap-x-8"> */}            
            <Carousel sliderClass="mt-6" itemClass="px-4" containerClass="pb-8 flex justify-between" responsive={ responsive }>
              { products.map((product) => (
                <div key={ product.id } className="rounded-lg overflow-hidden shadow-lg group relative">
                  <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 overflow-hidden group-hover:opacity-75 lg:h-80 xl:aspect-none">
                    <img src={ product.imageSrc } alt={ product.imageAlt } className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
                  </div>
                  <div className="mt-4 flex justify-between px-4 pb-4">
                    <div>
                      <h3 className="text-lg text-gray-700 font-bold">
                        <Link href={ product.href }>
                          <a>
                            <span aria-hidden="true" className="absolute inset-0" />
                            { product.name }
                          </a>
                        </Link>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500"> { product.category } </p>
                    </div>
                    <p className="text-md font-bold text-black"> { product.price } </p>
                  </div>
                </div>
              ))}
            </Carousel>
          {/* </div> */}
        </div>
      </div>
    )
  }
}