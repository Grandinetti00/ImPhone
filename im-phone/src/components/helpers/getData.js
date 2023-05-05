import ListProduct from '../../../public/data/listProduct';

const getData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(ListProduct)
        }, 2000)

    })
};

export default getData