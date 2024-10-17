import React, { useState } from 'react';

const LoginView = () => {
  const [title, setTitle] = useState('');
  const [gifUrl, setGifUrl] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const submitForm = async () => {
    const card = {
      username,
      password
    };

    try {
      const response = await fetch('/api/user', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(card)
      });

      if (response.ok) {
        const result = await response.text();
        setMessage('Card created successfully');
        console.log(result); // Handle success
      } else {
        setMessage('Failed to create card');
        console.error('Failed to create card');
      }
    } catch (error) {
      setMessage('Error occurred');
      console.error('Error:', error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm();
  };

  return (
    <div>
    <div style={{ backgroundColor: 'black', color: 'white', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    <div>
      <h1>Create Card</h1>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px'}}>
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              style={{ padding: '0.5rem', fontSize: '1rem', border: '1px solid #ccc', borderRadius: '4px', marginLeft: '10px' }}
            />
          </label>
        </div>
        <div style={{ marginBottom: '20px'}}>
          <label>
            GIF URL:
            <input
              type="url"
              value={gifUrl}
              onChange={(e) => setGifUrl(e.target.value)}
              required
              style={{ padding: '0.5rem', fontSize: '1rem', border: '1px solid #ccc', borderRadius: '4px', marginLeft: '10px' }}
            />
          </label>
        </div>
        <div style={{ marginBottom: '20px'}}>
          <label>
            Description:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              style={{ padding: '0.5rem', fontSize: '1rem', border: '1px solid #ccc', borderRadius: '4px', height: '100px', marginLeft: '10px' }}
            />
          </label>
        </div>
        <button
          type="submit"
          style={{ padding: '0.5rem 1rem', fontSize: '1rem', color: '#fff', backgroundColor: '#007bff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Create Card
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>

    </div>
    </div>

  );
};

export default LoginView;