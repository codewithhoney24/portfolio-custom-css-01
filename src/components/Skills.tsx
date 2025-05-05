import React from "react";
import "../app/styles/skills.css";

const Skills = () => {
  return (
    <div className="skills-container" id="skills">
      <div className="skills-grid">
        <div data-aos="zoom-in-up" className="skills-left">
          <h2 className="skills-heading">Technologies </h2>
          <p className="skills-text">
           Frontend Technologies: I work with HTML, CSS, JavaScript, TypeScript, and Next.js to build visually engaging and interactive web pages, using frameworks like React.js to create dynamic user interfaces.
Backend Technologies: I develop server-side applications using Node.js and Python, integrating databases like MongoDB to manage data and ensure efficient operations.
Version Control & Deployment: I use Git for version control and platforms like GitHub for collaboration, deploying applications using tools like Streamlit, Chainlit, and Vercel pipelines for seamless delivery.


          </p>
        </div>

        <div className="skills-right">
          <div className="skills-icons-grid">
            <div className="skills-space">
              <h1>Skills</h1>
              <h2 data-aos="zoom-in-up">Next.js</h2>
              <h2 data-aos="zoom-in-up">TypeScript</h2>
              <h2 data-aos="zoom-in-up">Python</h2>
            </div>

            <div className="skills-space">
            <h1>Skills</h1>
              <h2 data-aos="zoom-in-up">Tailwind</h2>
              <h2 data-aos="zoom-in-up">Css</h2>
              <h2 data-aos="zoom-in-up">Node.Js</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
