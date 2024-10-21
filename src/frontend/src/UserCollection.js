import React, { useEffect, useState } from 'react';

const UserCollection = ({ id }) => {
    const [collection, setCollection] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isFetching, setIsFetching] = useState(false);

    console.log(id + 'UserCollection ID');

    useEffect(() => {
        const fetchCollection = async () => {
            if (isFetching) return; // Prevents another fetch if one is already ongoing
            setIsFetching(true); // Set fetching to true

            setLoading(true); // Set loading to true before fetch
            try {
                const response = await fetch('http://localhost:8080/api/cards/private-collection', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'User-ID': id, // Send User ID in headers
                    }
                });

                if (response.ok) {
                    const data = await response.json(); // Parse the JSON response
                    setCollection(data); // Update the state with the card data
                } else if (response.status === 404) {
                    setError('Card not found');
                } else {
                    setError('An error occurred. Please try again later.');
                }
            } catch (err) {
                setError('Network error: ' + err.message);
            } finally {
                setLoading(false);
                setIsFetching(false); // Reset fetching flag
            }
        };

        fetchCollection();
    }, [id]);

    // if (collection.length === 0) {
    //     return <p>No cards found in the collection.</p>;
    //   }


    return (<div style={{ backgroundColor: 'black', color: 'white' }}>
    <h1 style={{
      textAlign: 'center',
      color: 'white',
      marginBottom: '20px',
    }}>
      My Collection
    </h1>

    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '20px',
      minHeight: '100vh',
    }}>
      {collection.map((card) => (
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
  </div>
);
};

    export default UserCollection;