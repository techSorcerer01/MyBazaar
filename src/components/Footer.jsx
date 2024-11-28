import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-10">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Brand Section */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">MyBazaar</h2>
                    <p className="text-gray-400">
                        Discover great deals and unbeatable prices. Shop from our wide range of products, tailored just for you.
                    </p>
                </div>

                {/* Navigation Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="/" className="hover:text-blue-400">Home</a></li>
                        <li><a href="/shop" className="hover:text-blue-400">Shop</a></li>
                        <li><a href="/categories" className="hover:text-blue-400">Categories</a></li>
                        <li><a href="/about" className="hover:text-blue-400">About Us</a></li>
                        <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
                    </ul>
                </div>

                {/* Newsletter Subscription */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
                    <p className="text-gray-400 mb-4">
                        Subscribe to get the latest updates and offers.
                    </p>
                    <form className="flex space-x-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 rounded-l-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600">
                            Subscribe
                        </button>
                    </form>
                </div>

                {/* Social Media Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" className="text-gray-400 hover:text-blue-400">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.847V11.71h2.973V9.413c0-2.939 1.793-4.541 4.41-4.541 1.254 0 2.332.093 2.645.135v3.068h-1.813c-1.423 0-1.698.676-1.698 1.67v2.185h3.397l-.442 3.446h-2.955V24h5.791c.732 0 1.325-.593 1.325-1.324V1.325C24 .593 23.407 0 22.675 0z" />
                            </svg>
                        </a>
                        <a href="https://twitter.com" className="text-gray-400 hover:text-blue-400">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 4.557a9.847 9.847 0 01-2.828.775A4.932 4.932 0 0023.337 3c-.943.558-1.985.964-3.084 1.184A4.924 4.924 0 0016.616 3c-2.717 0-4.92 2.203-4.92 4.92 0 .386.044.762.128 1.124C7.728 8.807 4.1 6.885 1.671 4.149a4.822 4.822 0 00-.665 2.475c0 1.707.87 3.214 2.191 4.099a4.93 4.93 0 01-2.229-.616v.062c0 2.385 1.694 4.374 3.946 4.827a4.936 4.936 0 01-2.224.085c.626 1.956 2.444 3.379 4.599 3.419A9.864 9.864 0 010 19.54a13.924 13.924 0 007.548 2.213c9.056 0 14.01-7.505 14.01-14.01 0-.213-.005-.426-.014-.637A9.936 9.936 0 0024 4.557z" />
                            </svg>
                        </a>
                        <a href="https://instagram.com" className="text-gray-400 hover:text-pink-400">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M7.5 2h9A5.5 5.5 0 0122 7.5v9a5.5 5.5 0 01-5.5 5.5h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2zm0 2A3.5 3.5 0 004 7.5v9a3.5 3.5 0 003.5 3.5h9a3.5 3.5 0 003.5-3.5v-9A3.5 3.5 0 0016.5 4h-9zm4.5 2.25a5.25 5.25 0 11-.002 10.502A5.25 5.25 0 0112 6.25zm0 2a3.25 3.25 0 100 6.502 3.25 3.25 0 000-6.502zM18 6.125a.875.875 0 11-1.75 0 .875.875 0 011.75 0z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
                &copy; {new Date().getFullYear()} MyBazaar. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
