import { useEffect, useState } from "react"
import {getData} from "../helpers/getData"

export const useProductos = () => {
    
    const [product, setProduct] = useState ([])
    const [loading, setLoading] = useState (true)
    console.log(product)
    
    useEffect (() => {
        setLoading(true)
        getData()
            .then((res) => {
                setProduct(res)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    },[])

    return ({
        product,
        loading
    })
}