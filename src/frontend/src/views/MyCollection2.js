import React, { useState, useEffect } from 'react';
import UserCollection from "../services/UserCollection";


function MyCollectionView2() {
    const [userId, setUserId] = useState(null);
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
      
      useEffect(() => {
        const id = getCookie('userId');
        console.log(id + 'A+B');
        if (id) {
          console.log(id + 'B');
          setUserId(id); // Update state if the ID is found
        }
      }, []);




    return(
        <div>
    {userId ? (
      <UserCollection id={userId} /> // Render only if userId is not null
    ) : (
      <p>Loading...</p> // Or any other placeholder until userId is available
    )}
  </div>
    );
}
export default MyCollectionView2;