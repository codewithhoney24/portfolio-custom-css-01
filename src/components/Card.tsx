// import React from 'react';
// import Image from 'next/image';
// import "../app/styles/card.css";

// interface PropsType {
//   title: string;
//   description: string; // make sure you're using `description` consistently
//   img: string;
//   tags: string[];
// }

// const Card: React.FC<PropsType> = ({ title, description, img, tags }) => {
//   return (
//     <div className={`card ${window.innerWidth >= 640 ? 'card-sm' : ""}`}  data-aos="zoom-in -up">
//       <div>
//         <Image
//           className={`card-image ${window.innerWidth >= 640 ? 'card-image-sm' : ""}`} 
//           src={img}
//           width={350}
//           height={350}
//           alt={title}
//         />
//       </div>

//       <div className='card-content'>
//         <div className='card-title'>{title}</div>
//         <div>{description}</div> {/* Use `description` to match the prop name */}
//         <div>
//           {tags.map((el) => (
//             <div className='catags' key={el}>
//               {el}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Card;











import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import "../app/styles/card.css";

interface PropsType {
  title: string;
  description: string;
  img: string;
  tags: string[];
}

const Card: React.FC<PropsType> = ({ title, description, img, tags }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth >= 640);
    };

    // Set initial value on component mount
    handleResize();
    // Update on resize
    window.addEventListener('resize', handleResize);
    
    // Cleanup listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`card ${isSmallScreen ? 'card-sm' : ""}`} data-aos="zoom-in-up">
      <div>
        <Image
          className={`card-image ${isSmallScreen ? 'card-image-sm' : ""}`}
          src={img}
          width={350}
          height={350}
          alt={title}
        />
      </div>

      <div className="card-content">
        <div className="card-title">{title}</div>
        <div className='card-des'>{description}</div>
        <div>
          {tags.map((tag) => (
            <div className="card-tags" key={tag}>
              {tag}


              
            </div>
            
          ))}
        </div>

        
      </div>

      
    </div>



  );
};

export default Card;
