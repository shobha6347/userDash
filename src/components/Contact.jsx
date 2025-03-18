
import React, { useState, useEffect } from "react";
import { MapPin, Mail, Phone, CalendarDays, Home, Briefcase, ClipboardList, PhoneCall } from "lucide-react";

const Contact = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    setCurrentDate(new Date());
  }, []);

  return (
    <footer className="bg-[#162F56] text-white py-6 px-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center text-center sm:text-left">
        
        {/* Contact Info (Left) */}
        <div className="text-sm space-y-2 w-full sm:w-1/3">
          <h2 className="text-md font-bold">Contact</h2>
          <p className="flex items-center justify-center sm:justify-start gap-2">
            <MapPin size={16} /> Gandhinagar, Gujarat
          </p>
          <p className="flex items-center justify-center sm:justify-start gap-2">
            <Mail size={16} /> support@gov.in
          </p>
          <p className="flex items-center justify-center sm:justify-start gap-2">
            <Phone size={16} /> +91 12345 67890
          </p>
        </div>

        {/* Calendar (Center) */}
        {/* <div className="bg-white text-gray-900 w-36 h-40 flex flex-col items-center justify-center rounded-lg shadow-lg mx-auto my-4 sm:my-0">
          <CalendarDays size={24} className="text-[#162F56]" />
          <h2 className="text-2xl font-bold mt-2">{currentDate.getDate()}</h2>
          <p className="text-sm">{currentDate.toLocaleString("default", { month: "long" })}</p>
          <p className="text-xs">{currentDate.getFullYear()}</p>
        </div> */}

        {/* Quick Links (Right) */}
        <div className="text-sm space-y-2 w-full sm:w-1/3">
          <h2 className="text-md font-bold">Quick Links</h2>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Home size={16} /> <a href="/" className="hover:text-orange-400">Home</a>
            </li>
            <li className="flex items-center gap-2">
              <ClipboardList size={16} /> <a href="/schemes" className="hover:text-orange-400">Schemes</a>
            </li>
            <li className="flex items-center gap-2">
              <Briefcase size={16} /> <a href="/services" className="hover:text-orange-400">Services</a>
            </li>
            <li className="flex items-center gap-2">
              <PhoneCall size={16} /> <a href="/contact" className="hover:text-orange-400">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-4 text-center text-gray-400 text-xs">
        © {new Date().getFullYear()} Government of India. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Contact;


