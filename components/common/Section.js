import React from 'react'
import TestimonialCard from './TestimonialCard';

export default class Section extends React.Component {    
  constructor() { super() }

  render() {
    const { title, items, illustration } = this.props.payload;
    
    return (
      <div id={ title } className="relative py-16 px-1 xxl:px-32 w-full dark:bg-black">
        <div className={`relative flex justify-center items-center w-3/4 lg:w-auto mb-8 lg:mb-0 mx-auto lg:absolute lg:-top-64 lg:-${ illustration.align }-28 shadow-xl rounded-full overflow-hidden p-8 transform lg:scale-65 animation-all duration-1000 ease-in-out`}>
          <img className="rounded-full" src={ illustration.src } alt={ `${ title }-illustration` } />
        </div>
        <h1 className="relative uppercase py-4 text-3xl md:text-4xl text-gray-600 mx-auto w-full text-center font-bold">
          { title }
        </h1>
        <div className="relative flex flex-wrap xl:flex-nowrap justify-start lg:justify-between items-center bg-grey-900 py-4 lg:py-16 px-2 lg:px-32 w-full dark:bg-black">
          {(title.toLowerCase() == "testimonials" && <TestimonialCard testimonials={ items } /> )}
        </div>
      </div>
    )
  }
}