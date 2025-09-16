import { useState } from "react";
import { useLocation } from "react-router-dom";
import Button_One from "../Buttons/Button_One";
import { PhoneIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";


const navItems = [
  { name: "Hem", path: "/" },
  { name: "Information", path: "/info" },
  { name: "Kontakt", path: "/contact" },
];

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed z-50 w-full bg-[#fff] text-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="bg-[url(/Tandanlaget.svg)] bg-no-repeat bg-center bg-fit w-62 h-14"></div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4">
          {navItems.map(({ name, path }) => (
            <Button_One key={name} active={location.pathname === path} to={path} label={name} />
          ))}
          <a
            href="tel:+46 321 132 50"
            className="flex items-center px-4 py-2 rounded-[21px] shadow-[0_4px_10px_rgba(93,79,255,0.25)] no-underline"
          >
            <PhoneIcon className="w-6 h-6 text-[#5d4fff] mr-2" />
            <span className="text-black/60 text-sm font-medium">+46 321 132 50</span>
          </a>
        </nav>

        {/* Burger Icon */}
        <button
          className="md:hidden text-[#00579E]"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center gap-3 px-4 pb-4">
          {navItems.map(({ name, path }) => (
            <Button_One
              key={name}
              active={location.pathname === path}
              to={path}
              label={name}
            />
          ))}
          <a
            href="tel:+46 321 132 50"
            className="mt-2 flex items-center px-4 py-2 rounded-[21px] shadow-[0_4px_10px_rgba(93,79,255,0.25)] no-underline"
          >
            <PhoneIcon className="w-5 h-5 text-black/60 mr-2" />
            <span className="text-black/60 text-sm font-medium">+46 321 132 50</span>
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
