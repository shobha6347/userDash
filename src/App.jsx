// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useTranslation } from "react-i18next";

// import Header from "./components/Header";
// import BannerImage from "./components/Banner";
// import BackToTop from "./components/BacktoTopbutton";
// import Cards from "./components/Cards";
// import SchemePage from "./Routes/SchemePage";
// import ServicesPage from "./Routes/ServicesPage";
// import CertificatePage from "./Routes/CertificatePage";
// import SearchByKeywordPage from "./Routes/SearchByKeywordPage";
// import SectorSchemes from "./components/SectorScheme";
// import SectorDetails from "./pages/SectorDetails";
// import GovernmentSchemes from "./components/GovernmentSchemes";
// import Explore from "./components/Explore";
// import ExplorePage from "./Routes/ExplorePage";
// import ApplyPage from "./Routes/ApplyPage";
// import Logo from "./components/Logo";
// import Contact from "./components/Contact";
// import { useFontSize } from "./Context/FontSizeContext";
// import LanguageSelector from "./components/LanguageSelector";

// import "./i18n";

// function App() {
//   const { fontSize } = useFontSize();
//   const { t } = useTranslation();

//   return (
//     <Router>
//       {/* Common Components (Header & LanguageSwitcher) */}
//       <Header />
      

//       {/* Main Content Area */}
//       <div style={{ fontSize: fontSize }}>
//         <Routes>
//           {/* Home Page */}
//           <Route
//             path="/"
//             element={
//               <>
//                 <BannerImage />
//                 <BackToTop />
//                 <Cards />
//                 <SectorSchemes />
//                 <GovernmentSchemes />
//                 <Explore />
//                 <Logo />
//                 <Contact />
//               </>
//             }
//           />
//           {/* Other Routes */}
//           <Route path="/applypage" element={<ApplyPage />} />
//           <Route path="/explore-page" element={<ExplorePage />} />
//           <Route path="/scheme" element={<SchemePage />} />
//           <Route path="/services" element={<ServicesPage />} />
//           <Route path="/certificate" element={<CertificatePage />} />
//           <Route path="/search-by-keyword" element={<SearchByKeywordPage />} />
//           <Route path="/sector/:sectorId" element={<SectorDetails />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Header from "./components/Header";
import BannerImage from "./components/Banner";
import BackToTop from "./components/BacktoTopbutton";
import Cards from "./components/Cards";
import SchemePage from "./Routes/SchemePage";
import ServicesPage from "./Routes/ServicesPage";
import CertificatePage from "./Routes/CertificatePage";
import SearchByKeywordPage from "./Routes/SearchByKeywordPage";
import SectorSchemes from "./components/SectorScheme";
import SectorDetails from "./pages/SectorDetails";
import GovernmentSchemes from "./components/GovernmentSchemes";
import Explore from "./components/Explore";
import ExplorePage from "./Routes/ExplorePage";
import ApplyPage from "./Routes/ApplyPage";
import Logo from "./components/Logo";
import Contact from "./components/Contact";
import { useFontSize } from "./Context/FontSizeContext";
import LanguageSelector from "./components/LanguageSelector";

import "./i18n";

function App() {
  const { fontSize } = useFontSize();
  const { t } = useTranslation();

  return (
    <Router>
      {/* Common Components (Header & LanguageSwitcher) */}
      <Header />

      {/* Apply Font Size Globally */}
      <div style={{ fontSize: `${fontSize}px` }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <BannerImage />
                <BackToTop />
                <Cards />
                <SectorSchemes />
                <GovernmentSchemes />
                <Explore />
                <Logo />
                <Contact />
              </>
            }
          />
          <Route path="/applypage" element={<ApplyPage />} />
          <Route path="/explore-page" element={<ExplorePage />} />
          <Route path="/scheme" element={<SchemePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/certificate" element={<CertificatePage />} />
          <Route path="/search-by-keyword" element={<SearchByKeywordPage />} />
          <Route path="/sector/:sectorId" element={<SectorDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
