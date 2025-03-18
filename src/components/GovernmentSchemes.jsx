
import React from "react";
import { useTranslation } from "react-i18next";

function GovernmentSchemes() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 lg:px-16 py-8 sm:py-12 bg-gradient-to-br from-gray-100 to-gray-300">
      {/* Left Side - Text Content */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#162F56] mt-2 leading-snug sm:leading-tight">
          {t("discover_all_schemes")}
        </h2>
        <p className="text-gray-700 text-base sm:text-lg font-medium mt-3 sm:mt-4 leading-relaxed">
          {t("bharat_schemes_portal")}
        </p>
        <p className="text-gray-700 text-base sm:text-lg font-medium mt-2 leading-relaxed">
          {t("easy_access_info")}
        </p>

        {/* Call to Action Button */}
        <button className="mt-5 sm:mt-6 px-5 sm:px-6 py-2 sm:py-3 bg-orange-600 text-white font-semibold text-base sm:text-lg rounded-lg shadow-md hover:bg-orange-700 transition-all duration-300">
          {t("explore_schemes")}
        </button>
      </div>

      {/* Right Side - Video Section */}
      <div className="lg:w-1/2 mt-6 sm:mt-8 lg:mt-0 flex justify-center">
        <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
          {/* Video with Overlay Effect */}
          <div className="absolute inset-0 bg-black opacity-10 rounded-lg"></div>
          <video
            className="w-full rounded-lg shadow-2xl transform transition duration-500 hover:scale-105"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/video/videoplayback.mp4" type="video/mp4" />
            {t("video_not_supported")}
          </video>
        </div>
      </div>
    </div>
  );
}

export default GovernmentSchemes;




