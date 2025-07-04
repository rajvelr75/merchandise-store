import { useState, useEffect } from "react";

export const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://c.animaapp.com/uSmv2gID/img/image-15.png",
    "https://c.animaapp.com/uSmv2gID/img/image-20.png",
    "https://c.animaapp.com/uSmv2gID/img/group-6@4x.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="bg-white py-10 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 mt-[-50px]">
  <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
    {/* Left Text */}
    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
      <h1 className="text-[#454545] text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-4sxl font-medium mb-4">
        Official SRMIST Merchandise Store
      </h1>
      <img
        src="https://c.animaapp.com/uSmv2gID/img/the-collective.png"
        alt="The Collective"
        className="w-[220px] sm:w-[280px] md:w-[360px] lg:w-[420px] mb-6"
      />
      <p className="text-[#454545] text-base sm:text-lg md:text-xl lg:text-2xl mb-6 max-w-md lg:max-w-full">
        Wear the Legacy. Live the Spirit.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm sm:max-w-none justify-center lg:justify-start">
        <Button variant="primary">Shop Now</Button>
        <Button variant="secondary">Visit Campus Store</Button>
      </div>
    </div>

    {/* Right Carousel Image */}
    <div className="w-full lg:w-1/2 h-[280px] sm:h-[320px] md:h-[400px] lg:h-[480px] xl:h-[520px] relative">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Hero ${index + 1}`}
            className="w-full h-full object-contain object-center"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

const Button = ({ variant = "primary", children }) => {
  const baseClasses =
    "px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-medium text-sm sm:text-base transition-all duration-300 transform hover:scale-105";
  const primaryClasses =
    "bg-[#193f64] text-white hover:bg-[#10294b] hover:shadow-md";
  const secondaryClasses =
    "bg-[#a38e75] text-white hover:bg-[#8a7862] hover:shadow-md";

  return (
    <button
      className={`${baseClasses} ${
        variant === "primary" ? primaryClasses : secondaryClasses
      }`}
    >
      {children}
    </button>
  );
};
