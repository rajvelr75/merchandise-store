import React from "react";

export const SRMFarmFresh = () => {
  return (
    <section className="bg-white py-12 px-6 sm:px-8 md:px-12 lg:px-24 xl:px-32 font-outfit lg:mt-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-[#10294b] text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
            SRMIST Farm Fresh
          </h2>
          <p className="text-[#757575] text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
            Shop fruits, herbs & greens from our university's own fields — now available online & on campus.
          </p>

          {/* Product Cards */}
          <div className="mt-6 flex flex-wrap gap-4 sm:gap-6">
            {[
              {
                src: "https://c.animaapp.com/uSmv2gID/img/image-36@2x.png",
                alt: "Carrot",
              },
              {
                src: "https://c.animaapp.com/uSmv2gID/img/image-37@2x.png",
                alt: "Spinach",
              },
              {
                src: "https://c.animaapp.com/uSmv2gID/img/image-38@2x.png",
                alt: "Potatoes",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] bg-white shadow-md rounded-[16px] flex items-center justify-center hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="object-contain w-[60px] h-[60px] sm:w-[80px] sm:h-[80px]"
                />
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="mt-8">
            <button className="bg-[#a38e75] text-white text-sm sm:text-base font-semibold px-6 py-3 sm:px-8 sm:py-3 rounded-[12px] shadow-md hover:bg-[#8a7863] transition-colors duration-300">
              Know More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
          <img
            src="https://c.animaapp.com/uSmv2gID/img/image-35.png"
            alt="Basket of Vegetables"
            className="w-full max-w-[300px] sm:max-w-[360px] md:max-w-[400px] lg:max-w-[450px] object-contain rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};
