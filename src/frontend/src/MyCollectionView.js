import React, { useState, useEffect } from 'react';
import CardDetail from './CardDetail';

function MyCollectionView() {
    const [cards, setCards] = useState([]); // State to hold cards data
    const [loading, setLoading] = useState(true); // Loading state


    useEffect(() => {

    const fetchCards = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/cards/private-collection'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch cards');
        }
        const data = await response.json();
        setCards(data);  // Set the cards data in the state
        setLoading(false); // Stop loading when data is fetched
      } catch (error) {
        console.error('Error fetching cards:', error);
        setLoading(false);
      }
    };

    fetchCards(); // Fetch the cards when component mounts
  }, []); // Empty dependency array ensures this runs only once

  // Display loading message while fetching data
  if (loading) {
    return <p>Loading...</p>;
  }

  // If no cards are found, display a message
  if (cards.length === 0) {
    return <p>No cards found in the collection.</p>;
  }


return (
        <><h1 style={{
        backgroundColor: 'black',
              textAlign: 'center',
              display: 'center',
              color: 'white',
              marginBottom: '20px',
            }}>
              My Collection
            </h1>

     <div style={{ backgroundColor: 'black', height: '100vh', display: 'flex',
     }}>


      <div style={{
        marginTop: '10%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap', // Allows cards to wrap to a new line if there are many
        gap: '20px', // Adds space between the cards
        height: '100vh', // Ensures full height for vertical centering
      }}>
        {cards.map((card) => (
          <div key={card.id} style={{
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
              color: 'black',
            }}>{card.title}</h2>

            <div style={{
              width: '100%',
              height: '60%',
              marginBottom: '10px',
            }}>
              <img src={card.gifUrl} alt={card.title} style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '5px',
              }} />
            </div>

            <p style={{
              fontSize: '1em',
              textAlign: 'center',
              color: 'black',
            }}>{card.description}</p>
          </div>
        ))}
      </div>

    </div></>


  );

}
export default MyCollectionView;