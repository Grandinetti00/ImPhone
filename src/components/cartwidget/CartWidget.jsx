import './CartWidget.css'
import cart from '../../assets/img/cart.png'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

function CartWidget() {
const {totalCart} = useContext(CartContext)

    return (
        <div>
            <a href='/cart' className="cartLink"><img className="cartLogo" src={cart} alt="cart" /></a>
            <span>{totalCart()}</span>
        </div>
    )
}

export default CartWidget