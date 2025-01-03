import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login'); // This is the route to navigate to
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
      top: '270px', // Adjust for spacing
      left: '50px',
      }}>
      Log in
    </button>

  );
};

export default LoginButton;