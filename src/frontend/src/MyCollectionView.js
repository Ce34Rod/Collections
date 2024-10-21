import React, { useState, useEffect } from 'react';

function MyCollectionView() {
    const [cards, setCards] = useState([]); // State to hold cards data
    const [loading, setLoading] = useState(true); // Loading state
    const [userId, setUserId] = useState(null);

    console.log(document.cookie + 'global cookie');

    const getDifferentCookie = (name) => {
      const value = `; ${document.cookie}`;
      console.log(value+'value');
    
      // Split the cookie string by the `; name=` pattern
      const parts = value.split(`; ${name}=`);
    
      console.log(parts+'parts');
    
      // Check if the cookie name exists in the string
      if (parts.length === 2) {
        // Extract the value part from the second split
        const cookieValue = parts.pop().split(';').shift();
        console.log(cookieValue+'cookie value'); // Output the cookie value
        return cookieValue;
      } else {
        console.log("Cookie not found");
        return null;
      }
    };
    


    useEffect(() => {

      const id = getDifferentCookie('userId');
      console.log(id + 'A+B');
        if (id) {
          console.log(id + 'B');
            setUserId(id);
        }


    document.body.style.margin = '0';
            document.body.style.padding = '0';
            document.documentElement.style.margin = '0';
            document.documentElement.style.padding = '0';

    const fetchCards = async () => {
      try {
        const getCookie = (name) => {
          const value = `; ${document.cookie}`;
          console.log(value+'value');
        
          // Split the cookie string by the `; name=` pattern
          const parts = value.split(`; ${name}=`);
        
          console.log(parts+'parts');
        
          // Check if the cookie name exists in the string
          if (parts.length === 2) {
            // Extract the value part from the second split
            const cookieValue = parts.pop().split(';').shift();
            console.log(cookieValue+'cookie value'); // Output the cookie value
            return cookieValue;
          } else {
            console.log("Cookie not found");
            return null;
          }
        };
        const id = getCookie('user');
      console.log(id + 'D');
        if (id) {
          console.log(id + 'E');
            setUserId(id);
        }
        const response = await fetch('http://localhost:8080/api/cards/private-collection',
          { method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'User-ID': id, // Send User ID in headers
    }
  }

        ); // Replace with your API endpoint
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
  <div style={{ backgroundColor: 'black', color: 'white' }}>
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
  </div>
);


}
export default MyCollectionView;