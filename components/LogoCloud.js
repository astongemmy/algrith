import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default class LogoCloud extends React.Component { 
  constructor() { super() }
  render() {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 5
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 3
      }
    };
    const logo_cloud = [
      "https://cdn.tuk.dev/assets/adidas-dark.png",
      "https://cdn.tuk.dev/assets/channel-dark.png",
      "https://cdn.tuk.dev/assets/nike-dark.png",
      "https://cdn.tuk.dev/assets/toyota-dark.png",
      "https://cdn.tuk.dev/assets/gs1-dark.png",
      "https://cdn.tuk.dev/assets/berry-dark.png",
      "https://cdn.tuk.dev/assets/min-dark.png",
      "https://cdn.tuk.dev/assets/honda-dark.png"
    ]
    
    return (
      <div className="bg-slate-100 w-full px-8 md:px-16 xl:px-28 pt-4 md:pt-8 pb-4 md:pb-10 lg:pb-12">
        <div className="w-full md:w-3/3 mx-auto sm:mb-6">
          <h1 className="xl:text-5xl md:text-3xl text-xl text-center md:text-left text-gray-800 font-extrabold mb-5 pt-4">
            Partnerships with Coveted Brands
          </h1>
          {/* <p className="text-base md:text-lg lg:text-xl text-center text-gray-600 font-normal xl:w-10/12 xl:mx-auto">
            Our success has come from being committed to the property and investing in the development of the product to maximize sales. At the same time and maintaining the integrity.
          </p> */}
        </div>
        
        <Carousel autoPlay={ true } infinite={ true } arrows={ false } responsive={ responsive }>
          {logo_cloud.map((logo) => {
            return (
              <div className="flex scale-65 justify-center">
                <img src={ logo } alt />
              </div>
            )
          })}
        </Carousel>
      </div>
    )
  }
}