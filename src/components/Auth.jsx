import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Auth = ({ userRole, onUserRoleChange }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const navigate = useNavigate();
  const handleAccessRequest = () => {
    // Simulate checking user role for authorization (replace with actual implementation)
    if (userRole === "admin") {
      // For illustration, grant full authority to the admin
      setIsAuthorized(true);
      navigate("/dashboard");
    } else if (userRole === "user") {
      // For illustration, grant limited authority to regular users
      setIsAuthorized(false);
    }
  };

  const handleRoleChange = (e) => {
    const newRole = e.target.value;
    setIsAuthorized(false); // Reset authorization status when role changes
    onUserRoleChange(newRole);
    if (newRole === "admin") {
      setIsAuthorized(true);
    } else {
      setIsAuthorized(false);
    }
  };

  return (
    <div
      style={{ height: "90vh", width: "100%" }}
      className="bg-dark d-flex justify-content-center align-items-center flex-column"
    >
      <h2 className="text-light">Access Control</h2>
      <label>
        User Role:
        <select
          value={userRole}
          onChange={handleRoleChange}
          className="role-select"
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </label>
      <button onClick={handleAccessRequest}>Request Access</button>
      {isAuthorized ? (
        <div className="authorization-message success">
          <strong>Access Granted!</strong> You have authorization to modify the
          microgrid system.
        </div>
      ) : (
        <div className="authorization-message error">
          <strong>Access Denied!</strong> You do not have the necessary
          authorization.
        </div>
      )}
    </div>
  );
};

export default Auth;
