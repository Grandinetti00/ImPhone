import './CartWidget.css'
import cart from '../../assets/img/cart.png'

function CartWidget() {
    return (
        <div>
            <a href='' className="cartLink"><img className="cartLogo" src={cart} alt="cart" /></a>
            <span>0</span>
        </div>
    )
}

export default CartWidget