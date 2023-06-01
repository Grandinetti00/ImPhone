import './itemDetail.css';
import ItemAdd from "../ItemAdd/itemAdd"

const ItemDetail = ({param}) => {

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
                    <ItemAdd param={param}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail