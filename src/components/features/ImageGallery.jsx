import React from 'react';

const ImageGallery = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', minHeight: '100vh', background: '#f5f5f5', padding: '20px' }}>
      <div className="gallery-item" style={{ backgroundColor: '#fff', borderRadius: '8px', overflow: 'hidden', position: 'relative' }}>
        <img src="https://preview.colorlib.com/theme/pato/images/intro-01.jpg" alt="Image 1" style={{ height: '30vh', width: 'auto', borderRadius: '8px', marginBottom: '10px' }} />
        <div className="description" style={{ padding: '10px', color: '#666' }}>
          <h1>Romantic Restaurant</h1>
          <p>Experience the most romantic ambiance with our exquisite dishes and beautiful surroundings.</p>
          <button className="learn-more-btn">Learn More</button>
        </div>
        <div className="overlay">
          <span>&rarr;</span>
        </div>
      </div>

      <div className="gallery-item" style={{ backgroundColor: '#fff', borderRadius: '8px', overflow: 'hidden', position: 'relative' }}>
        <img src="https://preview.colorlib.com/theme/pato/images/intro-02.jpg" alt="Image 2" style={{ height: '30vh', width: 'auto', borderRadius: '8px', marginBottom: '10px' }} />
        <div className="description" style={{ padding: '10px', color: '#666' }}>
          <h1>Delicious Food</h1>
          <p>Indulge in a variety of mouth-watering dishes crafted with love and passion by our skilled chefs.</p>
          <button className="learn-more-btn">Learn More</button>
        </div>
        <div className="overlay">
          <span>&rarr;</span>
        </div>
      </div>

      <div className="gallery-item" style={{ backgroundColor: '#fff', borderRadius: '8px', overflow: 'hidden', position: 'relative' }}>
        <img src="https://preview.colorlib.com/theme/pato/images/intro-04.jpg" alt="Image 3" style={{ height: '30vh', width: 'auto', borderRadius: '8px', marginBottom: '10px' }} />
        <div className="description" style={{ padding: '10px', color: '#666' }}>
          <h1>Red Wines You Love</h1>
          <p>Explore our selection of red wines to complement your dining experience and elevate your taste buds.</p>
          <button className="learn-more-btn">Learn More</button>
        </div>
        <div className="overlay">
          <span>&rarr;</span>
        </div>
      </div>

      <style>
        {`
          .overlay {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: rgba(0, 0, 0, 0.7);
            padding: 20px;
            border-radius: 50%;
            opacity: 0;
            transition: opacity 0.3s;
          }

          .overlay span {
            color: #fff;
            font-size: 36px;
          }

          .gallery-item:hover .overlay {
            opacity: 1;
          }

          .learn-more-btn {
            background-color: #4caf50;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .learn-more-btn:hover {
            background-color: #45a049;
          }
        `}
      </style>
    </div>
  );
};

export default ImageGallery;

