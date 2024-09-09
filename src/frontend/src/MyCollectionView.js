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
    <div>
      <h1>My Collection</h1>
      <div>
        {cards.map((card) => (
          <CardDetail key={card.id} id={card.id} title={card.title} description={card.description} gifUrl={card.gifUrl} />
        ))}
      </div>
    </div>
  );

}
export default MyCollectionView;