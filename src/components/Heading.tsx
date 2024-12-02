import React from 'react'
import "../app/styles/heading.css";


interface PropsType{
    title: string;
}
const Heading :React.FC<PropsType> = ({title}) => {
  return (
    <div className='heading-container'><br></br><br></br><br></br>
        <p className='heading-title'>{title}</p>

        
      
    </div>

    
  );
};

export default Heading;
