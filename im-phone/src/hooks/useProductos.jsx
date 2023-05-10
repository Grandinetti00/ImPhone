import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {getData} from "../helpers/getData"

export const useProductos = () => {
    
    const [product, setProduct] = useState ([])
    const [loading, setLoading] = useState (true)
    const {categoryId} = useParams ()
    
    useEffect (() => {
        setLoading(true)
        
        getData()
            .then((res) => {
                if (!categoryId) {
                    setProduct(res)
                } else {
                    setProduct(res.filter((eL) => eL.category === categoryId))
                }
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    },[categoryId])

    return ({
        product,
        loading
    })
}