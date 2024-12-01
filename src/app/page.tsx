"use client";
import About from '@/components/About';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import React, { useEffect } from 'react'
import Aos from "aos"
import "aos/dist/aos.css";
import Heading from '@/components/Heading';


export default function Home() {

  useEffect(() => {
    Aos.init({
      once: true,
    
      
      easing: "ease-out-back",
      duration: 100,
      delay:100,
      offset:160,
      mirror: true,
      anchorPlacement: "bottom-bottom",
    });

    Aos.refresh();
  }, []);


  return (

    <main>
<Hero/>

<Heading  title="Welcome to My Portfolio" /> {/* Pass title prop to Heading */}
<About/>
<Projects/>
<Skills/>
<Contact/>




    </main>
  )
}









