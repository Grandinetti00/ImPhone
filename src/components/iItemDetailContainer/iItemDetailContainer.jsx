import { useItem } from "../../hooks/useItem"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail";
import sticker from '../../assets/img/sticker.webp';
import './itemDetailContainer.css';

const ItemDetailContainer = () => {
    const {itemId} = useParams()
    const {loading, item} = useItem(itemId)

    return (
        <div className="datilContainer">
            {
                loading
                    ? <img className='loading' src={sticker} alt='loading' />
                    : <ItemDetail param={item} />
            }
        </div>
    )
}

export default ItemDetailContainer