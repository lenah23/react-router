import { Link } from "react-router-dom";
import './iphone7.css';
import pic from '../../Images/iphone-7-black.jpg';

export default function Iphone7() {
    return <div className="container">
        <div className="navigation-bar">
            <nav>
                <ul>
                    <li><Link to="/" className="links">Главная</Link></li>
                    <li>Iphone 7</li>
                    <li><Link to="/iphone-7-plus" className="links">Iphone 7+</Link></li>
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