export const ShopByCategory = () => {
  const categories = [
    {
      id: 1,
      title: "Apparels",
      image: "https://c.animaapp.com/uSmv2gID/img/image-1@2x.png",
      topRow: true
    },
    {
      id: 2,
      title: "Bags",
      image: "https://c.animaapp.com/uSmv2gID/img/image-13@2x.png",
      topRow: true
    },
    {
      id: 3,
      title: "Stationery",
      image: "https://c.animaapp.com/uSmv2gID/img/image-14@2x.png",
      topRow: true
    },
    {
      id: 4,
      title: "Drinkware",
      image: "https://c.animaapp.com/uSmv2gID/img/image-15-1@2x.png",
      topRow: true
    },
    {
      id: 5,
      title: "Tech Gear",
      image: "https://c.animaapp.com/uSmv2gID/img/image-16@2x.png",
      topRow: false
    },
    {
      id: 6,
      title: "Event Kits",
      image: "https://c.animaapp.com/uSmv2gID/img/image-17@2x.png",
      topRow: false
    },
    {
      id: 7,
      title: "Gifts",
      image: "https://c.animaapp.com/uSmv2gID/img/image-18@2x.png",
      topRow: false
    },
    {
      id: 8,
      title: "Premium",
      image: "https://c.animaapp.com/uSmv2gID/img/image-19@2x.png",
      topRow: false
    }
  ];

  return (
    <section className="relative w-full py-12 px-4 sm:px-6 md:px-8 lg:px-12">
      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl md:text-[42px] font-medium text-[#10294b] mb-8 md:mb-12 text-center">
        Shop by Category
      </h2>

      {/* Category Grid Container */}
      <div className="w-full">
        {/* Top Row Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {categories.filter(c => c.topRow).map((category) => (
            <CategoryCard 
              key={category.id}
              title={category.title}
              image={category.image}
            />
          ))}
        </div>

        {/* Bottom Row Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {categories.filter(c => !c.topRow).map((category) => (
            <CategoryCard 
              key={category.id}
              title={category.title}
              image={category.image}
            />
          ))}
        </div>

        {/* Browse All Button */}
        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-[#10294b] text-white text-lg md:text-xl font-medium rounded-lg hover:bg-[#0a1e36] transition-all duration-300 hover:shadow-md">
            Browse All Products
          </button>
        </div>
      </div>
    </section>
  );
};

const CategoryCard = ({ title, image }) => {
  return (
    <div className="group flex flex-col items-center">
      {/* Square Card - Made smaller */}
      <div className="w-full max-w-[220px] mx-auto aspect-square bg-white rounded-[20px] shadow-[0px_5px_10px_-3px_rgba(0,0,0,0.04)] overflow-hidden transition-all duration-300 hover:shadow-[0px_8px_15px_-5px_rgba(0,0,0,0.1)]">
        <div className="w-full h-full flex items-center justify-center p-4">
          <img
            className="w-[80%] h-[80%] object-contain transition-transform duration-300 group-hover:scale-110"
            alt={title}
            src={image}
            loading="lazy"
          />
        </div>
      </div>
      
      {/* Category Title - Made smaller */}
      <h3 className="mt-3 text-lg sm:text-xl md:text-2xl font-medium text-[#10294b] text-center">
        {title}
      </h3>
    </div>
  );
};