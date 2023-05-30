import './itemCart.css'
import cart from '../../assets/img/cart.png'
import { Link } from 'react-router-dom';

export const ItemCart = ({ param }) => {

    return (
        <div className='itemCart'>
            <div className="cart">
                <img className="cart_picture" src={param.picture} alt="Picture" />
                <div className="cart_section">
                    <Link to={`/detail/${param.id}`} className="cart_title">{param.name}</Link>
                </div>
                <div className='cart_description'>
                    <p className="cart_price">${param.price}</p>
                    <button className='cart_button'><img className="cartLogo" src={cart} alt="cart" /></button>
                </div>
            </div>
        </div>
    )
};