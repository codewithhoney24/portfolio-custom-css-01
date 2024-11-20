import React from "react";
import Image from "next/image";
import "../app/styles/hero.css";

const Hero = () => {
  return (
    <div id="hero" className="hero-container">
      <div className="N-img">
        <Image
          src="/gray__1_-removebg-preview.png"
          alt="N image"
          width={300} // Set width for a smaller size
          height={300} // Set height proportionally
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="para-text">
        <p>I am</p>
        <p>Nousheen</p>
        <p>Atif</p>
      </div>
    </div>
  );
};

export default Hero;
