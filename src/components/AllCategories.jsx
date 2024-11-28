const AllCategories = () => {
    const categories = [
      { name: 'Electronics', image: 'https://via.placeholder.com/200x150?text=Electronics' },
      { name: 'Fashion', image: 'https://via.placeholder.com/200x150?text=Fashion' },
      { name: 'Home Appliances', image: 'https://via.placeholder.com/200x150?text=Home+Appliances' },
      { name: 'Books', image: 'https://via.placeholder.com/200x150?text=Books' },
      { name: 'Toys', image: 'https://via.placeholder.com/200x150?text=Toys' },
      { name: 'Sports', image: 'https://via.placeholder.com/200x150?text=Sports' },
      { name: 'Beauty', image: 'https://via.placeholder.com/200x150?text=Beauty' },
      { name: 'Furniture', image: 'https://via.placeholder.com/200x150?text=Furniture' },
      { name: 'Grocery', image: 'https://via.placeholder.com/200x150?text=Grocery' },
      { name: 'Health', image: 'https://via.placeholder.com/200x150?text=Health' },
      { name: 'Automotive', image: 'https://via.placeholder.com/200x150?text=Automotive' },
      { name: 'Jewelry', image: 'https://via.placeholder.com/200x150?text=Jewelry' },
      { name: 'Music', image: 'https://via.placeholder.com/200x150?text=Music' },
      { name: 'Garden', image: 'https://via.placeholder.com/200x150?text=Garden' },
      { name: 'Kitchen', image: 'https://via.placeholder.com/200x150?text=Kitchen' },
      { name: 'Pet Supplies', image: 'https://via.placeholder.com/200x150?text=Pet+Supplies' },
    ];
  
    return (
      <section id="category" className="bg-gray-50 py-10 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Shop by Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{category.name}</h3>
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default AllCategories;
  