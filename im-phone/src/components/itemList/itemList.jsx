import './itemList.css'
import { ItemCart } from '../itemCart/itemCart'


const ItemList = ({items}) => {
    console.log(items)
    return (
        <div className='card-list'>
            {items.map((cel) => (<ItemCart param={cel} key={cel.id}/>))}
        </div>
    )
}

export default ItemList

