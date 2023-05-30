import './itemList.css'
import { ItemCart } from '../itemCart/itemCart'


const ItemList = ({items}) => {
    return (
        <div className='div'>
            {items.map((cel) => (<ItemCart param={cel} key={cel.id}/>))}
        </div>
    )
}

export default ItemList

