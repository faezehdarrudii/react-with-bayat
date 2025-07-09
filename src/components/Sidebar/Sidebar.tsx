import { Link } from "react-router-dom";
import "./Sidebar.css";
export default function Sidebar() {
  function handleLogout() {
    alert("READ COMMENT PLZ");
    console.log("MUST BE CLEAR AUTH LOCAL STORAGE AND REDIRECT TO /AUTH ROUTE");
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
