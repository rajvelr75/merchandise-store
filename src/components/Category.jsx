export const ShopByCategory = () => {
  const categories = [
    { id: 1, title: "Apparels", image: "https://c.animaapp.com/uSmv2gID/img/image-1@2x.png" },
    { id: 2, title: "Bags", image: "https://c.animaapp.com/uSmv2gID/img/image-13@2x.png" },
    { id: 3, title: "Stationery", image: "https://c.animaapp.com/uSmv2gID/img/image-14@2x.png" },
    { id: 4, title: "Drinkware", image: "https://c.animaapp.com/uSmv2gID/img/image-15-1@2x.png" },
    { id: 5, title: "Tech Gear", image: "https://c.animaapp.com/uSmv2gID/img/image-16@2x.png" },
    { id: 6, title: "Event Kits", image: "https://c.animaapp.com/uSmv2gID/img/image-17@2x.png" },
    { id: 7, title: "Gifts", image: "https://c.animaapp.com/uSmv2gID/img/image-18@2x.png" },
    { id: 8, title: "Premium", image: "https://c.animaapp.com/uSmv2gID/img/image-19@2x.png" }
  ];

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 md:px-10 lg:px-24 xl:px-32 font-outfit">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-semibold text-[#10294b] text-center mb-12">
          Shop by Category
        </h2>

        {/* Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {categories.map(({ id, title, image }) => (
            <CategoryCard key={id} title={title} image={image} />
          ))}
        </div>

        {/* Browse Button */}
        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-[#10294b] text-white text-lg sm:text-xl font-semibold rounded-lg hover:bg-[#0a1e36] transition-all duration-300 shadow-md hover:shadow-lg">
            Browse All Products
          </button>
        </div>
      </div>
    </section>
  );
};

const CategoryCard = ({ title, image }) => {
  return (
    <div className="group flex flex-col items-center text-center">
      {/* Image Box */}
      <div className="w-full max-w-[200px] aspect-square bg-white rounded-[20px] shadow-[0px_5px_15px_rgba(0,0,0,0.05)] hover:shadow-[0px_10px_20px_rgba(0,0,0,0.1)] transition-shadow duration-300 mx-auto">
        <div className="w-full h-full flex items-center justify-center p-4">
          <img
            src={image}
            alt={title}
            className="w-[75%] h-[75%] object-contain transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </div>

      {/* Title */}
      <h3 className="mt-4 text-base sm:text-lg md:text-xl font-medium text-[#10294b]">
        {title}
      </h3>
    </div>
  );
};
