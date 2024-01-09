import React from 'react';

import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';

const TechStack = () => {
  const responsive = {
    superLargeDesktop: {
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
      items: 3
    }
  };

  const tech_stack_images = [
    {
      dark: '/images/tech-stack/javascript.png',
      class: 'scale-45 md:scale-65',
    },
    {
      dark: '/images/tech-stack/nodejs.svg',
    },
    {
      dark: '/images/tech-stack/tailwindcss-light.png',
      light: '/images/tech-stack/tailwindcss.png',
    },
    {
      dark: '/images/tech-stack/mongodb-light.png',
      light: '/images/tech-stack/mongodb.png',
    },
    {
      dark: '/images/tech-stack/bootstrap.png',
      class: 'scale-45 md:scale-65',
    },
    {
      dark: '/images/tech-stack/firebase-light.png',
      light: '/images/tech-stack/firebase.png',
    },
    {
      dark: '/images/tech-stack/php.png',
      class: 'scale-65 md:scale-75',
    },
    {
      dark: '/images/tech-stack/docker.avif',
    },
    {
      dark: '/images/tech-stack/python-light.png',
      light: '/images/tech-stack/python.png',
    },
    {
      dark: '/images/tech-stack/redis-light.png',
      light: '/images/tech-stack/redis.png',
      class: '',
    },
    {
      dark: '/images/tech-stack/flask.png',
      class: '',
    },
    {
      dark: '/images/tech-stack/react-light.png',
      light: '/images/tech-stack/react.png',
      class: '',
    },
    {
      dark: '/images/tech-stack/laravel.png',
      class: '',
    },
    {
      dark: '/images/tech-stack/git-light.png',
      light: '/images/tech-stack/git.png',
    },
    {
      dark: '/images/tech-stack/expressjs-light.svg',
      light: '/images/tech-stack/expressjs.png',
    },
    {
      dark: '/images/tech-stack/tensorflow-light.png',
      light: '/images/tech-stack/tensorflow.png',
    },
    {
      dark: '/images/tech-stack/mysql.png',
      class: 'md:scale-75',
    },
    {
      dark: '/images/tech-stack/pytorch-light.png',
      light: '/images/tech-stack/pytorch.png',
    },
    {
      dark: '/images/tech-stack/opencv-light.png',
      light: '/images/tech-stack/opencv.png',
      class: '',
    },
    {
      dark: '/images/tech-stack/onnx-light.png',
      light: '/images/tech-stack/onnx.png',
    },
    {
      dark: '/images/tech-stack/bash-light.png',
      light: '/images/tech-stack/bash.png',
      class: 'md:scale-85',
    }
  ]

  return (
    <div className="dark:bg-dark-mode-secondary bg-theme-secondary/10 w-full px-8 md:px-12 lg:px-20 xl:px-28 pt-8 lg:pt-12 pb-10 lg:pb-14">
      <div className="2xl:w-8/12 2xl:mx-auto">
        <div className="w-full md:w-3/3 mx-auto sm:mb-6">
          <h1 className="xl:text-4xl md:text-3xl font-nunito-black text-xl text-center text-theme-secondary font-extrabold mb-5 pt-4">
            We are versatile with amazing tools.
          </h1>
        </div>
        
        <Carousel
          itemClass="flex items-center px-12 justify-center"
          additionalTransfrom={0}
          responsive={responsive}
          autoPlaySpeed={3000}
          centerMode={false}
          arrows={false}

      draggable
      focusOnSelect={false}
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}


          swipeable
          autoPlay
          infinite>
          {tech_stack_images.map((image) => (
            <div key={image} className={image?.class}>
              <img src={image?.light || image.dark} className="dark:hidden" />
              <img src={image.dark} className="hidden dark:block" />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default TechStack;