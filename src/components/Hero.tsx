import React from 'react'
import Image from 'next/image';
import "../app/styles/hero.css";


const Hero =() =>  {
  return (
    <div id="hero"
     className='hero-container'>
      <div className='hero-content'>
          <div className='hidden lg:block'></div>
          <div className='hero-text'>
            <div className='hero-msin'>
            <div className="N-img">
  <Image 
    src="/gray__1_-removebg-preview.png"
    alt="N image"
    width={300}  // Set width for a smaller size
    height={300} // Set height proportionally
    style={{ objectFit: "cover" }}
  />
</div>

       
              <p data-aos="zoom-in-up">I am</p>
              <p data-aos="zoom-in-up">Nousheen</p>
              <p data-aos="zoom-in-up">Atif</p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Hero;