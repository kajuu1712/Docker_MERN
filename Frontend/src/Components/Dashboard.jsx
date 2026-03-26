import { useContext } from "react";
import { UserContext } from "./UserContext";
import "./Dashboard.css"
import { useNavigate } from "react-router-dom";

export default function Dashboard() {

  const { userData } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <h2>Welcome, {userData.name || "User"} 🎉</h2>
      <p><strong>Email:</strong> {userData.email}</p>
      <p><strong>Phone:</strong> {userData.number}</p>
      <button onClick={() => navigate("/signup")}>BACK</button>
    </div>
  );
}