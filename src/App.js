import React from "react"
import Form from "./Components/Form"
import List from "./Components/List"

export default App => {
  return (
    <>
      <Form />
      <List catInfo={{name: "Mr. Whiskers", imageURL: "http://placekitten.com/300/200", alt: "cat picture"}} />
      {/* <List 
        name="Catters"
        imageURL="http://placekitten.com/400/200"
        alt ="another friggin' cat picture" /> */}
    </>
  )
}