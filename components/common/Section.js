import React from 'react'
import TestimonialCard from '../TestimonialCard';

export default class Section extends React.Component {    
  constructor() { super() }

  render() {
    const { title, items, illustration } = this.props.payload;
    
    return (
      <div id={ title.text } className="relative py-8 md:py-16 px-1 xxl:px-32 w-full dark:bg-black">
        <div 
          className={`
            relative flex 
            justify-center items-center 
            w-3/4 md:2/4 lg:w-auto mb-8 lg:mb-0 mx-auto md:absolute 
            md:-${illustration.align.y}-${illustration.dimension.md.y} 
            md:-${illustration.align.x}-${illustration.dimension.md.x} 
            lg:-${illustration.align.y}-${illustration.dimension.lg.y} 
            lg:-${illustration.align.x}-${illustration.dimension.lg.x} 
            shadow-xl rounded-full overflow-hidden p-8 transform 
            md:scale-${ illustration.dimension.md.scale } 
            lg:scale-${ illustration.dimension.lg.scale } 
            animation-all duration-1000 ease-in-out`
          }>
          <img className="rounded-full" src={ illustration.src } alt={ `${ title.text }-illustration` } />
        </div>
        <h1 className={`text-center md:text-${ title.align } relative uppercase py-4 text-3xl md:text-4xl text-gray-600 mx-auto w-full md:w-10/12 font-bold`}>
          { title.text }
        </h1>
        <div className="relative flex flex-wrap xl:flex-nowrap justify-start lg:justify-between items-center bg-grey-900 py-4 lg:py-16 px-2 lg:px-32 w-full dark:bg-black">
          {(title.text.toLowerCase() == "testimonials" && <TestimonialCard testimonials={ items } /> )}
        </div>
      </div>
    )
  }
}