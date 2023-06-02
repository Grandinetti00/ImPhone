import './itemDetail.css';
import ItemAdd from "../ItemAdd/itemAdd"
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({ param }) => {

    const { addCart, isInCart } = useContext(CartContext)

    const handleAdd = () => {
        const newItem = param
        addCart(newItem)
    }

    return (
        <div className='itemCart'>
            <div className="cart">
                <img className="cart_picture" src={param.picture} alt="Picture" />
                <div className="cart_section">
                    <p className="detailTitle">{param.name}</p>
                </div>
                <div className='cart_description'>
                    <p className="cart_price">${param.price}</p>
                    <p>{param.gb}GB</p>
                    <p>{param.color}</p>
                    <p>Batery Health: {param.bateryHealth}</p>
                </div>
                {
                    isInCart(param.id)
                        ? <Link className='button' to="/cart">Go to Cart</Link>
                        : <ItemAdd addCart={handleAdd} />
                }
            </div>
        </div>
    )
}

export default ItemDetail