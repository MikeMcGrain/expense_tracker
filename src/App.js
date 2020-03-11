import React from "react"
// import Form from "./Components/Form"
// import List from "./Components/List"
import Product from "./Components/Product.js"
import productsData from "./productsData.js"

export default App => {
  const productComponents = productsData.map(item => <Product key={item.id} product={item} />)
  return (
    <div>
      {/* <Form />
      <List catInfo={{name: "Mr. Whiskers", imageURL: "http://placekitten.com/300/200", alt: "cat picture"}} />
      <List 
        name="Catters"
        imageURL="http://placekitten.com/400/200"
        alt ="another friggin' cat picture" />
      <Product products={productsData} /> */}
      {productComponents}
      </div>
  )
}