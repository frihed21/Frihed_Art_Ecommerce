
export const Item = ({ category, img, name }) => {
    return (
        <>
            <h1>{name}</h1>
            <h3>{category}</h3>
            <img src={img} alt={category} />
            <br />
            <button>Ver Mas</button>
            <hr />
        </>
    )
}