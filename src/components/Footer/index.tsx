import { Link } from "react-router-dom";
import "./Footer.css"
export default function Footer() {
    return (
        <footer className="footer">
            <div className="logo">MySite</div>
            <nav className="nav">
                <ul className="menu">
                    <li><Link to="/">page one</Link></li>
                    <li><Link to="shop">shop</Link></li>
                    <li><Link to="contact-us">Contact-us</Link></li>
                </ul>
            </nav>
        </footer>
    );
}