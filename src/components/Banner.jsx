<<<<<<< HEAD

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useFontSize } from '../Context/FontSizeContext';
import ImageSlider from './ImageSlider';

const images = [
    'https://mariyojana.gujarat.gov.in/Images/img/header/header-img2.png',
    'https://mariyojana.gujarat.gov.in/Images/img/header/header-img1.png',
];

const BannerImage = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const { t } = useTranslation();
    const { fontSize } = useFontSize();

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        // <div className="w-full relative mt-20 min-h-[450px] bg-cover bg-center bg-no-repeat flex flex-col lg:flex-row items-center justify-center"
        //     style={{ backgroundImage: `url(https://mariyojana.gujarat.gov.in/Images/img/home-header-bg3.png)` }}
        // >
        //     {/* Background Overlay */}
        //     <div className="absolute inset-0 bg-white opacity-10"></div>

        //     {/* Image Slider (Left Side) */}
        //     <div className="relative w-full lg:w-1/3 flex justify-center lg:justify-start p-4">
        //         <img
        //             src={images[currentImage]}
        //             alt={t("changing_image")}
        //             className="w-48 sm:w-64 md:w-80 lg:w-96 h-auto object-contain transition-opacity duration-700 ease-in-out"
        //         />
        //     </div>

        //     {/* Text Section */}
        //     <div className="relative text-center lg:text-right w-[90%] lg:w-[60%] p-6">
        //         <h2 className={`${fontSize == "12" ? "text-3xl" : fontSize} font-bold text-[#1F2A44] leading-snug`}>
        //             {t("banner_message")} <span className="text-[#E57C23]">{t("government_schemes")}</span> {t("priority")}
        //         </h2>
        //         <p className="text-lg sm:text-xl text-[#1F2A44] italic mt-2">
        //             – {t("chief_minister")}
        //         </p>
        //     </div>

        //     {/* Static Image (PM & CM Image) */}
        //     {/* <div className="relative w-full lg:w-auto flex justify-center lg:justify-end mt-6 lg:mt-0">
        //         <img
        //             src="https://mariyojana.gujarat.gov.in/Images/img/pmcm.png"
        //             alt={t("static_image")}
        //             className="w-72 sm:w-96 md:w-[500px] lg:w-[640px] h-auto"
        //         />
        //     </div> */}
        // </div >
        <>
        <ImageSlider />
        </>
    );
};

export default BannerImage;

=======

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useFontSize } from '../Context/FontSizeContext';

const images = [
    'https://mariyojana.gujarat.gov.in/Images/img/header/header-img2.png',
    'https://mariyojana.gujarat.gov.in/Images/img/header/header-img1.png',
];

const BannerImage = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const { t } = useTranslation();
    const { fontSize } = useFontSize();

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="w-full relative mt-20 min-h-[450px] bg-cover bg-center bg-no-repeat flex flex-col lg:flex-row items-center justify-center"
            style={{ backgroundImage: `url(https://mariyojana.gujarat.gov.in/Images/img/home-header-bg3.png)` }}
        >
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-white opacity-10"></div>

            {/* Image Slider (Left Side) */}
            <div className="relative w-full lg:w-1/3 flex justify-center lg:justify-start p-4">
                <img
                    src={images[currentImage]}
                    alt={t("changing_image")}
                    className="w-48 sm:w-64 md:w-80 lg:w-96 h-auto object-contain transition-opacity duration-700 ease-in-out"
                />
            </div>

            {/* Text Section */}
            <div className="relative text-center lg:text-right w-[90%] lg:w-[60%] p-6">
                <h2 className={`${fontSize == "12" ? "text-3xl" : fontSize} font-bold text-[#1F2A44] leading-snug`}>
                    {t("banner_message")} <span className="text-[#E57C23]">{t("government_schemes")}</span> {t("priority")}
                </h2>
                <p className="text-lg sm:text-xl text-[#1F2A44] italic mt-2">
                    – {t("chief_minister")}
                </p>
            </div>

            {/* Static Image (PM & CM Image) */}
            <div className="relative w-full lg:w-auto flex justify-center lg:justify-end mt-6 lg:mt-0">
                <img
                    src="https://mariyojana.gujarat.gov.in/Images/img/pmcm.png"
                    alt={t("static_image")}
                    className="w-72 sm:w-96 md:w-[500px] lg:w-[640px] h-auto"
                />
            </div>
        </div >
    );
};

export default BannerImage;

>>>>>>> d6d559572a42b37db008aad243eaf5cfee34e04d
