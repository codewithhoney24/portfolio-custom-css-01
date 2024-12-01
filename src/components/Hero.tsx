import React, { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import "../app/styles/hero.css";

const Hero = () => {
  // Function to break the text of h3 into spans and animate them with GSAP
  const breakTheText = () => {
    const h3Element = document.querySelector("h3");

    if (h3Element) {
      const text = h3Element.textContent || "";
      h3Element.innerHTML = ""; // Clear the content of h3

      const letters = text.split("").map((char) => `<span>${char}</span>`).join("");
      h3Element.innerHTML = letters;

      // GSAP animation for the span elements (the characters)
      gsap.fromTo(
        "h3 span",
        { y: 50, opacity: 0 }, 
        {
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          delay: 0.5, 
          stagger: 0.15, 
          repeat: -1, 
          yoyo: true, 
          ease: "power1.inOut", 
        }
      );
    }
  };

  // GSAP animations for the container
  useEffect(() => {
    const tl = gsap.timeline();

    // Animation to transform
    tl.to(".hero-container", {
      border: "2px solid gray",
      x: 0,
      duration: 6,
      delay: 3,
      rotate: 360,
      borderRadius: "50%",
      scale: 0.6,
      ease: "power1.inOut",
    });

    // Animation to return to initial state
    tl.to(".hero-container", {
      border: "none", // Reset border if necessary
      x: 0,
      duration: 5,
      rotate: 0, // Back to initial rotation
      borderRadius: "0%", // Back to original shape
      scale: 1, // Reset scale
      ease: "power1.inOut",
    });

    // Run text-breaking animation
    breakTheText();
  }, []);

  return (
    <div id="hero" className="hero-container">
      <div className="N-img">
        <Image
          src="/gray__1_-removebg-preview.png"
          alt="N image"
          width={300}
          height={300}
          style={{ objectFit: "cover", borderRadius: "50%" }}
        />
      </div>
      <div className="para-text">
        <p>I am</p>
        <h3>Nousheen</h3>
        <p>Atif</p>
      </div>
    </div>
  );
};

export default Hero;
