import React from 'react';

import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';

const TechStack = () => {
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
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3
    }
  };

  const tech_stack_images = [
    '/images/tech-stack/bash.png',
    '/images/tech-stack/react.png',
    '/images/tech-stack/pytorch.png',
    '/images/tech-stack/python.png',
    '/images/tech-stack/tensorflow.png',
    '/images/tech-stack/onnx.png',
    '/images/tech-stack/opencv.png',
    '/images/tech-stack/firebase.png',
  ]

  return (
    <div className="dark:bg-slate-800 bg-slate-100 w-full px-8 md:px-12 lg:px-20 xl:px-28 pt-4 md:pt-8 pb-8 md:pb-10 lg:pb-12">
      <div className="2xl:w-8/12 2xl:mx-auto">
        <div className="w-full md:w-3/3 mx-auto sm:mb-6">
          <h1 className="xl:text-4xl md:text-3xl text-xl text-center md:text-left dark:text-slate-300 text-gray-800 font-extrabold mb-5 pt-4">
            Tech Stack
          </h1>
        </div>

        <Carousel autoPlay={true} itemClass="flex items-center px-4 md:scale-65 justify-center" infinite={true} arrows={false} responsive={responsive}>
          {tech_stack_images.map((image) => <div key={image}><img src={image} alt="" /></div>)}
        </Carousel>
      </div>
    </div>
  )
};

export default TechStack;