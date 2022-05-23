import React from 'react'
import Link from 'next/link'

export default class Outline extends React.Component {
    
    constructor() {
        super()
    }

    render() {

        const { title, items, illustration } = this.props.outline;
        
        const outlines = items.map((outline) => {
            return (
                <div key={outline.title} data-aos="fade-up" className="w-full lg:w-2/4 xl:w-1/3 m-4 md:m-0 p-4 md:p-10 lg:p-8">
                    <div className="w-full p-8 lg:p-16 bg-gray-100 text-gray-600 text-xl md:leading-9 rounded-xl text-center shadow">
                        <h2 className="uppercase text-xl md:text-2xl text-navyblue font-semibold mb-4">
                            {outline.title}
                        </h2>
                        <span className="flex justify-center items-center my-8 mx-auto p-1 text-5xl text-green-300 bg-green-100 w-20 h-20 rounded-full">
                            <i className={outline.icon}></i>
                        </span>
                        {outline.content}
                    </div>
                </div>
            )
        });

        return (

            <div id="outline" className="relative py-16 px-1 xxl:px-32 w-full dark:bg-black">
                <span className="md:-top-56 md:-left-32 lg:scale-35"></span>
                <div className={`relative flex justify-center items-center w-3/4 md:w-2/4 lg:w-auto mb-8 lg:mb-0 mx-auto md:absolute md:-${illustration.align.y}-${illustration.dimension.y} md:-${illustration.align.x}-${illustration.dimension.x} shadow-xl rounded-full overflow-hidden p-8 transform md:scale-${ illustration.dimension.scale } animation-all duration-1000 ease-in-out`}>
                    <img className="rounded-full" src={ illustration.src } alt={ `${ title }-illustration` } />
                </div>

                <h1 className="relative uppercase py-4 text-3xl md:text-4xl text-gray-600 mx-auto w-full text-center font-bold">
                    {title}
                </h1>

                <div className="relative flex flex-wrap xl:flex-nowrap justify-start xl:justify-between items-center bg-grey-900 py-4 lg:py-16 px-2 lg:px-32 w-full dark:bg-black">
                    {outlines}
                </div>

            </div>

        )
    }
}
