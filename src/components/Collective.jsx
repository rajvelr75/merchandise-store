import React from "react";

export const GetInvolved = () => {
  return (
    <section className="bg-white py-12 px-6 sm:px-8 md:px-12 lg:px-24 xl:px-32 font-outfit lg:py-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-[#10294b] text-2xl sm:text-3xl md:text-4xl font-semibold mb-12">
          Get Involved with The Collective
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {/* Student Creator Program Card */}
          <div className="bg-white rounded-[20px] shadow-[0_4px_8px_rgba(0,0,0,0.05)] px-6 py-10 flex flex-col items-center text-center">
            <img
              src="https://c.animaapp.com/uSmv2gID/img/image-32@2x.png"
              alt="Creator"
              className="w-[100px] h-[100px] sm:w-[110px] sm:h-[110px] mb-4 object-contain"
            />
            <h3 className="text-[#10294b] text-[18px] sm:text-[20px] md:text-[22px] font-semibold mb-3">
              Student Creator Program
            </h3>
            <p className="text-[#757575] text-sm sm:text-base leading-relaxed mb-6 max-w-xs">
              Submit your designs and get <br />
              featured on official merch!
            </p>
            <button className="bg-[#172434] text-white text-sm sm:text-base font-medium px-6 py-3 rounded-[12px] hover:bg-[#10294b] transition duration-300">
              Submit your design
            </button>
          </div>

          {/* Brand Ambassador Program Card */}
          <div className="bg-white rounded-[20px] shadow-[0_4px_8px_rgba(0,0,0,0.05)] px-6 py-10 flex flex-col items-center text-center">
            <img
              src="https://c.animaapp.com/uSmv2gID/img/image-33@2x.png"
              alt="Ambassador"
              className="w-[100px] h-[100px] sm:w-[110px] sm:h-[110px] mb-4 object-contain"
            />
            <h3 className="text-[#10294b] text-[18px] sm:text-[20px] md:text-[22px] font-semibold mb-3">
              Brand Ambassador Program
            </h3>
            <p className="text-[#757575] text-sm sm:text-base leading-relaxed mb-6 max-w-xs">
              Submit your designs and get <br />
              featured on official merch!
            </p>
            <button className="bg-[#a38e75] text-white text-sm sm:text-base font-medium px-6 py-3 rounded-[12px] hover:bg-[#8a7863] transition duration-300">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
