import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useFontSize } from "../Context/FontSizeContext"; // Import font size context

const Cards = () => {
  const { fontSize } = useFontSize(); // Get the font size from context
  const { t } = useTranslation();     // i18n hook for translations

  // Use translation keys instead of hardcoded titles
  const cardData = [
    { title: t("Schemes"), href: "/scheme" },
    { title: t("Services"), href: "/services" },
    { title: t("Certificate"), href: "/certificate" },
    { title: t("SearchByKeyword"), href: "/search-by-keyword" },
  ];

  return (
    <div className="w-full flex flex-wrap justify-center gap-6 px-8 py-10 bg-gradient-to-br from-gray-100 to-gray-300 mt-5">
      {cardData.map((card, index) => (
        <Link
          key={index}
          to={card.href}
          className="w-[300px] h-36 bg-white rounded-xl shadow-md flex flex-col items-center justify-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r from-orange-200 to-orange-400 hover:text-white group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-white opacity-20 transition-opacity duration-300 group-hover:opacity-0" />
          <div className="flex flex-col items-center gap-3 z-10">
            <img
              src="https://mariyojana.gujarat.gov.in/Images/img/search-icon/1.png"
              alt="Icon"
              className="w-12 h-12 transition-transform duration-300 group-hover:scale-110"
            />
            {/* Apply dynamic font size and translation */}
            <h3 className={`${fontSize === "12" ? "text-lg" : fontSize} font-semibold text-gray-700 group-hover:text-white transition-colors`}>
              {card.title}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
