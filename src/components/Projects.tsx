
import React from 'react'
import Heading from './Heading';
import  Card from './Card';
import "../app/styles/projects.css";




const data = [
  
  {
    id:0,
    title: "QUIZ",
    desc: "This TypeScript Quiz project features an interactive interface for answering multiple-choice questions, providing a smooth user experience.",
    img:"/QUIZ01.jpg",
    tags: ["Html","Css","JavaScript","TypeScript"], 
  },

{
    id:1,
    title: "Portfolio",
    desc: "Explore my interactive web portfolio built with HTML, CSS, JavaScript, and the latest frameworks!",
    img:"/PO.jpg",
    tags: ["Html","Css","JavaScript","TypeScript","NextJs"], 
},

{

    id:3,
    title: "OOp",
    desc: "This TypeScript project leverages Object-Oriented Programming (OOP) to create a modular and maintainable application with a user-friendly interface.",
    img:"/oop.jpg",
    tags: ["Html","Css","JavaScript","TypeScript"], 
},


    
];
// // Use the data in some logic
// data.forEach(item => {
//   console.log(`${item.title}: ${item.desc}`);
// });



const Projects = () => {
  return (
    <div id='projects' className='projects-container'>
      <Heading  title="My Projects"    />
      <div className='projects-grid  projects-grid-xl  projects-grids-md-2  projects-grid-lg-3 projects-top'>
        {data.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            description={el.desc}
            img={el.img}
            tags={el.tags}
          />


          
        ))}



<div className="button-container">
    <a href="https://github.com/codewithhoney24/codewithhoney24.git" className="view-more-btn">GitHub🎞</a>
</div> 

 <div className="button-container">
    <a href="https://vercel.com/nousheen-atif" className="view-more-btn">View More Projects</a>
</div> 

<div className="button-container">
    <a href="https://www.linkedin.com/in/nousheen-atif-7873a28a" className="view-more-btn">LinkedIn</a>
</div> 

      </div>
    </div>
  );
};

export default Projects;
