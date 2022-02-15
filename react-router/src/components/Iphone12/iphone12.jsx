import './iphon12.css';

import { Link } from "react-router-dom";
import pic from '../../Images/12_Pro_blue.jpg';

export default function Iphone12() {
    return <div className="container">
        <div className="navigation-bar">
            <nav>
                <ul>
                    <li><Link to="/" className="links">Главная</Link></li>
                    <li><Link to="/iphone-7" className="links">Iphone 7</Link></li>
                    <li><Link to="/iphone-7-plus" className="links">Iphone 7+</Link></li>
                    <li><Link to="/iphone-8" className="links">Iphone 8</Link></li>
                    <li><Link to="/iphone-8-plus" className="links">Iphone 8+</Link></li>
                    <li><Link to="/iphone-x" className="links">Iphone X</Link></li>
                    <li>Iphone 12</li>
                </ul>
            </nav>
        </div>
        <div className='content'>
            <div className='pic-container-12'>
                <img src={pic} />
                <button className='btn'>BUY NOW!</button>
            </div>
        </div>
    </div>
}
