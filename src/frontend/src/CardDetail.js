import React, { useEffect, useState } from 'react';

const CardDetail = ({ id }) => {
    const [card, setCard] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCard = async () => {
            try {
                const response = await fetch(`/api/cards/${id}`); // Call the backend with the card ID
                if (response.ok) {
                    const data = await response.json(); // Parse the JSON response
                    setCard(data); // Update the state with the card data
                } else if (response.status === 404) {
                    setError('Card not found');
                } else {
                    setError('An error occurred');
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCard(); // Call the function when the component mounts
    }, [id]); // Re-run the effect when the ID changes

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
