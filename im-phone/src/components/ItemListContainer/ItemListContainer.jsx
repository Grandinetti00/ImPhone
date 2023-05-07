import './ItemListContainer.css'
import ItemList from '../itemList/itemList';
import sticker from '../../assets/img/sticker.webp'
import {useProductos}  from '../hooks/useProductos';

export const ItemListContainer = () => {

    const {loading, product} = useProductos()

    return (
        <div className="">
            {
                loading
                    ? <img className='loading' src={sticker} alt='loading' />
                    : <ItemList items={product} />
            }
        </div>
    )
};