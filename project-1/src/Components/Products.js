const products = [
    'iPhone 14', 'iPhone 15', 'Samsung S23 Ultra'
]

function Products(props) {
    return (
            <>
                { products.map(phone => {
                    return  <p>{ phone }, tax: { props.tax}</p>
                }) }
            </>
        )
}

export default Products;