import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {getData} from "../helpers/getData"
import { collection, getDocs, query, where } from "firebase/firestore"
import {db} from "../firebase/config"

export const useProductos = () => {
    
    const [product, setProduct] = useState ([])
    const [loading, setLoading] = useState (true)
    const {categoryId} = useParams ()
    
    useEffect (() => {
        setLoading(true)

        const reference = collection(db, "products");
        const q = categoryId
            ? query(reference, where("category", "==", categoryId))
            : reference

        getDocs(q)
        .then ((res) => {
            const items = res.docs.map((el) => {
                return {
                    ...el.data(),
                    id: el.id
                }
            })
            setProduct(items)
        })
        .catch ((err) => {
            console.log(err)
        })
        .finally(()=> {
            setLoading(false)
        })
        
        // getData()
        //     .then((res) => {
        //         if (!categoryId) {
        //             setProduct(res)
        //         } else {
        //             setProduct(res.filter((eL) => eL.category === categoryId))
        //         }
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //     })
        //     .finally(() => {
        //         setLoading(false)
        //     })
    },[categoryId])

    return ({
        product,
        loading
    })
}