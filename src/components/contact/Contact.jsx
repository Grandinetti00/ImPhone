import { useState } from "react";
import "./Contact.css"

const Contact = () => {
    const [values, setValues] = useState ({
        name: '',
        mail: '',
        text: '',
    })

    const handleInput = (e) => {
        console.log(e.target.name)

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDeffault() 
        console.log('submit');
        console.log(values)
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
