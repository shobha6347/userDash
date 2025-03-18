import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useFontSize } from "../Context/FontSizeContext";
import ApplyNow from "../Routes/ApplyPage";

const Header = () => {
  const { fontSize, increaseFontSize, defaultFontSize, decreaseFontSize } = useFontSize();
  const { t, i18n } = useTranslation();
  const [showFontSizeDropdown, setShowFontSizeDropdown] = useState(false);

  return (
    <header
      className="flex items-center justify-between bg-white shadow-md p-4 md:p-6"
      style={{ fontSize: `${fontSize}px` }} // Removed !important
    >
      <div className="relative flex items-center w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
        <input
          type="text"
          placeholder={t("search")}
          className="border border-gray-300 rounded-md py-3 px-4 md:px-8 pr-8 focus:outline-none w-full"
          style={{ fontSize: `${fontSize}px` }}
        />
        <FaSearch className="absolute right-3 text-gray-400" />
      </div>

      <div className="flex items-center space-x-2 md:space-x-4">
        <div className="md:flex hidden space-x-2">
          <button
            onClick={increaseFontSize}
            className="border rounded-full p-2 w-10 h-10 text-sm font-bold flex items-center justify-center cursor-pointer bg-[#2E4467] text-white"
          >
            A+
          </button>
          <button
            onClick={decreaseFontSize}
            className="border rounded-full p-2 w-10 h-10 text-sm font-bold flex items-center justify-center cursor-pointer bg-[#2E4467] text-white"
          >
            A-
          </button>
          <button
            onClick={defaultFontSize}
            className="border rounded-full p-2 w-10 h-10 text-sm font-bold flex items-center justify-center cursor-pointer bg-[#2E4467] text-white"
          >
            A
          </button>
        </div>

        {/* Mobile Font Size Dropdown */}
        <div className="md:hidden flex items-center justify-center">
          <button
            onClick={() => setShowFontSizeDropdown(!showFontSizeDropdown)}
            className="border rounded-full p-2 w-10 h-10 text-sm font-bold flex items-center justify-center cursor-pointer bg-[#2E4467] text-white"
          >
            A
          </button>
          {showFontSizeDropdown && (
            <div className="absolute top-20 bg-white shadow-md p-2 rounded-md">
              <button
                onClick={increaseFontSize}
                className="block p-2 w-full text-center text-sm font-bold cursor-pointer bg-[#2E4467] text-white"
              >
                A+
              </button>
              <button
                onClick={decreaseFontSize}
                className="block p-2 w-full text-center text-sm font-bold cursor-pointer bg-[#2E4467] text-white"
              >
                A-
              </button>
              <button
                onClick={defaultFontSize}
                className="block p-2 w-full text-center text-sm font-bold cursor-pointer bg-[#2E4467] text-white"
              >
                A
              </button>
            </div>
          )}
        </div>

        {/* Language Dropdown */}
        <select
          value={i18n.language}
          onChange={(event) => i18n.changeLanguage(event.target.value)}
          className="border rounded-md p-2 bg-white text-gray-700 cursor-pointer"
          style={{ fontSize: `${fontSize}px` }}
        >
          <option value="en">English</option>
          <option value="hi">हिन्दी</option>
          <option value="mr">मराठी</option>
        </select>

        <ApplyNow />
      </div>
    </header>
  );
};

export default Header;
