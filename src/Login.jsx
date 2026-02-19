import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("User");

  const users = [
  { email: "admin@ayush.gov.in", password: "1234", role: "Admin" },
  { email: "user@ayush.gov.in", password: "1234", role: "User" }
];

const handleLogin = (e) => {
  e.preventDefault();

  const user = users.find(
    (u) =>
      u.email.toLowerCase() === email.toLowerCase().trim() &&
      u.password === password.trim() &&
      u.role === role
  );

  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/dashboard");
  } else {
    alert("Invalid Credentials ❌");
  }
};

  return (
    <div className="login-page">
      <div className="overlay"></div>

      <form className="login-card" onSubmit={handleLogin}>
        <h1>🌿 Ministry of AYUSH</h1>
        <p className="subtitle">Secure Ayurvedic Portal</p>

        <input
          type="email"
          placeholder="Official Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option>User</option>
          <option>Admin</option>
        </select>

        <button type="submit">Secure Login</button>

        <p className="footer-text">© Govt. of India | AYUSH Digital</p>
      </form>
    </div>
  );
}
