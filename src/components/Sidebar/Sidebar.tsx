import { Link } from "react-router-dom";
import './Sidebar.css';
 export default function Sidebar(){
    return(
        <aside className="sidebar">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/shop'>Shop</Link></li>
                <li><Link to='/contact-us'>Contact us</Link></li>
            </ul>
        </aside>
    );
 }