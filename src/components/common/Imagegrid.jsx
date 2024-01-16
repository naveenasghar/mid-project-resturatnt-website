import React, { useState } from 'react';

const ImageGrid = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, url: 'https://preview.colorlib.com/theme/pato/images/our-menu-01.jpg' },
    { id: 2, url: 'https://preview.colorlib.com/theme/pato/images/our-menu-05.jpg', caption: 'Right Up' },
    { id: 3, url: 'https://preview.colorlib.com/theme/pato/images/our-menu-08.jpg', caption: 'Left Middle' },
    { id: 4, url: 'https://preview.colorlib.com/theme/pato/images/our-menu-10.jpg', caption: 'Right Middle' },
    { id: 5, url: 'https://preview.colorlib.com/theme/pato/images/our-menu-13.jpg', caption: 'Left Down' },
    { id: 6, url: 'https://preview.colorlib.com/theme/pato/images/our-menu-16.jpg'}
  ];

  const handleImageClick = (imageId) => {
    setSelectedImage(images.find((img) => img.id === imageId));
  };

  return (
    <div className="image-grid-container">
      {images.map((image) => (
        <div key={image.id} className="image-item" onClick={() => handleImageClick(image.id)}>
          <img src={image.url} alt={image.caption} />
        </div>
      ))}

      {selectedImage && (
        <div className="selected-image">
          <img src={selectedImage.url} alt={selectedImage.caption} />
          <div className="caption">
            <h1>{selectedImage.caption}</h1>
          </div>
        </div>
      )}

      <style>
        {`
          .image-grid-container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            padding: 20px;
          }

          .image-item {
            overflow: hidden;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            cursor: pointer;
            transition: transform 0.3s;
          }

          .image-item:hover {
            transform: scale(1.05);
          }

          .image-item img {
            width: 80%;
            height: 80%;
            object-fit: cover;
            display: block;
            margin: auto;
          }

          .selected-image {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
          }

          .selected-image img {
            max-width: 80%;
            max-height: 80%;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          }

          .caption {
            position: absolute;
            bottom: 20px;
            text-align: center;
            width: 100%;
            color: #fff;
          }
        `}
      </style>
    </div>
  );
};

export default ImageGrid;



