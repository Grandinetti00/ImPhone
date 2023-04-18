import './ItemListContainer.css'

function ItemListContainer({ message }) {

    return (
        <body className="header">
            <div className="slogan">
                <p>CHOOSE THE MODEL OF YOUR FUTURE</p>
            </div>
            <div className="parametro">
                <p>{message}</p>
            </div>
        </body>
    )
}

export default ItemListContainer