import React from "react";
import { useTranslation } from "react-i18next";

function Logo() {
  const { t } = useTranslation();

  const logos = [
    {
      src: "https://mariyojana.gujarat.gov.in/Images/img/my-gov-logo.png",
      alt: "Gov Logo",
    },
    {
      src: "https://mariyojana.gujarat.gov.in/Images/img/gujarat-india-logo.jpg",
      alt: "Gujarat Logo",
    },
    {
      src: "https://mariyojana.gujarat.gov.in/Images/img/footer-img3.png",
      alt: "Digital India",
    },
    {
      src: "https://mariyojana.gujarat.gov.in/Images/img/digital-gujarat.png",
      alt: "Digital Gujarat",
    },
    {
      src: "https://mariyojana.gujarat.gov.in/Images/img/ind.gov.logo.png",
      alt: "India Gov",
    },
    {
      src: "https://mariyojana.gujarat.gov.in/Images/img/bhashini-logo.png",
      alt: "Bhashini",
    },
  ];

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto">
        {/* Section Title with Translation */}
        <h2 className="text-center text-2xl font-bold text-[#162F56] mb-6">
          {t("important_clients")}
        </h2>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center px-4">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-16 md:h-20 object-contain transition-transform duration-300 hover:scale-110"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Logo;


