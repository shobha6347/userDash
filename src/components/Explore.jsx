

import React from "react";
import { Search, FileText, MousePointerClick } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useFontSize } from "../Context/FontSizeContext"; // Import font size context
import ApplyNow from "../Routes/ApplyPage";

function Explore() {
  const { t } = useTranslation();
  const { fontSize } = useFontSize(); // Get font size from context

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 py-16 px-6">
      {/* Header Section */}
      <div className="text-center">
        <h4 className={`${fontSize === "12" ? "text-lg" : fontSize} text-orange-600 font-semibold tracking-widest uppercase`}>
          {t("how_it_works")}
        </h4>
        <h2 className={`${fontSize === "12" ? "text-4xl" : fontSize} font-bold text-[#162F56] mt-2 leading-snug`}>
          {t("easy_steps_to_apply")} <br />
          <span className="text-orange-600">{t("for_government_schemes")}</span>
        </h2>
        <p className={`${fontSize === "12" ? "text-lg" : fontSize} text-gray-700 mt-4`}>
          {t("follow_steps")}
        </p>
      </div>

      {/* Steps Section */}
      <div className="flex flex-wrap justify-center gap-12 mt-12">
        {/* Step 1 - Search */}
        <div className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
          <div className="bg-[#162F56] p-6 rounded-full shadow-lg flex justify-center items-center">
            <Search size={50} color="white" />
          </div>
          <h3 className={`${fontSize === "12" ? "text-xl" : fontSize} font-semibold text-[#162F56] mt-4`}>
            {t("search")}
          </h3>
          <p className={`${fontSize === "12" ? "text-lg" : fontSize} text-gray-600 w-64 mt-2`}>
            {t("search_description")}
          </p>
        </div>

        {/* Step 2 - Enter Details */}
        <div className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
          <div className="bg-[#162F56] p-6 rounded-full shadow-lg flex justify-center items-center">
            <FileText size={50} color="white" />
          </div>
          <h3 className={`${fontSize === "12" ? "text-xl" : fontSize} font-semibold text-[#162F56] mt-4`}>
            {t("enter_details")}
          </h3>
          <p className={`${fontSize === "12" ? "text-lg" : fontSize} text-gray-600 w-64 mt-2`}>
            {t("enter_details_description")}
          </p>
        </div>

        {/* Step 3 - Select & Apply */}
        <div className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
          <div className="bg-[#162F56] p-6 rounded-full shadow-lg flex justify-center items-center">
            <MousePointerClick size={50} color="white" />
          </div>
          <h3 className={`${fontSize === "12" ? "text-xl" : fontSize} font-semibold text-[#162F56] mt-4`}>
            {t("select_apply")}
          </h3>
          <p className={`${fontSize === "12" ? "text-lg" : fontSize} text-gray-600 w-64 mt-2`}>
            {t("select_apply_description")}
          </p>
        </div>
      </div>

      {/* Call-to-Action Buttons */}
      <div className="flex flex-col items-center mt-12 space-y-4">
        <ApplyNow />
      </div>
    </div>
  );
}

export default Explore;



