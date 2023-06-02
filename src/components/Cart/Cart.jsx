import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './cart.css'


const Cart = () => {

    const { cart, emptyCart, totalPrice, removeItem } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div>
                <h2 className='title'>YOUR CART IS EMPTY</h2>
                <Link to="/" className='button'>Our Products</Link>
            </div>
        )
    }
    return (
        <div>
            <h2 className='title'>YOUR CART</h2>

            {
                cart.map((param) => (
                    <div className="cartContent" key={param.id}>
                        <div>
                            <img className="cart_picture" src={param.picture} alt="Picture" />
                            <div className="cart_section">
                                <p className="detailTitle">{param.name}</p>
                            </div>
                            <div className='cart_description'>
                                <p className="cart_price">${param.price}</p>
                            </div>
                            <button onClick={() => removeItem(param.id)} className='emptyButton'>Remove</button>
                        </div>

                    </div>
                ))
            }
            <div className='toBuy'>
                <h3><strong>TOTAL: ${totalPrice()}</strong></h3>
                <button onClick={emptyCart} className='emptyButton'>Clean Cart</button>
                <Link to="/checkout" className='button'>Buy</Link>
            </div>
        </div>
    )
}
export default Cart