import { Link } from "react-router-dom";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {

  const navigate=useNavigate();

  function handleLogout() {
    localStorage.clear()
    navigate("/auth")
  }

  return (
    <aside className="sidebar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact us</Link>
        </li>

        <li style={{ color: "red" }} onClick={handleLogout}>
          LOG OUT
        </li>
      </ul>
    </aside>
  );
}
