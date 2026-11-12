import React from "react";

const products = {
    'iPhone 14': 1000,
    'iPhone 15': 1250,
    'Samsung S23 Ultra': 1100
}

function Products(props) {
    return (
            <>
                { Object.entries(products).map( ([phone, price]) => {
                    return  <p key={ phone }>{ phone }, price: ${ price } with tax: { CalculateTax(price, props.tax) }</p>
                }) }
            </>
        )
}

function CalculateTax(price, tax) {
    return price + (price * (tax / 100))
}

export default Products;