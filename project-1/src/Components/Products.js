const products = [
    'iPhone 14', 'iPhone 15', 'Samsung S23 Ultra'
]

function Products() {
    return (
            <>
                { products.map(phone => {
                    return  <p>{ phone }</p>
                }) }
            </>
        )
}

export default Products;