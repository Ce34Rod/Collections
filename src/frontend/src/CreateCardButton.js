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
            height: '50px',
            marginBottom: '10px',
            position: 'relative',
            left: '30%',
            top: '17%'

          }}>
          Create a Card
        </button>
  );
};

export default CreateCardButton;
