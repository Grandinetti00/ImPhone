import { useItem } from "../../hooks/useItem"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail";
import sticker from '../../assets/img/sticker.webp';

const ItemDetailContainer = () => {
    const {itemId} = useParams()
    const {loading, item} = useItem(itemId)

    return (
        <div>
            {
                loading
                    ? <img className='loading' src={sticker} alt='loading' />
                    : <ItemDetail param={item} />
            }
        </div>
    )
}

export default ItemDetailContainer