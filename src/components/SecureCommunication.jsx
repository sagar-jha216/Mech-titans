import React, { useState } from "react";
import { encrypt, decrypt, compare } from "n-krypta";

const SecureCommunication = ({ encryptedMessage, setEncryptedMessage }) => {
  const [message, setMessage] = useState("");

  const encryptMessage = (message) => {
    return encrypt(message, process.env.REACT_APP_SECRET);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const encrypted = encryptMessage(message);

    setEncryptedMessage(JSON.stringify(encrypted, null, 2));
  };

  return (
    <div
      style={{ height: "90vh", width: "100%" }}
      className="bg-dark d-flex justify-content-center align-items-center flex-column"
    >
      <h2 className="text-light my-2">Secure Communication</h2>

      <form onSubmit={handleSubmit}>
        <div className="row d-flex flex-row">
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Message
            </label>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div>
            <button type="submit" className="btn btn-primary">
              Encrypt
            </button>
          </div>
        </div>
      </form>
      {encryptedMessage && (
        <div className="row mt-1">
          <strong className="text-light">Encrypted Message:</strong>
          <pre className="text-success mt-2">{encryptedMessage}</pre>
        </div>
      )}
    </div>
  );
};

export default SecureCommunication;
