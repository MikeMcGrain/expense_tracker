import React from "react"

export default function Product(props) {
    console.log(props)
    return (
        <div>
            <h2>{props.product.name}</h2>
            <p>{props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })} - {props.product.description}</p>
        </div>  
    )
}