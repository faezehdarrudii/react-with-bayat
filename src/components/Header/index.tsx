import { Link } from "react-router-dom";
import Button from "../Button";
import './Header.css'

export default function Header() {
    return (
        <header className="header">

            <div className="logo">MySite</div>
            <nav className="nav">
                <ul className="menu">
                    <li><Link to="/">page one</Link></li>
                    <li><Link to="shop">shop</Link></li>
                    <li><Link to="contact-us">Contact-us</Link></li>
                </ul>
            </nav>
            <Button>Login</Button>

        </header>
    );
} 