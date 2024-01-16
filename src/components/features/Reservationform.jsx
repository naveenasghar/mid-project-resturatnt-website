import React from 'react';

const ReservationForm = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
  };

  const contentStyle = {
    flex: 1,
    maxWidth: '400px',
  };

  const h1Style = {
    color: '#333',
    fontSize: '2em',
    marginBottom: '20px',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const labelStyle = {
    marginBottom: '5px',
  };

  const inputStyle = {
    padding: '10px',
    marginBottom: '15px',
  };

  const buttonStyle = {
    backgroundColor: '#4caf50',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const imageContainerStyle = {
    flex: 1,
    marginLeft: '100px',
    
  };

  const imageStyle = {
    width: '50%',
    borderRadius: '5px',
    
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1 style={h1Style}>Reservation Form</h1>
        <form style={formStyle}>
          {/* Add your reservation form fields here */}
          <label htmlFor="name" style={labelStyle}>
            Name:
          </label>
          <input type="text" id="name" name="name" placeholder="Your Name" style={inputStyle} />

          <label htmlFor="date" style={labelStyle}>
            Date:
          </label>
          <input type="date" id="date" name="date" style={inputStyle} />

          <label htmlFor="time" style={labelStyle}>
            Time:
          </label>
          <input type="time" id="time" name="time" style={inputStyle} />

          <button type="submit" style={buttonStyle}>
            Reserve Now
          </button>
        </form>
      </div>
      <div style={imageContainerStyle}>
        {/* Add your image here */}
        <img src="https://preview.colorlib.com/theme/pato/images/booking-01.jpg" alt="Restaurant" style={imageStyle} />
      </div>
    </div>
  );
};

export default ReservationForm;
