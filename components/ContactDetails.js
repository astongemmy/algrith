import React from 'react';

const ContactDetails = () => {
  return (
    <div className="lg:order-3 w-full md:w-2/4 lg:w-3/12 md:px-4 mt-10 md:mt-16">
      <div className="py-4 px-6 mb-4 dark:bg-opacity-50 bg-blue-500 rounded-lg shadow">
        <div className="flex gap-4 justify-between items-center">
          <span className="px-2 flex items-center justify-center w-12 h-12 dark:bg-opacity-50 bg-blue-400 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
            </svg>
          </span>
          <a href="#" data-aos="fade-in" className="px-2 text-white flex justify-center items-center rounded-xl text-2xl h-12 w-12 dark:bg-opacity-50 bg-blue-400 shadow-lg">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" data-aos="fade-in" className="px-2 text-white flex justify-center items-center rounded-xl text-2xl h-12 w-12 dark:bg-opacity-50 bg-blue-400 shadow-lg">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" data-aos="fade-in" className="px-2 text-white flex justify-center items-center rounded-xl text-2xl h-12 w-12 dark:bg-opacity-50 bg-blue-400 shadow-lg">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div className="py-4 px-6 mb-10 dark:bg-opacity-50 bg-gray-400 rounded-lg shadow">
        <div className="flex items-center">
          <span className="px-2 flex items-center justify-center w-12 h-12 mr-2 bg-gray-500 rounded-lg shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#ffffff" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </span>
          <p className="text-lg font-bold dark:text-slate-300 text-white">support@algrith.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;