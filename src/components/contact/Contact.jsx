import { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import "./Contact.css"

const Contact = () => {
    const [values, setValues] = useState({
        name: '',
        mail: '',
        text: '',
    })

    // useEffect(()=> {
    //     condition();
    // }, [])

    const handleInput = (e) => {
        console.log(e.target.name)

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    // const condition = ()=> {

    //     const {name, mail, text} = values
    //     if (name.length < 5) {
    //         Swal.fire({
    //             icon: 'error',
    //             title: 'The name is invalid',
    //             text: 'Must have at least 5 characters',
    //           })
    //           return
    //     }
    //     if (mail.length < 5) {
    //         Swal.fire({
    //             icon: 'error',
    //             title: 'The mail is invalid',
    //             text: 'Must have at least 5 characters',
    //           })
    //           return
    //     }
    //     if (text.length === 0) {
    //         Swal.fire({
    //             icon: 'error',
    //             title: 'The address is invalid',
    //             text: 'Must have at least 8 characters',
    //           })
    //           return
    //     }

    // }

    const handleSubmit = (e) => {
        e.preventDefault()
        // condition()

        return (
            alert("Well Done!")
        )
    }

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <h2 className="title">CONTACT US</h2>
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

                    <textarea
                        className="form_data"
                        name="text"
                        value={values.text}
                        onChange={handleInput}
                        type="text"
                        rows="5"
                        cols="10"
                        placeholder="What do you want to sell?"></textarea>
                </section>
                <button type="submit">SEND</button>
            </form>
        </div>
    )
}

export default Contact
