import './itemDetail.css';
import cart from '../../assets/img/cart.png'

const ItemDetail = ({param}) => {

    return (
<div className='itemCart'>
            <div className="cart">
                <img className="cart_picture" src={param.picture} alt="Picture" />
                <div className="cart_section">
                    <p className="cart_title">{param.name}</p>
                </div>
                <div className='cart_description'>
                    <p className="cart_price">${param.price}</p>
                    <p>{param.gb}GB</p>
                    <p>{param.color}</p>
                    <p>Batery Health: {param.bateryHealth}</p>
                    <button className='cart_button'><img className="cartLogo" src={cart} alt="cart" /></button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail