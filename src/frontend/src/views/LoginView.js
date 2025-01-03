import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginView = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const submitForm = async () => {
    const user = {
        id,
        password
    };
    
    console.log('Logging in user:', user);

    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(user)
        });

        if (response.status === 200) {
            setMessage('User signed successfully');
            document.cookie = `userId=${user.id}; path=/`;
            console.log(user.id + "react cookie");
            navigate('/');
          } else if (response.status === 409) {
            setMessage('bad credentials');
          } else {
            setMessage('Failed to log in user');
          }
        } catch (error) {
          setMessage('An error occurred while logging in');
        }
    };

    const handleSubmit = (event) => { 
        event.preventDefault();
        submitForm();

    }

  return (
    <div>
      <p> Log in</p>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "20px" }}>
          <label>
            Identification Number :
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
              style={{
                padding: "0.5rem",
                fontSize: "1rem",
                border: "1px solid #ccc",
                borderRadius: "4px",
                marginLeft: "10px",
              }}
            />
            
          </label>
        </div>
        <div>
          <label>
            Password :
            <input 
             type="text"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             required
             style={{
               padding: "0.5rem",
               fontSize: "1rem",
               border: "1px solid #ccc",
               borderRadius: "4px",
               marginLeft: "10px",
             }}
           />
          </label>
        </div>
        <button
        type="submit"
        className="btn btn-outline-light"
        style={{
          width: "150px",
          height: "50px",
          marginBottom: "10px",
          position: "relative",
        }}
      >
        Log in
      </button>
      <p>{message}</p>
      </form>
      
    </div>
  );
};

export default LoginView;
