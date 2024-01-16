import React from 'react';




const MyComponent = () => {
  const backgroundStyle = {
    backgroundImage: 'url("https://preview.colorlib.com/theme/pato/images/slide1-01.jpg.webp")',
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat',
   
    height: '700px', 
    color: 'white',
    textAlign: 'center',
    textShadow: '2px 2px 4px #000000',
   padding:"60",
   
   
    
  };
 

  const textStyle = {
   padding:'70px',
    fontSize: '5em', 
   
  };

  const buttonStyle = {
    color:'red',
    fontSize: '1.5em',
    borderRadius: '9px', // Adjust the border radius as needed
    padding: '10px 20px', // Adjust padding as needed
    cursor: 'pointer', // Add cursor style for better UX
    transition: 'background-color 0.3s', // Add transition for smooth hover effect
  };

  // :hover style for the button
  buttonStyle['hover'] = {
   backgroundcolor:'orange',
  };

  return (
    <div style={backgroundStyle}>
      {MyComponent}
      <h1 style={{...textStyle}}>WELCOME TO<br/> PATO PLACE</h1>
      <button style={{...buttonStyle}}>Looks Menu</button>
    </div>
    
  );
};

export default MyComponent;