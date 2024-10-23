import { useState } from "react";
import { Equal } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle Menu visibility
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="flex justify-center h-max w-full">
      <div className="flex flex-row items-center justify-between w-full max-w-[1280px] px-8 py-4">
        {/* Logo section */}
        <div className="flex items-center">
          <a href="#" aria-label="Homepage">
            <img
              src="./src/assets/logo.svg"
              alt="logo"
              className="h-[34px] w-auto"
            />
          </a>
        </div>

        {/* Menu section */}
        <div className="relative">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 cursor-pointer"
          >
            <p className="">Menu</p>
            <Equal size={24} className="text-gray-600" />
          </button>

          {/* Dropdown menu */}
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 shadow-lg rounded-lg z-10">
              <ul className="py-4 font-semibold text-md">
                <li className="px-6 py-2  cursor-pointer">
                  <a href="#home" className="block text-gray-700">Home</a>
                </li>
                <li className="px-6 py-2 cursor-pointer">
                  <a href="#features" className="block text-gray-700">Features</a>
                </li>
                <li className="px-6 py-2 cursor-pointer">
                  <a href="#integrations" className="block text-gray-700">Integrations</a>
                </li>
                <li className="px-6 py-2 cursor-pointer">
                  <a href="#plans" className="block text-gray-700">Plans</a>
                </li>
                <li className="px-6 py-2 cursor-pointer">
                  <a href="#contact" className="block text-gray-700">Contact</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
