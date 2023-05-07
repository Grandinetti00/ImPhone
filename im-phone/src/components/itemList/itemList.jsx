import './itemList.css'

const ItemList = ({ items }) => {

    return (
        <div className='main'>
            {
                items.map((prod) => (
                    <div className='map' key={prod.id}>
                        <img className='img' src={prod.img} />
                        <h2 className='title'>{prod.name}</h2>
                        <section className='section'>
                            <h4>Color: {prod.color}</h4>
                            <h4>{prod.GB}GB</h4>
                            <h3><strong>${prod.price}</strong></h3>
                        </section>
                        <button className=''>Add to Cart</button>
                    </div>
                )
                )
            }
        </div>

    )

}

export default ItemList

// import { useState } from "react"
// // import { ItemListContainer } from "../ItemListContainer/ItemListContainer";

// const ItemList = () => {

//     const item = [
//         // { id: 1, name: 'iPhone X', GB: 128, color: 'Blue', price: 380, img:imgPath+'iphoneX.png' },
//         // { id: 2, name: 'iPhone XR', GB: 64, color: 'Red', price: 259, img:imgPath+'iphoneXR.png' },
//         // { id: 3, name: 'iPhone XS MAX', GB: 64, color: 'Space Gray', price: 411, img:imgPath+'iphoneXS.png' },
//         // { id: 4, name: 'iPhone 11 PRO', GB: 512, color: 'Gold', price: 520, img:imgPath+'iphone11.png' },
//         // { id: 5, name: 'iPhone 12', GB: 256, color: 'Black', price: 580, img:imgPath+'iphone12.png' },
//         // { id: 6, name: 'iPhone 12', GB: 64, color: 'Green', price: 636, img:imgPath+'iphone12green.png' },
//         // { id: 7, name: 'iPhone X', GB: 512, color: 'Black', price: 420, img:imgPath+'iphoneXn.png' },
//         // { id: 8, name: 'iPhone 11', GB: 128, color: 'Black', price: 470, img:imgPath+'iphone11black.png' },
//     ]

//     const [results, setResults] = useState([])

//     const fetchData = async () => {
//         try {
//             const importData = await fetch("../../src/assets/data.json");
//             const data = await importData.json();
//             data.forEach(item => {
//                 item.push(
//                     {
//                         picture: item.picture,
//                         id: item.id,
//                         name: item.name,
//                         gb: item.gb,
//                         color: item.color,
//                         price: item.price
//                     }
//                 )
//             })
//             let cardItems = []
//             item.map(({ picture, name, gb, color, price }) => {
//                 let card = ItemListContainer(picture, name, gb, color, price);
//                 cardItems.push(card)
//             })
//             setResults(cardItems)
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     fetchData()

//     return (
//         <div className='card-list'>
//             <div>{results}</div>
//         </div>
//     )
// }

// export default ItemList

