import React from 'react'

export default class TestimonialCard extends React.Component {    
  constructor() { super() }

  render() {
    const { testimonials } = this.props;
    const TestimononyCard = testimonials.map((testimonial) => {
      return (
        <div key={ testimonial.name } data-aos="fade-up" className="w-full md:w-1/3 m-4 md:m-0 md:p-4 lg:p-4 xl:p-8">
          <figure className="overflow-hidden xl:flex bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
            <img className="w-24 h-24 rounded-full mx-auto" src={ testimonial.avatar } alt="" width="384" height="512" />
            <div className="py-6 xl:pl-6 text-center xl:text-left space-y-4">
              <blockquote>
                <p className="text-lg font-medium">
                  “{ testimonial.text }”
                </p>
              </blockquote>
              <figcaption className="font-medium">
                <div className="text-xl text-sky-500 dark:text-sky-400">
                { testimonial.name }
                </div>
                <div className="text-slate-700 dark:text-slate-500">
                  { `${ testimonial.designation }, ${ testimonial.location }` }
                </div>
              </figcaption>
            </div>
          </figure>
        </div>
      )
    });
    
    return (<>{ TestimononyCard }</>)
  }
}

{/* <div key={ testimonial.name } data-aos="fade-up" className="w-full lg:w-2/4 xl:w-1/3 m-4 md:m-0 md:p-10 lg:p-8"></div> */}