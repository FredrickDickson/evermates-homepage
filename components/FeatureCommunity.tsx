import React from 'react';

const FeatureCommunity: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-24">
          
          {/* Text Side */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 leading-tight mb-6">
              Join thousands of professionals who solve everyday problems with Quests.
            </h2>
          </div>

          {/* Image Side */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
             <img
                src="/icon_3.png"
                alt="Professionals collaborating"
                className="w-full max-w-md h-auto object-cover rounded-lg"
              />
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeatureCommunity;