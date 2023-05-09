
export const getData = async () => {
    try {
        const importData = await fetch("../../src/assets/data.json");
        const data = await importData.json();
        console.log(data);

        let productList = []

        data.forEach(item => {
            productList.push(
                {
                    picture: item.picture,
                    id: item.id,
                    name: item.name,
                    gb: item.gb,
                    color: item.color,
                    price: item.price
                }
            )
        })
        console.log(productList);

        return productList;

    } catch (error) {
        console.log(error);
    }
}