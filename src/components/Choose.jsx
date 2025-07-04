import React from "react";

export const WhyChooseUs = () => {
  const cards = [
    {
      title: "Officially Certified",
      desc: "Approved by SRMIST for quality & design",
      image: "https://c.animaapp.com/uSmv2gID/img/image-29@2x.png",
    },
    {
      title: "Sustainability",
      desc: "Approved by SRMIST for quality & design",
      image: "https://c.animaapp.com/uSmv2gID/img/image-28@2x.png",
    },
    {
      title: "Eco-Friendly & Student-Priced",
      desc: "Approved by SRMIST for quality & design",
      image: "https://c.animaapp.com/uSmv2gID/img/image-30@2x.png",
    },
  ];

  return (
    <section className="bg-white py-12 px-6 sm:px-8 md:px-12 lg:px-24 xl:px-32 font-outfit">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-[#10294b] text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-12">
          Why Choose Us?
        </h2>

        {/* Green border box */}
        <div className="relative border border-[#0a9345] rounded-[40px] px-6 py-20 md:py-16 max-w-5xl mx-auto mt-60">
          {/* Cards */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-6 lg:gap-10 mt-[-220px] mb-2">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white w-full max-w-[250px] h-auto sm:h-[312px] text-center rounded-[20px] shadow-md px-6 py-8 flex flex-col items-center"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-[70px] h-[70px] sm:w-[75px] sm:h-[75px] mb-4"
                />
                <h3 className="text-[#10294b] text-[16px] sm:text-[18px] md:text-[20px] font-semibold mb-2 leading-snug">
                  {card.title}
                </h3>
                <p className="text-[#757575] text-sm sm:text-base leading-normal">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Green Circles aligned under cards */}
          <div className="absolute bottom-[-38px] w-full flex flex-col sm:flex-row justify-around items-center gap-4 sm:gap-0 px-4 sm:px-10 md:px-20">
            {[0, 1, 2].map((index) => (
              <div key={index} className="relative w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]">
                <div className="absolute inset-0 bg-[#f4f1eb] rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 w-[34px] h-[34px] sm:w-[42px] sm:h-[42px] bg-[#0a9345] rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute top-1/2 left-1/2 w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};