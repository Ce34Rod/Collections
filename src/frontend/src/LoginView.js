import React, { useState } from "react";

const LoginView = () => {
  const [idNumber, setIdNumber] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <p> Authentication</p>

      <form>
        <div style={{ marginBottom: "20px" }}>
          <label>
            Identification Number :
            <input
              type="text"
              value={idNumber}
              onChange={(e) => idNumber(e.target.value)}
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
             onChange={(e) => password(e.target.value)}
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
      </form>
      <button
        type="button"
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
    </div>
  );
};

export default LoginView;
