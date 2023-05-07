import { useEffect, useState } from "react"
import getData from "../helpers/getData"

export const useProductos = () => {
    
    const [product, setProducrt] = useState ([])
    const [loading, setLoading] = useState (true)
    console.log(product)
    
    useEffect (() => {
        setLoading(true)
        getData()
            .then((res) => {
                setProducrt(res)
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