import { Link } from "react-router-dom";
import './home.css'
import iphone7 from '../../Images/iphone-7-black.jpg';
import iphone7plus from '../../Images/iPhone-7-Plus-Nero.jpg';
import iphone8 from '../../Images/swappie-product-iphone-8-space-gray.png';
import iphone8plus from '../../Images/iphone8_iphone8plus_product_red_front_back_041018_big_jpg_large1.jpg';
import iphonex from '../../Images/iphone-x-spacegrey-back-2.jpg';
import iphone12 from '../../Images/12_Pro_blue.jpg'
    
    
    
    
export default function Home() {
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
                    <li><Link to="/iphone-12" className="links">Iphone 12</Link></li>
                </ul>
            </nav>
        </div>
        <div className="home-content">
            <img src={iphone7} />
            <img src={iphone7plus} />
            <img src={iphone8} />
            <img src={iphone8plus} />
            <img src={iphonex} />
            <img src={iphone12} />
        </div>
    </div>
}