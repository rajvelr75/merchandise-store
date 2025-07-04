import Fruits from '../assets/fruits.png';

export const SRMFarmFresh = () => {
  return (
    <section className="bg-[#fffaf4] py-12 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 font-outfit lg:py-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-14">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-[#10294b] text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
            SRMIST Farm Fresh
          </h2>
          <p className="text-[#757575] text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            Shop fruits, herbs & greens from our university's own fields — now available online & on campus.
          </p>

          {/* Product Icons */}
          <div className="mt-6 flex justify-center lg:justify-start flex-wrap gap-4 sm:gap-6">
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
                className="w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] bg-white shadow-md rounded-[16px] flex items-center justify-center hover:shadow-lg transition duration-300"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="object-contain w-[50px] h-[50px] sm:w-[70px] sm:h-[70px]"
                />
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="mt-8">
            <button className="bg-[#a38e75] text-white text-sm sm:text-base font-medium px-6 py-2.5 rounded-[12px] shadow-md hover:bg-[#8a7863] transition">
              Know More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={Fruits}
            alt="Basket of Vegetables"
            className="w-full max-w-[260px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[450px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};