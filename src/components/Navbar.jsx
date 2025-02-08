import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for mobile menu

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close menu after clicking a link (mobile)
  };

  return (
    <nav className="bg-[#3e1f59]   text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center h-16 px-6 md:px-12">
        
        {/* Logo - Hidden on small screens */}
        <div className="hidden sm:block bg-[#3e1f59] text-white">
          <img src="/assets/logo.svg" alt="Logo" className="h-10" />
        </div>

        {/* Desktop Navbar */}
        <div className="hidden md:flex space-x-10 text-lg">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="hover:text-gray-300 transition duration-300"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden text-white flex flex-col space-y-4 py-6 px-6">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-xl hover:text-gray-300 transition duration-300"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
