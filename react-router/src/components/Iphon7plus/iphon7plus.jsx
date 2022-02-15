import './iphon7plus.css';
import { Link } from "react-router-dom";
import pic from '../../Images/iPhone-7-Plus-Nero.jpg';

export default function Iphone7plus() {
    return <div className="container">
        <div className="navigation-bar">
            <nav>
                <ul>
                    <li><Link to="/" className="links">Главная</Link></li>
                    <li><Link to="/iphone-7" className="links">Iphone 7</Link></li>
                    <li>Iphone 7+</li>
                    <li><Link to="/iphone-8" className="links">Iphone 8</Link></li>
                    <li><Link to="/iphone-8-plus" className="links">Iphone 8+</Link></li>
                    <li><Link to="/iphone-x" className="links">Iphone X</Link></li>
                    <li><Link to="/iphone-12" className="links">Iphone 12</Link></li>
                </ul>
            </nav>
        </div>
        <div className='content'>
            <div className='pic-container'>
                <img src={pic} />
                <button className='btn'>BUY NOW!</button>
            </div>
        </div>
    </div>
}
