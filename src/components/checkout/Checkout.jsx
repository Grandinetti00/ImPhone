import { useContext, useState} from "react";
import { Navigate, Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { collection, addDoc, writeBatch, query, where, documentId, getDocs } from 'firebase/firestore'
import { db } from '../../firebase/config'
import "./Checkout.css"

export const Checkout = () => {

    const { cart, totalPrice, emptyCart } = useContext(CartContext)

    const [values, setValues] = useState({
        name: '',
        mail: '',
        address: '',
    })

    const [orderId, setOrderId] = useState(null)

    const handleInput = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const { name, mail, address } = values
        if (name.length < 5) {
            alert("The name must have at least 5 characters.")
            return
        }
        if (mail.length < 5) {
            alert("The mail must have at least 5 characters.")
            return
        }
        if (address.length < 8) {
            alert("The address must have at least 8 characters.")
            return
        }

        const order = {
            client: values,
            items: cart.map(param => ({ id: param.id, name: param.name, stock: param.stock })),
            total: totalPrice(),
            fyh: new Date(),
        }

        const batch = writeBatch(db)
        const productsref = collection(db, "products")
        const ordersRef = collection(db, "orders")
        const outofStock = []

        const q = query(productsref, where(documentId(), "in", cart.map(param => param.id)))
        const items = await getDocs(q)

        items.docs.forEach((doc) => {
            const item = cart.find((i) => i.id === doc.id)
            console.log(item)
            const unit = doc.data().stock
            console.log(doc.data())
            if (unit > 0) {
                batch.update(doc.ref, {
                    stock: unit - item.stock
                })
                console.log("hay stock")
            } else {
                outofStock.push(item)
                console.log("no hay stock")
            }
        })

        if (outofStock.length === 0) {
            addDoc(ordersRef, order)
                .then((doc) => {
                    batch.commit()
                    setOrderId(doc.id)
                    emptyCart()
                })

        } else {
            alert("No stock available")
        }
    }

    if (orderId) {
        return (
            <div>
                <h2 className='title'>CHECKOUT</h2>
                <div className="wellDone">
                    <p>WELL DONE!</p>
                    <br />
                    <p>Your order ID: <p className="id"><strong>{orderId}</strong></p></p>
                    <Link className='button' to="/">Done</Link>
                </div>

            </div>
        )
    }

    if (cart.length == 0) {
        return <Navigate to={"/"} />
    }

    return (
        <div>
            <h2 className='title'>CHECKOUT</h2>
            <div>
                <form className="form" onSubmit={handleSubmit}>
                    <section className="form_main">
                        <input
                            className="form_data"
                            name="name"
                            value={values.name}
                            onChange={handleInput}
                            type="text"
                            placeholder="Name"></input>

                        <input
                            className="form_data"
                            name="mail"
                            value={values.mail}
                            onChange={handleInput}
                            type="email"
                            placeholder="Mail"></input>

                        <input
                            className="form_data"
                            name="address"
                            value={values.address}
                            onChange={handleInput}
                            type="text"
                            placeholder="Address"></input>
                    </section>
                    <button type="submit">SEND</button>
                </form>
            </div>
        </div>
    )

}