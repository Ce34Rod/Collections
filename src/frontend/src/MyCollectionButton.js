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
        height: '50px',
        marginBottom: '10px',
        position: 'relative',
        left: '-30%',
        bottom: '-12%',

      }}>
      My Collection
    </button>

  );
};

export default MyCollectionButton;