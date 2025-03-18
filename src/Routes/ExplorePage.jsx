import React from "react";

function ExplorePage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold text-[#162F56]">Explore Government Schemes</h1>
      <p className="text-gray-700 text-lg mt-4 text-center">
        Find and apply for government schemes easily through our platform.
      </p>
      <button 
        onClick={() => window.history.back()} 
        className="bg-[#162F56] hover:bg-[#DC6803] text-white px-6 py-3 mt-6 rounded-lg text-lg font-semibold"
      >
        Go Back
      </button>
    </div>
  );
}

export default ExplorePage;
