import React from 'react';

const Halfpage = () => {
  return (
    <div style={{ position: 'relative', height: '50vh', overflow: 'hidden' }}>
      <img
        src="https://preview.colorlib.com/theme/pato/images/master-slides-02.jpg.webp"  // Replace with the actual URL of your image
        alt="Your Image"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', fontFamily: 'sans-serif' }}>
      <p style={{ color:"red",fontSize: '40px', margin: '0',fontFamily:"Cursive" }}>Discover</p>
        <h1 style={{ fontFamily:"Monospace",fontSize: '50px', margin: '0' }}>Pato Place</h1>
       
      </div>
    </div>
  );
};

export default Halfpage;

