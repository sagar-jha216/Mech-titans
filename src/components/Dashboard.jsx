import React from "react";

const Dashboard = ({ isAdmin }) => {
  const handleModifySolarPanelSettings = () => {
    if (isAdmin) {
      // Simulate modifying solar panel settings (e.g., API call, state update)
      console.log("Solar panel settings modified by admin.");
    } else {
      console.log(
        "Access denied. Only admins can modify solar panel settings."
      );
    }
  };

  const handleModifyBatterySettings = () => {
    if (isAdmin) {
      // Simulate modifying battery settings (e.g., API call, state update)
      console.log("Battery settings modified by admin.");
    } else {
      console.log("Access denied. Only admins can modify battery settings.");
    }
  };

  return (
    <div
      style={{ height: "90vh", width: "100%" }}
      className="bg-dark d-flex justify-content-center align-items-center flex-column"
    >
      <h2 className="text-light mt-2">Microgrid Configuration</h2>
      <button onClick={handleModifySolarPanelSettings} className="my-3">
        Modify Solar Panel Settings
      </button>
      <button onClick={handleModifyBatterySettings}>
        Modify Battery Settings
      </button>
    </div>
  );
};

export default Dashboard;
