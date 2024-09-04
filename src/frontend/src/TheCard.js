import React from 'react';

function TheCard({ title, gifUrl, description }) {
  return (
    <div style={{
      width: '300px',
      height: '450px',
      backgroundColor: 'white',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
      <h2 style={{
        fontSize: '1.5em',
        textAlign: 'center',
        marginBottom: '10px',
      }}>{title}</h2>

      <div style={{
        width: '100%',
        height: '60%',
        marginBottom: '10px',
      }}>
        <img src={gifUrl} alt={title} style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '5px',
        }} />
      </div>

      <p style={{
        fontSize: '1em',
        textAlign: 'center',
      }}>{description}</p>
    </div>
  );
}

export default TheCard;
