import React from 'react';

const FeatureParrot: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          
          {/* Image Side */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <div className="relative rounded-2xl overflow-hidden shadow-xl md:shadow-none md:rounded-none md:overflow-visible">
              <img
                src="/macaw_parrot.png"
                alt="Colorful Macaw Parrot"
                className="w-full max-w-sm h-auto object-cover rounded-lg transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 leading-tight">
              Own the course. Master every topic with knowledge checks.
            </h2>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeatureParrot;