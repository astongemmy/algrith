const WhoWeAre = () => {
  return (
    <div id="product-intro" className="w-full pt-10 lg:py-16 dark:bg-slate-900 bg-white">
      <div className="2xl:w-8/12 2xl:mx-auto">
        <div className="max-w-7xl mx-auto px-8 sm:px-6 md:px-12 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-lg dark:text-green-300 text-indigo-600 font-semibold tracking-wide uppercase">
              Welcome! We're sure you would like an introduction.
            </h2>
            <p className="mt-2 text-5xl leading-tight sm:leading-tight font-extrabold tracking-tight dark:text-slate-200 text-gray-900 sm:text-5xl">
              Who we are.
            </p>
            <p className="mt-4 max-w-4xl leading-9 text-xl dark:text-slate-300 text-gray-500 lg:mx-auto">
              At Algrith, we are committed to providing sophisticated, secure, and accessible applications tailored for clients across both public and private sectors.
              By leveraging cutting-edge technology and frameworks, we specialize in delivering scalable and resilient software solutions that precisely align with the dynamic demands of your business.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default WhoWeAre;