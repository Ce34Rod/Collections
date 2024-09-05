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
        <div>
            {card ? (
                <>
                    <h1>{card.title}</h1>
                    <img src={card.imageUrl} alt={card.title} />
                    <p>{card.description}</p>
                </>
            ) : (
                <p>No card data available.</p>
            )}
        </div>
    );
};

export default CardDetail;
