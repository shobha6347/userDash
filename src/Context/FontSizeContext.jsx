import React, { createContext, useContext, useState } from 'react';

// Create a Context for the font size
const FontSizeContext = createContext();

// Create a provider component
export const FontSizeProvider = ({ children }) => {
    const [fontSize, setFontSize] = useState(16); // Default font size changed to 16 for better visibility
    const maxFontSize = 32; // Maximum font size limit

    const increaseFontSize = () => {
        if (fontSize < maxFontSize) {
            setFontSize(prev => prev + 2);
        }
    };

    const defaultFontSize = () => setFontSize(16);
    
    const decreaseFontSize = () => {
        setFontSize(prev => Math.max(prev - 2, 10));
    };

    // Determine if increase button should be disabled
    const isIncreaseDisabled = fontSize >= maxFontSize;

    return (
        <FontSizeContext.Provider value={{ 
            fontSize, 
            increaseFontSize, 
            decreaseFontSize, 
            defaultFontSize,
            isIncreaseDisabled // Expose the disabled state
        }}>
            {children}
        </FontSizeContext.Provider>
    );
};

// Custom hook to use the FontSizeContext
export const useFontSize = () => {
    return useContext(FontSizeContext);
};
