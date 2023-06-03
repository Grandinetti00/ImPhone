import data from '../assets/data.json' assert {type: 'json'}
import {collection, addDoc} from 'firebase/firestore'
import {db} from './config.js'

data.forEach((el) => delete el.id)

const productRef = collection (db, 'products')

data.forEach((el) => {
    addDoc(productRef, el)
})