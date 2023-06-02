import './itemAdd.css';

const ItemAdd = ({addCart}) => {
console.log(addCart)

return (
    <div>
        <button onClick={addCart}>Add to Cart</button>
    </div>
)
}

export default ItemAdd