import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import {collection, addDoc, writeBatch, query, where, documentId, getDocs} from 'firebase/firestore'
import {db} from '../../firebase/config'
import { Link } from "react-router-dom";


export const Checkout = () => {

    const {cart, totalPrice, emptyCart} = useContext(CartContext)

    const [values, setValues] = useState ({
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
        e.preventDeffault()

        const {name, mail, address } = values
        if (name.length < 5) {
            alert("The name is invalid")
            return
        }
        if (mail.length < 5) {
            alert("The mail is invalid")
            return
        }
        if (address.length < 8) {
            alert("The address is invalid")
            return
        }

        const order = {
            client: values,
            items: cart.map(param => ({id: param.id, name: param.name, stock: param.stock})),
            total: totalPrice(),
            fyh: new Date(),
        }

        const batch = writeBatch(db)
        const productsref = collection(db, "products")

        const ordersRef = collection(db, "orders")
        const q = query(productsref, where( documentId(), "in", cart.map(param => param.id)))
        const outofStock = []
        const items = await getDocs(q)
        items.docs.forEach((el) => {
            const item = cart.find((i) => i.id === doc.i)
            const unit = doc.data().unit
            if(unit >= param.stock) {
                batch.update(doc.ref, {
                    unit: unit - param.stock
                })
            } else {
                outofStock.push(item)
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
                <p>WELL DONE!</p>
                <p>Your order ID: <strong>{orderId}</strong></p>
                <Link className='button' to="/">Done</Link>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to='/' />
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