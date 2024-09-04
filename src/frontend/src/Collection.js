import React, { useState } from 'react';
import TheCard from './TheCard'; // Adjust the path if necessary

function Collection() {
  const [showDot, setShowDot] = useState(false);

  const handleButtonClick = () => {
    setShowDot(true);
  };

  return (
    <div style={{ backgroundColor: 'black', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{
        color: 'white',
        marginBottom: '20px',
      }}>
        The Collection
      </h1>
      <div className="dispenser" style={{
        display: 'flex',
        flexDirection: 'column',  // Ensure elements are stacked vertically
        alignItems: 'center',
      }}>
        <button type="button" className="btn btn-outline-light" style={{
          width: '150px',
          height: '50px',
          marginBottom: '10px',
        }} onClick={handleButtonClick}>
          Get card
        </button>
        {showDot && (
          <div style={{
            width: '20px',
            height: '20px',
            backgroundColor: 'yellow',
            borderRadius: '50%',
            marginBottom: '20px' // Add some space between the dot and the card
          }}></div>
        )}
        {showDot && (
          <TheCard
            title="Amazing Card"
            gifUrl="https://media.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif"
            description="This is an amazing trading card with a cool GIF!"
          />
        )}
      </div>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossOrigin="anonymous"
      />
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossOrigin="anonymous"
      />
    </div>
  );
}

export default Collection;
