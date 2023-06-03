import './CartWidget.css'
import cart from '../../assets/img/cart.png'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

function CartWidget() {
const {totalCart} = useContext(CartContext)

    return (
        <div>
            <Link to='/cart' className="cartLink"><img className="cartLogo" src={cart} alt="cart" /></Link>
            <span>{totalCart()}</span>
        </div>
    )
}
export default CartWidget