import React, { useState, useEffect } from 'react';

const ProfileDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = (e) => {
    if (!e.target.closest(".profile-dropdown")) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeDropdown);
    return () => document.removeEventListener("click", closeDropdown);
  }, []);

  return (
    <div className="relative profile-dropdown">
      <button
        className="text-gray-700 hover:text-blue-600 focus:outline-none flex items-center space-x-2"
        onClick={toggleDropdown}
      >
        {/* New Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10c0-5.52-4.48-10-10-10zm0 18c-1.97 0-3.8-.81-5.1-2.1.03-1.41 2.83-2.19 5.1-2.19 2.28 0 5.07.78 5.1 2.19C15.8 19.19 13.97 20 12 20zm0-4.5c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
          />
        </svg>
      </button>

      {isDropdownOpen && (
        <div
          className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-10 transition-all duration-200 ease-in-out transform scale-95 opacity-0"
          style={{
            transform: isDropdownOpen ? 'scale(1)' : 'scale(0.95)',
            opacity: isDropdownOpen ? '1' : '0',
          }}
        >
          <a
            href="/login"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Login
          </a>
          <a
            href="/signup"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Sign Up
          </a>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
