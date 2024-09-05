// ButtonComponent.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CreateCardButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/create-card'); // This is the route to navigate to
  };

  return (
    <button type="button" className="btn btn-outline-dark" onClick={handleClick} style={{
       width: '150px',
        height: '50px',
        marginBottom: '10px',
           }}>
      Go to New View
    </button>
  );
};

export default CreateCardButton;
