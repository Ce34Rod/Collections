import React from 'react';

function Collection() {
  return (
    <div style={{ backgroundColor: 'black', height: '100vh', position: 'relative' }}>
      <h1 style={{
        position: 'absolute',
        color: 'white',
        top: '10%',
        left: '42%'
      }}>
        The Collection
      </h1>
      <div className="dispenser" style={{
        marginTop: '30%',
        marginLeft: '35%',
      }}>
        <button type="button" className="btn btn-outline-light" style={{
          margin: 'auto',
          width: '50%',
          height: '50%',
        }}>
          Get card
        </button>
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
