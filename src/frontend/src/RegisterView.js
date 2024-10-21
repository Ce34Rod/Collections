import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterView = () => {
  const [id, setIdNumber] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();  


  const submitForm = async () => {
    const user = {
        id,
        password
    };
    
    console.log('Submitting user:', user);

    try {
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(user)
        });

        if (response.status === 201) {
            setMessage('User registered successfully');
            navigate('/');
          } else if (response.status === 409) {
            setMessage('A user with that username already exists');
          } else {
            setMessage('Failed to register user');
          }
        } catch (error) {
          setMessage('An error occurred while registering');
        }
    };

    const handleSubmit = (event) => { 
        event.preventDefault();
        submitForm();

    }


  return (
    <div>
      <p>Badge Number And Password <br />
        You should write this down
      </p>

      <form onSubmit={handleSubmit}>
        <div
        style={{ marginBottom: "20px" }}>
          <label>
            Identification Number :
            <input
              type="number"
              value={id}
              onChange={(e) => setIdNumber(e.target.value)}
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
        Register
      </button>
      <p>{message}</p>
      </form>
      
    </div>
  );
};

export default RegisterView;