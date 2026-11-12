const products = {
    'iPhone 14': 1000,
    'iPhone 15': 1250,
    'Samsung S23 Ultra': 1100
}

function Products(props) {
    return (
            <>
                { Object.entries(products).map( ([phone, price]) => {
                    return  <p>{ phone }, price: ${ price }</p>
                }) }
            </>
        )
}

export default Products;