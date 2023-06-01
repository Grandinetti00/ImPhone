import './itemAdd.css';

const ItemAdd = (param) => {

const handleAdd = () => {
    console.log(param)
}

return (
    <div>
        <button onClick={handleAdd}>Add to Cart</button>
    </div>
)
}

export default ItemAdd