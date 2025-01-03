import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyCollectionButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/private-collection'); // This is the route to navigate to
  };

  return (
    <button
      type="button"
      className="btn btn-outline-light"
      onClick={handleClick}
      style={{
        width: '150px',
      height: '80px',
      marginBottom: '10px',
      position: 'absolute',
      top: '90px', // Adjust for spacing between buttons (80px height + 10px margin)
      left: '50px',

      }}>
      My Collection
    </button>

  );
};

export default MyCollectionButton;