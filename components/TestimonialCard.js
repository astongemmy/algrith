import React from 'react';

const TestimonialCard = ({ testimonials }) => {    
  return (
    <>
      {testimonials.map((testimonial) => (
        <div key={ testimonial.name } data-aos="fade-up" className="w-full md:w-1/3 m-4 md:m-0 px-2">
          <figure className="overflow-hidden 2xl:flex bg-slate-100 dark:bg-slate-800 rounded-xl p-8">
            <img className="w-24 h-24 rounded-full mx-auto" src={ testimonial.avatar } />
            <div className="py-6 xl:pl-6 text-center xl:text-left space-y-4">
              <blockquote>
                <p className="text-lg dark:text-slate-300 text-gray-500">
                  “{ testimonial.text }”
                </p>
              </blockquote>
              
              <figcaption className="font-medium">
                <div className="text-xl text-sky-700 dark:text-teal-600">
                  { testimonial.name }
                </div>
                <div className="text-slate-700 dark:text-slate-500">
                  { `${ testimonial.designation }, ${ testimonial.location }` }
                </div>
              </figcaption>
            </div>
          </figure>
        </div>
      ))}
    </>
  );
};

export default TestimonialCard;