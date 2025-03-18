import React from "react";
import { useParams } from "react-router-dom";

const sectorData = {
  "social-welfare": { name: "Social Welfare", schemes: 111, icon: "🤝" },
  education: { name: "Education", schemes: 77, icon: "🎓" },
  "sports-youth-cultural": { name: "Sports, Youth & Cultural Activities", schemes: 53, icon: "🏆" },
  agriculture: { name: "Agriculture", schemes: 49, icon: "🌿" },
  "labour-welfare": { name: "Labour Welfare", schemes: 36, icon: "👷" },
  employment: { name: "Employment", schemes: 35, icon: "💼" },
};

const SectorDetails = () => {
  const { sectorId } = useParams();
  const sector = sectorData[sectorId];

  if (!sector) {
    return <h2 className="text-center text-red-500">Sector Not Found</h2>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-2xl font-bold text-[#162F56] flex items-center gap-3">
        <span className="text-4xl">{sector.icon}</span>
        {sector.name}
      </h1>
      <p className="text-lg text-gray-700 mt-3">Schemes Available: <b>{sector.schemes}</b></p>
      <p className="mt-4 text-gray-600">
        This page provides details about the <b>{sector.name}</b> sector and its schemes.
      </p>
    </div>
  );
};

export default SectorDetails;
