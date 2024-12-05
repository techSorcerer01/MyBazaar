import { useState, useEffect } from "react";

const AllCategories = () => {
  const [categories, setCategories] = useState([]);

  const getCategory = async () => {
    const response = await fetch("https://dummyjson.com/products/categories");
    return await response.json();
  };

  useEffect(() => {
    // Fetch categories when the component mounts
    const fetchData = async () => {
      const categoriesTemp = await getCategory();
      setCategories(categoriesTemp); // Update state with fetched categories
    };

    fetchData(); // Call fetch function
  }, []);

  // Define a set of colors that will be applied to each category
  const colors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-red-500",
    "bg-purple-500",
    "bg-teal-500",
  ];

  return (
    <section id="category" className="bg-gray-100 py-10 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Shop by Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`${colors[index % colors.length]} rounded-lg shadow-md p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 ease-in-out`}
            >
              <div className="text-white text-3xl font-bold mb-4">
                {category.name.charAt(0).toUpperCase()}
              </div>
              <h3 className="text-lg font-semibold text-white mb-4 capitalize">
                {category.name}
              </h3>
              <button className="bg-white text-gray-800 py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                Explore
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllCategories;
