import Link from 'next/link';
import React from 'react';

const MissionStatement = () => {
  return (
    <div className="relative bg-white pt-10 md:pt-16 lg:pt-24 py-24 px-2 md:px-4 lg:px-16 xl:px-28 w-full dark:bg-gray-800">
      <div className="relative overflow-hidden 2xl:w-8/12 2xl:mx-auto">
        <div className="md:flex justify-between relative mx-auto px-4 sm:px-6 lg:px-0 sm:static">
          <div className="lg:pr-28 xl:pr-32 px-2 md:px-auto">
            <h1 className="text-4xl font-semibold text-rose-500 leading-tight sm:leading-tight sm:text-7xl">
              Let us handle your online presence and visibillity while you focus on your business.
            </h1>
            <p className="mt-4 leading-relaxed text-xl md:leading-relaxed dark:text-slate-300 text-gray-600">
              <span className="hidden lg:inline">
                Delegate your online presence to us! We specialize in enhancing visibility, managing content, and optimizing engagement.{' '}
              </span>
              Concentrate on business growth, while we ensure your brand shines brightly in the digital landscape.
              <span className="hidden lg:inline"> Elevate your online journey with our expertise.</span>
            </p>
            <Link
              className="mt-6 md:mt-8 lg:mt-10 inline-flex items-center gap-4 text-center dark:bg-opacity-50 bg-teal-500 border border-transparent rounded-md py-2 px-6 text-xl text-white hover:bg-indigo-700"
              href="/products">
              Learn how
              <i className="bi bi-megaphone-fill"></i>
            </Link>
          </div>

          <div className="sm:max-w-lg mt-14 md:mt-0 px-2 md:px-auto">
            <div className="rounded-lg overflow-hidden">
              <img src="./images/illustrations/dribbble.gif" alt="" className="filter dark:brightness-75 w-full h-full object-center object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionStatement;