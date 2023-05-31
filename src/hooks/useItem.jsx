import { useState, useEffect } from "react"
import {doc, getDoc} from "firebase/firestore"
import {db} from "../firebase/config"

export const useItem = (itemId) => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        const reference = doc(db, "products", itemId);

        getDoc(reference)
        .then ((res) => {
            const phone =
                {...res.data(),
                id: res.id}
        setItem(phone)
        })
        .catch ((err) => {
            console.log(err)
        })
        .finally(()=> {
            setLoading(false)
        })
    }, [])

    return({
        loading,
        item
    })
}
