

const ItemList = ({ items }) => {

    return (
        <div>
            <h2></h2>
            {
                items.map((prod) => (
                    <div key={prod.id}>
                        <img src={prod.img} />
                        <h2>{prod.name}</h2>
                        <h4>Color: {prod.color}</h4>
                        <h4>{prod.GB}GB</h4>
                        <h3><strong>${prod.price}</strong></h3>
                        <button className=''>Add to Cart</button>

                    </div>
                )
                )
            }
        </div>

    )

}

export default ItemList

