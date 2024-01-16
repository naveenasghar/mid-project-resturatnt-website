import React from 'react';

const Footer = () => {
  return (
    <div style={{ fontSize: '30px', fontFamily: 'sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '800px', margin: '30px auto', position: 'relative' }}>
      <div style={{ width: '50%', color: 'black', marginRight: '20px', padding: '20px' }}>
        <h1 style={{ color: 'red' }}>Italian Restaurant</h1>
        <h2>WELCOME</h2>
        <p>Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque.</p>
      </div>
      <div style={{ width: '80%', position: 'absolute', top: 0, right: 0, animation: 'slideIn 5s linear infinite' }}>
        <img src="https://preview.colorlib.com/theme/pato/images/our-story-01.jpg.webp" alt="Your Image" style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }} />
      </div>
      <style>
        {`
          body {
            background-color: #ccc;
          }

          @keyframes slideIn {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Footer;






