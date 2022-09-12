import Link from 'next/link'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Hero({ products, isLoading }){
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
    <div id="product-intro" className="w-full pt-10 lg:py-16 dark:bg-slate-900 bg-white">
      <div className="2xl:w-8/12 2xl:mx-auto">
        <div className="max-w-7xl mx-auto px-8 sm:px-6 md:px-12 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-lg dark:text-green-300 text-indigo-600 font-semibold tracking-wide uppercase">Pick a product and get started!</h2>
            <p className="mt-2 text-5xl leading-tight sm:leading-tight font-extrabold tracking-tight dark:text-slate-200 text-gray-900 sm:text-5xl">
              Order for a landing page design, corporate website design or even an e-commerce website.
            </p>
            <p className="mt-4 max-w-4xl leading-9 text-xl dark:text-slate-300 text-gray-500 lg:mx-auto">
              WLorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
              accusamus quisquam. lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
              accusamus quisquam.
            </p>
          </div>
        </div>

        <div className="w-full mx-auto py-6 sm:py-10 px-4 md:px-8 sm:px-6 md:px-10 lg:px-14 xl:px-28">
          
          {!!(!isLoading && products.length) && (
            <Carousel sliderClass="mt-6" itemClass="px-4" containerClass="pb-8 flex justify-between" responsive={responsive}>
              {products?.map((product) => (
                product?.packages?.map(_package => {
                  return (
                    <div key={_package?._id} className="rounded-lg overflow-hidden dark:bg-slate-800 dark:shadow-none shadow-lg group relative">
                      <div className="w-full min-h-64 bg-gray-200 overflow-hidden group-hover:opacity-75">
                        <img src={process.env.NEXT_PUBLIC_API_PUBLIC_URL + _package?.gallery[0]?.path} alt={_package?.name} className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
                      </div>
                      <div className="mt-4 flex justify-between px-4 pb-4">
                        <div>
                          <h3 className="text-lg dark:text-green-400 text-gray-800 font-bold">
                            <Link href={`/products/${product?.slug}/${_package?.slug}`}>
                              <a>
                                <span aria-hidden="true" className="absolute inset-0" />
                                {_package?.name}
                              </a>
                            </Link>
                          </h3>
                          <p className="mt-1 text-lg dark:text-slate-300 text-gray-500"> {_package?.category} </p>
                        </div>
                        <p className="text-md font-bold text-teal-600"> {_package.currency?.symbol + _package?.price} </p>
                      </div>
                    </div>
                  )
                })
              ))}
            </Carousel>
          )}
          
          {!!(!isLoading && !products.length) && <div className="flex justify-center"> No packages yet! </div>}
          
          {isLoading && <div className="flex justify-center"> Loading packages... </div>}

        </div>
      </div>
    </div>
  )
}