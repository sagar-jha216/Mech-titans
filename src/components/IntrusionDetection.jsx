import React, { useState, useEffect } from "react";

const IntrusionDetection = ({ encryptedMessage }) => {
  // State variables to store system logs and intrusion detection status
  const [log, setLog] = useState("");
  const [intrusionDetected, setIntrusionDetected] = useState(false);

  useEffect(() => {
    const logMonitoringInterval = setInterval(() => {
      analyzeSystemLogs();
    }, 5000); // Every 5 seconds (adjust as needed)

    // Clean up interval on component unmount
    return () => clearInterval(logMonitoringInterval);
  }, [encryptedMessage, log]);

  // Function to analyze system logs for potential intrusions
  const analyzeSystemLogs = () => {
    // Simulate dummy intrusion detection logic (replace with actual implementation)
    const threshold = 5; // Replace with an appropriate threshold
    const logArray = log.split(" ");
    const requestCount = logArray.length;

    // Simulate analyzing the encryptedMessage in intrusion detection
    const isEncryptedMessageSuspicious =
      encryptedMessage.includes("suspiciousKeyword");

    // Check if the number of requests or the encryptedMessage is suspicious
    if (requestCount > threshold || isEncryptedMessageSuspicious) {
      setIntrusionDetected(true);
      // In a real-world scenario, you would add logic to respond to the intrusion
    } else {
      setIntrusionDetected(false);
    }
  };

  // Function to handle changes in the log text area
  const handleLogChange = (e) => {
    const newLog = e.target.value;
    setLog(newLog);
  };

  // JSX rendering of the component
  return (
    <div
      style={{ height: "90vh", width: "100%" }}
      className="bg-dark d-flex justify-content-center align-items-center flex-column"
    >
      <h2 className="text-light my-4">Intrusion Detection</h2>

      <div class="form-floating">
        <p className="text-light">LOG:</p>
        <textarea value={log} onChange={handleLogChange} rows={5} cols={50} />
        <label for="floatingTextarea">Log</label>
      </div>

      {intrusionDetected && (
        <div style={{ color: "red", marginTop: "10px" }}>
          <strong>Intrusion Detected!</strong> Potential cyber threat
          identified.
        </div>
      )}
    </div>
  );
};

export default IntrusionDetection;
