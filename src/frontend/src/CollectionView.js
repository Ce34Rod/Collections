import React, { useState } from 'react';
import CardDetail from './CardDetail';
import CreateCardButton from './CreateCardButton';
import MyCollectionButton from './MyCollectionButton';
import LoginButton from './LoginButton';
import RegisterButton from './RegisterButton';

function CollectionView() {
  const [showDot, setShowDot] = useState(false);
  const [randomId, setRandomId] = useState(null);

  const generateRandomId = () => {
          // Generate a random number between 1 and 100 (adjust range as needed)
          const id = Math.floor(Math.random() * 7) + 1;
          setRandomId(id);
      };

  const handleButtonClick = () => {
    setShowDot(true);
    generateRandomId();
  };

  return (
    <div style={{ backgroundColor: 'black', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

    <CreateCardButton />

    <MyCollectionButton />
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
        {showDot && randomId !== null && (
                     <CardDetail id={randomId} />)}

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

      <LoginButton />
      <RegisterButton />
    </div>
  );
}

export default CollectionView;
