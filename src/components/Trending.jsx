import { useState, useEffect } from 'react';

export const TrendingNow = () => {
  const products = [
    {
      id: 1,
      name: "Black Tees",
      price: "$799",
      image: "https://c.animaapp.com/uSmv2gID/img/image-21@2x.png",
      aspectRatio: "aspect-[242/351]" // Original ratio from your design
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "$799",
      image: "https://c.animaapp.com/uSmv2gID/img/image-25@2x.png",
      aspectRatio: "aspect-[242/351]"
    },
    {
      id: 3,
      name: "Drink Ware",
      price: "$799",
      image: "https://c.animaapp.com/uSmv2gID/img/image-26@2x.png",
      aspectRatio: "aspect-[242/351]"
    },
    {
      id: 4,
      name: "Keychain",
      price: "$799",
      image: "https://c.animaapp.com/uSmv2gID/img/image-27@2x.png",
      aspectRatio: "aspect-[242/351]"
    }
  ];

  return (
    <section className="w-full bg-[#fffaf4] py-28 px-6 sm:px-8 md:px-12 lg:px-16">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-center">
            <h2 className="font-medium text-[#10294b] text-3xl sm:text-4xl md:text-5xl leading-tight mb-4">
              Trending Now at <br />
              <span className="text-[#4b1110]">The Collective</span>
            </h2>
            <p className="font-normal text-black text-lg sm:text-xl md:text-2xl mb-6 max-w-[480px]">
              All Products in SRMIST are Quality Tested
            </p>
          </div>

          {/* Right Column - Products */}
          <div className="relative">
            {/* View More Link */}
            <div className="flex justify-end mb-6">
              <a href="#" className="font-medium text-[#10294b] text-xl sm:text-2xl hover:underline hover:text-[#4b1110] transition-colors duration-200">
                View More →
              </a>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {products.map((product) => (
                <div 
                  key={product.id}
                  className={`bg-white rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.2)] ${product.aspectRatio} w-full max-w-[242px] flex flex-col items-center justify-center relative overflow-hidden border border-gray-100 transition-shadow duration-300`}
                >
                  {/* Product Image Container */}
                  <div className="w-full h-[70%] flex items-center justify-center p-4">
                    <img
                      className="w-auto h-auto max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-105"
                      alt={product.name}
                      src={product.image}
                      loading="lazy"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="w-full h-[30%] text-center px-4 pb-4 flex flex-col justify-">
                    <h3 className="font-medium text-[#10294b] text-lg md:text-xl mb-1 truncate">
                      {product.name}
                    </h3>
                    <p className="font-bold text-[#4b1110] text-xl md:text-2xl">
                      {product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};