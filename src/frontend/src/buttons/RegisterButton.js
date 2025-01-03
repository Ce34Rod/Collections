import React from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/register'); // This is the route to navigate to
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
        top: '360px',
        left: '50px',
      }}>
      Obtain Credintials
    </button>

  );
};

export default RegisterButton;