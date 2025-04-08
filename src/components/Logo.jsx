// import React from "react";
// import { useTranslation } from "react-i18next";

// function Logo() {
//   const { t } = useTranslation();

//   const logos = [
//     {
//       src: "https://i0.wp.com/mahaschemes.com/wp-content/uploads/2023/03/maha-schemes.jpg",
//       alt: "Gov Logo",
//       link: "https://mahaschemes.com/",
//     },
//     {
//       src: "https://cdn.s3waas.gov.in/s3a86c450b76fb8c371afead6410d55534/uploads/2018/03/2018032913.png",
//       alt: "Gujarat Logo",
//       link: "https://gujaratindia.gov.in/",
//     },
//     {
//       src: "https://www.timesbull.com/wp-content/uploads/2024/09/Maharashtra-Lek-Ladki-Yojana-2024-1-jpeg.webp",
//       alt: "Digital India",
//       link: "https://digitalindia.gov.in/",
//     },
//     {
//       src: "https://www.sschittorgarh.com/wp-content/uploads/2024/07/Rojgar-Mahaswayam-Yojana-Maharashtra-2024-notification.png",
//       alt: "Digital Gujarat",
//       link: "https://mahaswayam.gov.in/",
//     },
//     {
//       src: "https://rojgar-assets.s3.ap-south-1.amazonaws.com/Assets/Frontend/img/Skill_Devlp_LOGO.jpg",
//       alt: "India Gov",
//       link: "https://skillindia.gov.in/",
//     },
//     {
//       src: "https://mariyojana.gujarat.gov.in/Images/img/bhashini-logo.png",
//       alt: "Bhashini",
//       link: "https://bhashini.gov.in/",
//     },
//   ];

//   return (
//     <div className="bg-gray-100 py-10">
//       <div className="container mx-auto">
//         {/* Section Title with Translation */}
//         <h2 className="text-center text-2xl font-bold text-[#162F56] mb-6">
//           {t("important_clients")}
//         </h2>

//         {/* Logo Grid with Clickable Links */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center px-4">
//           {logos.map((logo, index) => (
//             <a
//               key={index}
//               href={logo.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="transition-transform duration-300 hover:scale-110"
//             >
//               <img
//                 src={logo.src}
//                 alt={logo.alt}
//                 className="h-16 md:h-20 object-contain"
//               />
//             </a>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Logo;



import { Link } from "react-router-dom";

const data = [
  { img: '/Cardsimg/Cardsimg/1.png', link: "https://www.india.gov.in/" },
  { img: '/Cardsimg/Cardsimg/2.png', link: "https://sbmurban.org/" },
  { img: '/Cardsimg/Cardsimg/3.png', link: "https://aaplesarkar.maharashtra.gov.in/en/" },
  { img: '/Cardsimg/Cardsimg/4.png', link: "https://rti.gov.in/" },
  { img: '/Cardsimg/Cardsimg/5.png', link: "https://www.maharashtra.gov.in/" },
  { img: '/Cardsimg/Cardsimg/6.png', link: "https://socialjustice.gov.in/" },
];

const Logo = () => {
  return (
    <div className="p-5 shadow-2xs">
      {/* Heading */}
      <h1 className="text-[20px] font-semibold text-gray-500 text-center mb-4">Important Links</h1>

      {/* Cards Container */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {data.map((item, index) => (
          <div key={index} className="relative group">
            <Link to={item.link} target="_blank">
              {/* Hover Gradient Background */}
              <div className="absolute inset-0 rounded-2xl bg-[linear-gradient(to_right,#2ab998_0%,#2989d8_30%,#428dcb_33%,#c2579b_67%,#c2579b_67%,#c2579b_75%,#ec7026_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 group-hover:shadow-md"></div>
              {/* Card Image */}
              <img
                src={item.img}
                // alt={Card ${index + 1}}
                className="h-24 w-full border mt-2 rounded-2xl relative z-10 object-cover"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Logo;