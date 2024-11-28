import React from "react";
import ProfileDropDown from "./ProfileDropDown";
import CartButton from "./CartButton";

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
                        <a href="#category" className="hover:text-blue-600">Categories</a>
                        <a href="#about" className="hover:text-blue-600">About Us</a>
                        <a href="#contact" className="hover:text-blue-600">Contact</a>
                    </nav>

                    {/* Cart Icon */}
                    <div className="relative">
                       <CartButton></CartButton>
                    </div>

                    {/* User Account Icon */}
                    <div className="relative">
                        
                        <ProfileDropDown></ProfileDropDown>
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
