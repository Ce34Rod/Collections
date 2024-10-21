import React, { useEffect, useState } from 'react';

const CardDetail = ({ id }) => {
    const [card, setCard] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      console.log("Fetching card with ID:", id); // Log when fetching starts
      const fetchCard = async () => {
          try {
              const response = await fetch(`/api/cards/${id}`);
              console.log("Response Status:", response.status); // Log the response status
              if (response.ok) {
                  const data = await response.json();
                  setCard(data);
              } else if (response.status === 404) {
                  setError('Card not found');
              } else {
                  setError('An error occurred. A');
              }
          } catch (err) {
              setError(err.message);
          } finally {
              setLoading(false);
          }
      };
  
      fetchCard();
  }, [id]); // Ensure it runs when `id` changes
  

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
//        <div>
//            {card ? (
//                <>
//                    <h1>{card.title}</h1>
//                    <img src={card.imageUrl} alt={card.title} />
//                    <p>{card.description}</p>
//                </>
//            ) : (
//                <p>No card data available.</p>
//            )}
//        </div>

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
          );

};

export default CardDetail;
