<<<<<<< HEAD
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
    onClick={scrollToTop}
    className={`fixed bottom-6 right-6 p-3 bg-[#162F56] text-white border-2 border-white rounded-full shadow-lg transition-opacity ${
      visible ? "opacity-100" : "opacity-0"
    }`}
  >
    <ArrowUp size={24} />
  </button>
  
  );
};

export default BackToTop;

=======
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
    onClick={scrollToTop}
    className={`fixed bottom-6 right-6 p-3 bg-[#162F56] text-white border-2 border-white rounded-full shadow-lg transition-opacity ${
      visible ? "opacity-100" : "opacity-0"
    }`}
  >
    <ArrowUp size={24} />
  </button>
  
  );
};

export default BackToTop;

>>>>>>> d6d559572a42b37db008aad243eaf5cfee34e04d
