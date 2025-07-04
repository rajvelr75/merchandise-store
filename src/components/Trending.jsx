export const TrendingNow = () => {
  const products = [
    {
      id: 1,
      name: "Black Tees",
      price: "$799",
      image: "https://c.animaapp.com/uSmv2gID/img/image-21@2x.png",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "$799",
      image: "https://c.animaapp.com/uSmv2gID/img/image-25@2x.png",
    },
    {
      id: 3,
      name: "Drink Ware",
      price: "$799",
      image: "https://c.animaapp.com/uSmv2gID/img/image-26@2x.png",
    },
    {
      id: 4,
      name: "Keychain",
      price: "$799",
      image: "https://c.animaapp.com/uSmv2gID/img/image-27@2x.png",
    },
  ];

  return (
    <section className="w-full bg-[#fffaf4] py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 font-outfit">
      <div className="max-w-7xl mx-auto lg:mt-10 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
          <h2 className="text-[#10294b] text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug mb-4">
            Trending Now at <br />
            The Collective
          </h2>
          <p className="text-[#000000] text-base sm:text-lg md:text-xl font-normal max-w-md  mx-auto lg:mx-0">
            All Products in SRMIST are Quality Tested
          </p>
        </div>

        {/* Right Product Grid */}
        <div className="w-full lg:w-1/2 lg:mt-[-100px]">
          {/* View More Link */}
          <div className="flex justify-end mb-6 sm:mb-10">
            <a
              href="https://www.srmist.edu.in/"
              className="text-[#10294b] text-base sm:text-lg md:text-xl font-semibold hover:text-[#4b1110] hover:underline transition-colors"
            >
              View More →
            </a>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg border border-gray-100 transition-transform duration-300 hover:-translate-y-1 flex flex-col items-center text-center p-4"
              >
                <div className="w-full flex justify-center mb-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <h3 className="text-[#10294b] text-sm sm:text-base font-medium mb-1 truncate">
                  {product.name}
                </h3>
                <p className="text-[#4b1110] text-sm sm:text-base font-bold">
                  {product.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
