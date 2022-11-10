import './cartwidget.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    return (
    <div className='cart'>
        <li className="nav-item">
            <Link to="/cart">
            <button><FontAwesomeIcon icon={faCartShopping} /></button>
            </Link>
                   
        </li>        
    </div>
    );
}

export default CartWidget;
