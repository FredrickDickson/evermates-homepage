import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-blue-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Text Content */}
          <div className="w-full lg:w-5/12 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-gray-900 leading-tight mb-6">
              Achieve your learning goals <br className="hidden lg:block" />
              with Evermates.
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Explore multiple choice questions or prove yourself through a quest.
            </p>
            <div>
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-violet-700 hover:bg-violet-800 transition-colors shadow-sm"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Illustration/Image */}
          <div className="w-full lg:w-6/12 flex justify-center lg:justify-end">
            <img
              className="w-full max-w-lg h-auto object-contain"
              src="/icon_1.png"
              alt="Person working at desk"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;