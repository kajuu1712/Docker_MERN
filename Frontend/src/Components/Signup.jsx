import { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import "./Signup.css"
import { useNavigate } from "react-router-dom";

export default function Signup() {

  const navigate = useNavigate();

  const {setUserData} = useContext(UserContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const res = await fetch("http://localhost:3000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setUserData(formData);

      setFormData({
      name: "",
      email: "",
      number: ""
    });

      navigate("/dashboard");

    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div className="signup-div">
      <h2>Signup Form</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Contact: </label>
          <input
            type="tel"
            name="number"
            value={formData.number}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
