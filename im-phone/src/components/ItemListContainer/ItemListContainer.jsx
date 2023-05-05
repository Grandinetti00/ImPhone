import './ItemListContainer.css'
import { useState } from 'react';
import { useEffect } from 'react';
import getData from '../helpers/getData';
import ItemList from '../itemList/itemList';

export const ItemListContainer = ({ dataCel }) => {

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

    return (
        <div className="">
            {
                loading
                    ? <h2>LOADING</h2>
                    : <ItemList items={product} />
            }
        </div>
    )
};