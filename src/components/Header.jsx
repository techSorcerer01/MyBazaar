import React from "react";

const Header = () => {
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <div className="text-xl font-bold text-gray-800">
                    <a href="/" className="hover:text-blue-600">MyBazaar</a>
                </div>

                {/* Search Bar (Visible on all screens) */}
                <div className="flex items-center space-x-2 flex-grow mx-4">
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="text-white bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded-lg">
                        Search
                    </button>
                </div>

                {/* Navigation and Icons */}
                <div className="flex items-center space-x-6">
                    {/* Navigation Links (Hidden on small screens) */}
                    <nav className="hidden md:flex space-x-6 text-gray-700">
                        <a href="/" className="hover:text-blue-600">Home</a>
                        <a href="/categories" className="hover:text-blue-600">Categories</a>
                        <a href="/about" className="hover:text-blue-600">About Us</a>
                        <a href="/contact" className="hover:text-blue-600">Contact</a>
                    </nav>

                    {/* Cart Icon */}
                    <div className="relative">
                        <a href="/cart" className="text-gray-700 hover:text-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 8h11l1.5-8M7 13h10M9 21a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2z" />
                            </svg>
                        </a>
                        {/* Cart Item Count */}
                        <span className="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                            3
                        </span>
                    </div>

                    {/* User Account Icon */}
                    <div className="relative">
                        <button className="text-gray-700 hover:text-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 18.364A2 2 0 016 17h12a2 2 0 011.879 1.364M15 11a3 3 0 10-6 0M4 6a4 4 0 118 0H4z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu (Hidden by default) */}
            <div className="md:hidden flex justify-between px-4 py-2 bg-gray-100">
                <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
                <a href="/shop" className="text-gray-700 hover:text-blue-600">Shop</a>
                <a href="/categories" className="text-gray-700 hover:text-blue-600">Categories</a>
                <a href="/about" className="text-gray-700 hover:text-blue-600">About Us</a>
                <a href="/contact" className="text-gray-700 hover:text-blue-600">Contact</a>
            </div>
        </header>
    );
};

export default Header;
