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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5.121 18.364A2 2 0 016 17h12a2 2 0 011.879 1.364M15 11a3 3 0 10-6 0M4 6a4 4 0 118 0H4z"
          />
        </svg>
        <span>Profile</span>
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
