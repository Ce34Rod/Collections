// ButtonComponent.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CreateCardButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/create-card'); // This is the route to navigate to
  };

  return (
    <button
          type="button"
          className="btn btn-outline-light"
          onClick={handleClick}
          style={{
            width: '150px',
      height: '80px',
      position: 'absolute',
      top: '180px', // Adjust for spacing
      left: '50px',

          }}>
          Create a Card
        </button>
  );
};

export default CreateCardButton;
