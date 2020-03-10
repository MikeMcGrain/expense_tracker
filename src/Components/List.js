import React from "react"

export default (catObj) => {
  console.log(catObj)
  return (
    <div>
      <h1>Test from List Component</h1>
      <h3>{catObj.catInfo.name}</h3>
      <img src={catObj.catInfo.imageURL} alt={catObj.catInfo.alt}/>
    </div>
  )
}