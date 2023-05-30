import { useEffect, useState } from "react";
import {getData} from "../../helpers/getData";
import { parsePath, useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import sticker from '../../assets/img/sticker.webp';

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const {itemId} = useParams();
    console.log(itemId)
    console.log(item)

    useEffect(() => {
        setLoading(true);

        getData()
            .then((data) => setItem(data.find((el) => el.id === Number(itemId))))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])

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