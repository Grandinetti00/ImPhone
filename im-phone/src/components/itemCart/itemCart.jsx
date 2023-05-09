
export const ItemCart = ({ param }) => {
    console.log(param)
    return (
        <div className="">
            <h2>Hola mudo</h2>
            <p>{param.name}</p>
            <img src={param.picture} alt="" />
        </div>
    )
};