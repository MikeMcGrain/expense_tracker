import React, { createContext, useState } from "react"
import shortid from "shortid"

export const ItemsContext = createContext()
const ItemsContextProvider = props => {
  const [items, setItems] = useState([
    {
      id: shortid.generate(),
      date: "2020-10-11",
      description: "Test Object",
      type: "credit",
      amount: 22.43
    }
  ])

  const addItem = (date, description, type, amount) => {
    setItems([
      ...items,
      {
        id: shortid.generate(),
        date: date,
        description: description,
        type: type,
        amount: amount
      }
    ])
  }
  const updateItem = (id, date, description, type, amount) => {
    //for each item, if it has mathing id , then change date, desc, ...
  }
  const removeItem = id => {
    setItems(items.filter(item => item.id !== id))
  }

  return (
    <ItemsContext.Provider value={{ items, addItem, removeItem }}>
      {props.children}
    </ItemsContext.Provider>
  )
}

export default ItemsContextProvider
