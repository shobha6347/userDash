import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const sectors = [
  { id: "social-welfare", nameKey: "social_welfare", schemes: 111, icon: "🤝" },
  { id: "education", nameKey: "education", schemes: 77, icon: "🎓" },
  { id: "sports-youth-cultural", nameKey: "sports_youth_cultural", schemes: 53, icon: "🏆" },
  { id: "agriculture", nameKey: "agriculture", schemes: 49, icon: "🌿" },
  { id: "labour-welfare", nameKey: "labour_welfare", schemes: 36, icon: "👷" },
  { id: "employment", nameKey: "employment", schemes: 35, icon: "💼" },
];

const SectorCard = ({ sector }) => {
  const { t } = useTranslation();
  return (
    <Link to={`/sector/${sector.id}`} className="relative block group">
      <div className="relative overflow-hidden bg-white p-4 sm:p-6 rounded-xl shadow-md flex items-center space-x-4 transition-transform transform group-hover:scale-105 group-hover:shadow-lg">
        <div className="absolute inset-0 w-full h-full border-2 border-transparent rounded-xl group-hover:border-orange-500 transition-all duration-300"></div>

        <div className="text-3xl sm:text-4xl p-3 sm:p-4 rounded-full bg-gradient-to-r from-orange-200 to-orange-400 shadow-md transition-all duration-300 group-hover:scale-110">
          {sector.icon}
        </div>

        <div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-orange-500 transition-colors">
            {t(sector.nameKey)}
          </h3>
        </div>
      </div>
    </Link>
  );
};

const SectorSchemes = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-orange-600 font-semibold tracking-wide uppercase">{t("sectors")}</p>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#162F56] mb-3 sm:mb-4">
          {t("sector_specific_schemes")}
        </h2>
        <p className="text-gray-600 mb-6 sm:mb-8 max-w-lg mx-auto">{t("sector_description")}</p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sectors.map((sector, index) => (
          <SectorCard key={index} sector={sector} />
        ))}
      </div>
    </div>
  );
};

export default SectorSchemes;



