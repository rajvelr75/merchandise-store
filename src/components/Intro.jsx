import React from 'react';
import storeImage from '../assets/Mask group.png';

export const MoreThanMerch = () => {
  return (
    <section className="bg-[#FFFAF4] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-[#002147] text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-snug">
            More Than Merch – It’s SRM’s Collective Identity
          </h2>
          <p className="text-[#1a1a1a] text-base sm:text-lg md:text-[18px] leading-relaxed">
            Welcome to The Collective, your one-stop destination for authentic SRMIST merchandise.
            Designed by the community, for the community – every product you wear, carry, or gift
            tells a story of belonging and pride.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={storeImage}
            alt="SRM The Collective Storefront"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};
