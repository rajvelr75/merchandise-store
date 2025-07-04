import { useState, useEffect } from "react";

export const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://c.animaapp.com/uSmv2gID/img/image-15.png",
    "https://c.animaapp.com/uSmv2gID/img/image-20.png",
    "https://c.animaapp.com/uSmv2gID/img/group-6@4x.png"
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
    <section className="relative w-full min-h-[80vh] flex flex-col-reverse lg:flex-row items-center justify-between px-6 sm:px-8 md:px-12 lg:px-24 xl:px-32 py-12 lg:py-20">
      {/* Text Content - consistent left margin */}
      <div className="w-full lg:w-1/2 flex flex-col items-start justify-center text-left z-10 mt-10 lg:mt-0 pl-0 lg:pl-[5%] xl:pl-[8%]">
        <img
          src="https://c.animaapp.com/uSmv2gID/img/the-collective.png"
          alt="The collective"
          className="w-full max-w-[280px] sm:max-w-[360px] md:max-w-[400px] xl:max-w-[500px] mb-6"
        />

        <h1 className="text-[#454545] text-lg sm:text-2xl md:text-3xl lg:text-4xl font-medium mb-4">
          Official SRMIST Merchandise Store
        </h1>

        <p className="text-[#454545] text-base sm:text-lg md:text-xl lg:text-2xl font-normal mb-6">
          Wear the Legacy. Live the Spirit.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-xs sm:max-w-md">
          <Button variant="primary">Shop Now</Button>
          <Button variant="secondary">Visit Campus Store</Button>
        </div>
      </div>

      {/* Image Carousel - consistent right margin */}
      <div className="w-full lg:w-1/2 h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] xl:h-[500px] relative overflow-hidden pr-0 lg:pr-[5%] xl:pr-[8%]">
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
    </section>
  );
};

const Button = ({ variant = "primary", children }) => {
  const baseClasses =
    "px-4 py-2 sm:px-5 sm:py-3 rounded-lg font-medium text-sm sm:text-base transition-all duration-300 transform hover:scale-105";
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