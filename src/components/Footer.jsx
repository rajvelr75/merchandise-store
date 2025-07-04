import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-[#193f64] text-white py-12 px-4 md:px-10 font-[Source_Sans_Pro]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12">
        {/* Logo Section */}
        <div className="flex-shrink-0 flex justify-center lg:justify-start">
          <img
            src="https://c.animaapp.com/uSmv2gID/img/srmist-logo-hwite-3--1@2x.png"
            alt="SRMIST Logo"
            className="w-[180px] md:w-[220px] object-contain"
          />
        </div>

        {/* Contact Section */}
        <div className="flex flex-col gap-4 items-start">
          {[
            {
              icon: "https://c.animaapp.com/uSmv2gID/img/icon.svg",
              text: "+91 44 27417000",
            },
            {
              icon: "https://c.animaapp.com/uSmv2gID/img/icon-1.svg",
              text: "+91 44 27417777",
            },
            {
              icon: "https://c.animaapp.com/uSmv2gID/img/icon-2.svg",
              text: "+080 69087000",
            },
            {
              icon: "https://c.animaapp.com/uSmv2gID/img/icon-3.svg",
              text: "infodesk@srmist.edu.in",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <img src={item.icon} alt="Icon" className="w-[28px] h-[28px]" />
              <span className="text-lg md:text-xl leading-snug whitespace-nowrap">
                {item.text}
              </span>
            </div>
          ))}
        </div>

        {/* Links Section */}
        <div className="flex flex-col gap-4 items-start">
          {[
            {
              icon: "https://c.animaapp.com/uSmv2gID/img/fas-vr-cardboard.svg",
              text: "Virtual Tour",
            },
            {
              icon: "https://c.animaapp.com/uSmv2gID/img/icon-4.svg",
              text: "Videos",
            },
            {
              icon: "https://c.animaapp.com/uSmv2gID/img/icon-5.svg",
              text: "Community Radio",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <div
                className="w-[40px] h-[40px] bg-no-repeat bg-center bg-contain"
                style={{ backgroundImage: `url(${item.icon})` }}
              ></div>
              <span className="text-lg md:text-xl leading-snug whitespace-nowrap">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};
