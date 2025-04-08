<<<<<<< HEAD
import React, { useContext } from "react";
import { FontSizeContext } from "./context/FontSizeContext"; 

const Contact = () => {
  const { fontSize } = useContext(FontSizeContext);

  return (
    <div style={{ fontSize }}>
      <h1>Welcome to Home Page</h1>
      <p>This is a sample text with dynamic font size.</p>
    </div>
  );
};

export default Contact;
=======
import React, { useContext } from "react";
import { FontSizeContext } from "./context/FontSizeContext"; 

const Contact = () => {
  const { fontSize } = useContext(FontSizeContext);

  return (
    <div style={{ fontSize }}>
      <h1>Welcome to Home Page</h1>
      <p>This is a sample text with dynamic font size.</p>
    </div>
  );
};

export default Contact;
>>>>>>> d6d559572a42b37db008aad243eaf5cfee34e04d
