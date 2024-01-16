import React from 'react';

const RestaurantFooter = () => {
  return (
    <div style={{
      backgroundColor: '#333',
      color: 'white',
      textAlign: 'center',
      padding: '10px',
      position: 'fixed',
      bottom: 0,
      width: '100%',
    }}>
      <p>&copy; 2024 Restaurant Name. All rights reserved.</p>
    </div>
  );
};

export default RestaurantFooter;
