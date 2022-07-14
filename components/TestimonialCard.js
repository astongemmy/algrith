import React from 'react'

export default function TestimonialCard({ testimonials }) {    
  const TestimononyCard = testimonials.map((testimonial) => {
    return (
      <div key={ testimonial.name } data-aos="fade-up" className="w-full md:w-1/3 m-4 md:m-0 px-2">
        <figure className="overflow-hidden xl:flex bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
          <img className="w-24 h-24 rounded-full mx-auto" src={ testimonial.avatar } alt="" width="384" height="512" />
          <div className="py-6 xl:pl-6 text-center xl:text-left space-y-4">
            <blockquote>
              <p className="text-lg dark:text-slate-300 text-gray-500">
                “{ testimonial.text }”
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-xl text-sky-700 dark:text-green-400">
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
  })
  
  return <> { TestimononyCard } </>
}