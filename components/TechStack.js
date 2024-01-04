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
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  const tech_stack_images = [
    '/images/tech-stack/firebase.png',
    '/images/tech-stack/python.png',
    '/images/tech-stack/react.png',

    '/images/tech-stack/tensorflow.png',
    '/images/tech-stack/pytorch.png',
    '/images/tech-stack/opencv.png',
    '/images/tech-stack/onnx.png',

    '/images/tech-stack/bash.png',
  ]

  return (
    <div className="dark:bg-slate-800 bg-yellow-50 w-full px-8 md:px-12 lg:px-20 xl:px-28 pt-8 lg:pt-12 pb-10 lg:pb-14">
      <div className="2xl:w-8/12 2xl:mx-auto">
        <div className="w-full md:w-3/3 mx-auto sm:mb-6">
          <h1 className="xl:text-4xl md:text-3xl font-nunito-black text-xl text-center dark:text-yellow-300 text-yellow-500 font-extrabold mb-5 pt-4">
            We are versatile with amazing tools.
          </h1>
        </div>
        
        <Carousel
          itemClass="flex items-center px-4 md:scale-65 justify-center"
          customTransition="all 1s linear"
          rewindWithAnimation={false}
          transitionDuration={1000}
          additionalTransfrom={0}
          responsive={responsive}
          shouldResetAutoplay
          autoPlaySpeed={3}
          rewind={false}
          arrows={false}
          swipeable
          draggable
          autoPlay
          infinite>
          {tech_stack_images.map((image) => <div key={image}><img src={image} alt="" /></div>)}
        </Carousel>
      </div>
    </div>
  )
};

export default TechStack;